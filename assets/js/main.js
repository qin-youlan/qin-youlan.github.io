// main.js - 整合了所有JavaScript文件的最终版本
// 从data.js导入磁贴数据
import { ldgjTiles, ldtjTiles } from './data.js';

// 使用绝对路径后，不再需要路径处理函数
// 保留这个函数名以保持代码兼容性，但简化实现
function adjustPaths(items) {
    // 创建items的副本，避免直接修改原数组
    return items.map(item => ({...item}));
}

function generateSoftwareTiles() {
    console.log('main.js 加载成功！开始生成软件磁贴');
    
    const container = document.getElementById('software-list');
    if (!container) {
        console.log('错误：未找到software-list容器');
        return;
    }
    
    // 检查当前页面路径，根据不同页面显示不同内容
    const currentPath = window.location.pathname;
    let items = [];
    
    // ldgj页面 - 只显示ldgj相关的磁贴
    if (currentPath.includes('/ldgj/')) {
        items = adjustPaths(ldgjTiles); // 使用绝对路径，不再需要调整
    }
    // ldtj页面 - 只显示ldtj相关的磁贴
    else if (currentPath.includes('/ldtj/')) {
        items = adjustPaths(ldtjTiles); // 使用绝对路径，不再需要调整
    }
    // index页面和其他页面 - 先显示ldgj的磁贴，再显示ldtj的磁贴
    else {
        // 合并两个集合，ldgj的磁贴在前，ldtj的磁贴在后
        const adjustedLdgjTiles = adjustPaths(ldgjTiles);
        const adjustedLdtjTiles = adjustPaths(ldtjTiles);
        items = [...adjustedLdgjTiles, ...adjustedLdtjTiles];
    }
    
    // 生成HTML内容 - 使用模板字符串（更简洁高效）
    let html = '';
    items.forEach(item => {
        const target = item.url.startsWith('http') ? '_blank' : '_self';
        html += `
        <li class="software-tile">
            <a href="${item.url}" class="tile-link" target="${target}" rel="noopener noreferrer">
                <div class="tile-content">
                    <div class="icon-container">
                        <img src="${item.icon}" alt="${item.name}">
                    </div>
                    <h3>${item.name}</h3>
                    <p class="category-text">${item.category}</p>
                </div>
                <div class="tile-overlay">
                    <p class="overlay-text">${item.desc}</p>
                    <a href="${item.url}" class="visit-btn" target="${target}" rel="noopener noreferrer">访问</a>
                </div>
            </a>
        </li>
        `;
    });
    
    // 设置内容
    container.innerHTML = html;
    console.log('main.js 磁贴生成完成');
}

// 当DOM加载完成后执行
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', generateSoftwareTiles);
} else {
    generateSoftwareTiles();
}
