// 太阳之子发色识别脚本

// 核心优化：全局复用临时画布，避免重复创建
const tempCanvas = document.createElement('canvas');
const tempCtx = tempCanvas.getContext('2d');

// 核心DOM元素
let previewImg, positionWrapper, detectionCanvas, detectionCtx, mainTip, finalResult;

// 固定参数（保持不变）
const T_PARAMS = {
    hMin: 30, hMax: 45,
    sMin: 75, sMax: 125,
    vMin: 50, vMax: 255
};
const JUDGE_RATIO = 0.39;

// 全局变量
let circleRadius = 20;
let originalImage = new Image();
let isImageLoaded = false;
let imageDataCache = null; // 缓存图片像素数据

// 初始化
function init() {
    // 获取DOM元素
    previewImg = document.getElementById('previewImg');
    positionWrapper = document.getElementById('positionWrapper');
    detectionCanvas = document.getElementById('detectionCanvas');
    detectionCtx = detectionCanvas.getContext('2d');
    mainTip = document.getElementById('mainTip');
    finalResult = document.getElementById('finalResult');
    
    // 绑定事件
    document.getElementById('imageUpload').addEventListener('change', handleImageUpload);
    positionWrapper.addEventListener('click', handleClickDetect);
    window.addEventListener('load', resizeCanvas);
    window.addEventListener('resize', resizeCanvas);
}

// 调整画布尺寸
function resizeCanvas() {
    if (!positionWrapper) return;
    const containerWidth = positionWrapper.clientWidth || 350;
    detectionCanvas.width = containerWidth;
    detectionCanvas.height = 200;
    circleRadius = Math.max(20, containerWidth / 20);
}

// 处理图片上传（优化：提前缓存像素数据）
function handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file || !file.type.match('image.*')) {
        alert('请选择有效的图片文件');
        updateResult('未上传有效图片', 'result-error');
        isImageLoaded = false;
        return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
        previewImg.src = e.target.result;
        originalImage.src = e.target.result;

        previewImg.onload = () => {
            // 缓存原始图片像素数据，避免重复读取
            tempCanvas.width = originalImage.width;
            tempCanvas.height = originalImage.height;
            tempCtx.drawImage(originalImage, 0, 0);
            imageDataCache = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);

            // 计算缩放比例
            const containerWidth = positionWrapper.clientWidth || 350;
            const containerHeight = Math.max(200, containerWidth * (previewImg.naturalHeight / previewImg.naturalWidth));
            
            // 正确设置预览图的样式，确保它完全适应容器
            previewImg.style.width = '100%';
            previewImg.style.height = 'auto';
            
            // 确保预览图完全加载并渲染后再设置canvas尺寸
            // 增加延迟时间，确保在移动端有足够时间完成渲染
            setTimeout(() => {
                // 重新计算实际的缩放比例
                if (previewImg.clientWidth > 0) {
                    detectionCanvas.width = previewImg.clientWidth;
                    detectionCanvas.height = previewImg.clientHeight;
                    circleRadius = Math.max(20, previewImg.clientWidth / 20);
                }
            }, 300); // 增加延迟时间至300ms，确保在移动设备上有足够时间

            // 更新UI状态
            previewImg.style.opacity = 1;
            mainTip.textContent = '点击图片中的发色区域开始识别\n';
            updateResult('已加载图片，请点击发色区域', 'result-error');
            clearCanvas();
            isImageLoaded = true;
        };

        previewImg.onerror = () => {
            alert('图片加载失败，请更换图片');
            previewImg.style.opacity = 0;
            updateResult('图片加载失败', 'result-error');
            isImageLoaded = false;
        };
    };
    reader.readAsDataURL(file);
}

// 点击识别（修复移动端问题：避免使用可能导致兼容问题的requestIdleCallback）
function handleClickDetect(e) {
    if (!isImageLoaded) {
        alert('请先上传并加载图片');
        return;
    }

    const rect = positionWrapper.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;
    
    // 先绘制识别圈，给用户即时反馈
    clearCanvas();
    drawDetectCircle(clickX, clickY);
    mainTip.textContent = '正在识别...';
    updateResult('识别中，请稍候', 'result-error');
    
    // 在移动设备上，直接在主线程执行分析以避免兼容性问题
    // 但添加小延迟确保canvas渲染完成
    setTimeout(() => {
        const { tPixel, fPixel } = countTFPixels(clickX, clickY);
        judgeAndShowResult(tPixel, fPixel);
    }, 50);
}

// 统计像素（优化：确保在移动设备上正确计算坐标映射）
function countTFPixels(centerX, centerY) {
    let tPixel = 0;
    let fPixel = 0;
    
    // 重新计算缩放比例，确保在识别时使用最新的显示尺寸
    const currentScaleRatio = previewImg.naturalWidth / previewImg.clientWidth;

    // 计算识别圈范围（整数化边界，减少小数计算）
    const radiusSquared = circleRadius * circleRadius;
    const minX = Math.max(0, Math.floor(centerX - circleRadius));
    const maxX = Math.min(detectionCanvas.width, Math.ceil(centerX + circleRadius));
    const minY = Math.max(0, Math.floor(centerY - circleRadius));
    const maxY = Math.min(detectionCanvas.height, Math.ceil(centerY + circleRadius));

    // 复用缓存的像素数据，避免重复绘制
    const { width: imgWidth, height: imgHeight } = imageDataCache;
    const pixels = imageDataCache.data;

    // 遍历像素（优化：减少循环内计算）
    for (let y = minY; y <= maxY; y++) {
        // 使用统一的缩放比例映射到原始图片坐标
        const originalY = Math.round(y * currentScaleRatio);
        if (originalY < 0 || originalY >= imgHeight) continue;

        for (let x = minX; x <= maxX; x++) {
            // 使用统一的缩放比例映射到原始图片坐标
            const originalX = Math.round(x * currentScaleRatio);
            if (originalX < 0 || originalX >= imgWidth) continue;

            // 圆内判断（提前计算平方，减少乘法）
            const dx = x - centerX;
            const dy = y - centerY;
            if (dx*dx + dy*dy > radiusSquared) continue;

            // 从缓存中获取像素（优化：减少数组访问次数）
            const pixelIndex = (originalY * imgWidth + originalX) * 4;
            const r = pixels[pixelIndex];
            const g = pixels[pixelIndex + 1];
            const b = pixels[pixelIndex + 2];

            // 优化HSV转换（简化计算，保留核心逻辑）
            const { h, s, v } = fastRgbToHsv(r, g, b);

            // 判断金色像素（F）
            if (h >= 30 && h <= 65 && s >= 75 && s <= 255 && v >= 50 && v <= 255) {
                fPixel++;
                drawMaskPixel(x, y, 'rgba(255,0,0,0.4)');

                // 判断目标像素（T）
                if (h >= T_PARAMS.hMin && h <= T_PARAMS.hMax 
                    && s >= T_PARAMS.sMin && s <= T_PARAMS.sMax 
                    && v >= T_PARAMS.vMin && v <= T_PARAMS.vMax) {
                    tPixel++;
                    drawMaskPixel(x, y, 'rgba(255,255,255,0.5)');
                }
            }
        }
    }
    return { tPixel, fPixel };
}

// 快速HSV转换（优化：减少数学运算）
function fastRgbToHsv(r, g, b) {
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0, s = 0;
    const v = max; // V直接使用最大值(0-255)

    const delta = max - min;
    if (delta > 0) {
        // 简化H计算（只保留整数部分）
        if (max === r) {
            h = ((g - b) / delta) % 6;
        } else if (max === g) {
            h = (b - r) / delta + 2;
        } else {
            h = (r - g) / delta + 4;
        }
        h = Math.round(h * 60);
        if (h < 0) h += 360;

        // 简化S计算（转换为0-255范围）
        s = Math.round((delta / max) * 255);
    }
    return { h, s, v };
}

// 其他辅助函数
function drawMaskPixel(x, y, color) {
    detectionCtx.fillStyle = color;
    detectionCtx.fillRect(x, y, 1, 1);
}

function drawDetectCircle(x, y) {
    detectionCtx.beginPath();
    detectionCtx.arc(x, y, circleRadius, 0, Math.PI*2);
    detectionCtx.strokeStyle = '#ff9b37';
    detectionCtx.lineWidth = 2;
    detectionCtx.stroke();
}

function clearCanvas() {
    detectionCtx.clearRect(0, 0, detectionCanvas.width, detectionCanvas.height);
}

function updateResult(text, className) {
    finalResult.textContent = text;
    finalResult.className = `result-content ${className}`;
    
    // 获取main部分的所有div元素
    const mainDivs = document.querySelectorAll('main div');
    
    // 根据识别结果更新main部分div的背景颜色
    if (className === 'result-sun') {
        // 太阳之子：浅金色25%透明度
        mainDivs.forEach(div => {
            // 保存原始背景色以便后续恢复
            if (!div.dataset.originalBg) {
                div.dataset.originalBg = div.style.backgroundColor;
            }
            div.style.backgroundColor = 'rgba(255, 215, 0, 0.25)';
        });
    } else if (className === 'result-not-sun') {
        // 非太阳之子：红色75%透明度
        mainDivs.forEach(div => {
            // 保存原始背景色以便后续恢复
            if (!div.dataset.originalBg) {
                div.dataset.originalBg = div.style.backgroundColor;
            }
            div.style.backgroundColor = 'rgba(255, 0, 0, 0.75)';
        });
    } else {
        // 未识别或其他情况：恢复原来的颜色
        mainDivs.forEach(div => {
            if (div.dataset.originalBg) {
                div.style.backgroundColor = div.dataset.originalBg;
            } else {
                div.style.backgroundColor = '';
            }
        });
    }
}

function judgeAndShowResult(tPixel, fPixel) {
    mainTip.textContent = '识别完成，可点击其他区域重新识别';
    if (fPixel === 0) {
        updateResult('未识别到金色发色', 'result-error');
    } else {
        const ratio = tPixel / fPixel;
        updateResult(
            ratio > JUDGE_RATIO ? '识别结果：太阳之子' : '识别结果：非太阳之子',
            ratio > JUDGE_RATIO ? 'result-sun' : 'result-not-sun'
        );
    }
}

// 确保DOM加载完成后初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
