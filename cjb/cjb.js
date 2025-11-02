// 全职业数据 - 按成长总值分为四档，每档使用相同公分母的分数，计算使用分数成长表，展示使用小数成长表
// 注意：小数成长表中的值是根据分数数据重新计算的精确值
const allJobs = [
    // 第一档：新兵，总成长分数=480/990，公分母990
    { id: "recruit", name: "新兵", growth: [120/990, 120/990, 120/990, 120/990, 0, 0], growthFraction: {numerator: [120, 120, 120, 120, 0, 0], denominator: 990} }, // 分数形式: [120/990, 120/990, 120/990, 120/990, 0, 0]
    
    // 第二档：基础职业，总成长分数=640/990，公分母990
    { id: "apprentice-rider", name: "见习骑手", growth: [224/990, 160/990, 96/990, 160/990, 0, 0], growthFraction: {numerator: [224, 160, 96, 160, 0, 0], denominator: 990} }, // 分数形式: [224/990, 160/990, 96/990, 160/990, 0, 0]
    { id: "hunter", name: "猎人", growth: [112/990, 240/990, 192/990, 96/990, 0, 0], growthFraction: {numerator: [112, 240, 192, 96, 0, 0], denominator: 990} }, // 分数形式: [112/990, 240/990, 192/990, 96/990, 0, 0]
    { id: "light-infantry", name: "轻步兵", growth: [208/990, 112/990, 224/990, 96/990, 0, 0], growthFraction: {numerator: [208, 112, 224, 96, 0, 0], denominator: 990} }, // 分数形式: [208/990, 112/990, 224/990, 96/990, 0, 0]
    { id: "heavy-infantry", name: "重步兵", growth: [192/990, 160/990, 64/990, 224/990, 0, 0], growthFraction: {numerator: [192, 160, 64, 224, 0, 0], denominator: 990} }, // 分数形式: [192/990, 160/990, 64/990, 224/990, 0, 0]
    { id: "self-taught-wizard", name: "自学巫师", growth: [0, 160/990, 32/990, 64/990, 192/990, 192/990], growthFraction: {numerator: [0, 160, 32, 64, 192, 192], denominator: 990} }, // 分数形式: [0, 160/990, 32/990, 64/990, 192/990, 192/990]
    
    // 第三档：进阶职业，总成长分数=1440/990，公分母990
    { id: "light-cavalry", name: "轻骑兵", growth: [432/990, 540/990, 144/990, 324/990, 0, 0], growthFraction: {numerator: [432, 540, 144, 324, 0, 0], denominator: 990} }, // 分数形式: [432/990, 540/990, 144/990, 324/990, 0, 0]
    { id: "heavy-cavalry", name: "重骑兵", growth: [540/990, 252/990, 144/990, 504/990, 0, 0], growthFraction: {numerator: [540, 252, 144, 504, 0, 0], denominator: 990} }, // 分数形式: [540/990, 252/990, 144/990, 504/990, 0, 0]
    { id: "archer", name: "弓箭手", growth: [252/990, 576/990, 468/990, 144/990, 0, 0], growthFraction: {numerator: [252, 576, 468, 144, 0, 0], denominator: 990} }, // 分数形式: [252/990, 576/990, 468/990, 144/990, 0, 0]
    { id: "crossbowman", name: "弩手", growth: [324/990, 540/990, 144/990, 432/990, 0, 0], growthFraction: {numerator: [324, 540, 144, 432, 0, 0], denominator: 990} }, // 分数形式: [324/990, 540/990, 144/990, 432/990, 0, 0]
    { id: "warrior", name: "勇士", growth: [576/990, 144/990, 396/990, 324/990, 0, 0], growthFraction: {numerator: [576, 144, 396, 324, 0, 0], denominator: 990} }, // 分数形式: [576/990, 144/990, 396/990, 324/990, 0, 0]
    { id: "scout", name: "斥候", growth: [252/990, 396/990, 576/990, 216/990, 0, 0], growthFraction: {numerator: [252, 396, 576, 216, 0, 0], denominator: 990} }, // 分数形式: [252/990, 396/990, 576/990, 216/990, 0, 0]
    { id: "phalanx-infantry", name: "方阵步兵", growth: [324/990, 468/990, 144/990, 504/990, 0, 0], growthFraction: {numerator: [324, 468, 144, 504, 0, 0], denominator: 990} }, // 分数形式: [324/990, 468/990, 144/990, 504/990, 0, 0]
    { id: "heavy-spearman", name: "重甲枪兵", growth: [468/990, 252/990, 144/990, 576/990, 0, 0], growthFraction: {numerator: [468, 252, 144, 576, 0, 0], denominator: 990} }, // 分数形式: [468/990, 252/990, 144/990, 576/990, 0, 0]
    { id: "druid", name: "德鲁伊", growth: [0, 0, 72/990, 216/990, 720/990, 432/990], growthFraction: {numerator: [0, 0, 72, 216, 720, 432], denominator: 990} }, // 分数形式: [0, 0, 72/990, 216/990, 720/990, 432/990]
    { id: "priest", name: "牧师", growth: [0, 0, 72/990, 144/990, 504/990, 720/990], growthFraction: {numerator: [0, 0, 72, 144, 504, 720], denominator: 990} }, // 分数形式: [0, 0, 72/990, 144/990, 504/990, 720/990]
    
    // 第四档：高级职业，总成长分数=2560/990，公分母990
    { id: "royal-cavalry", name: "皇家骑兵", growth: [768/990, 960/990, 256/990, 576/990, 0, 0], growthFraction: {numerator: [768, 960, 256, 576, 0, 0], denominator: 990} }, // 分数形式: [768/990, 960/990, 256/990, 576/990, 0, 0]
    { id: "raider-cavalry", name: "掠袭骑兵", growth: [704/990, 384/990, 960/990, 512/990, 0, 0], growthFraction: {numerator: [704, 384, 960, 512, 0, 0], denominator: 990} }, // 分数形式: [704/990, 384/990, 960/990, 512/990, 0, 0]
    { id: "heavy-armor-cavalry", name: "重装骑兵", growth: [1088/990, 384/990, 192/990, 896/990, 0, 0], growthFraction: {numerator: [1088, 384, 192, 896, 0, 0], denominator: 990} }, // 分数形式: [1088/990, 384/990, 192/990, 896/990, 0, 0]
    { id: "command-cavalry", name: "统御骑士", growth: [576/990, 768/990, 128/990, 640/990, 0, 448/990], growthFraction: {numerator: [576, 768, 128, 640, 0, 448], denominator: 990} }, // 分数形式: [576/990, 768/990, 128/990, 640/990, 0, 448/990]
    { id: "fear-cavalry", name: "恐惧骑士", growth: [1024/990, 256/990, 512/990, 768/990, 0, 0], growthFraction: {numerator: [1024, 256, 512, 768, 0, 0], denominator: 990} }, // 分数形式: [1024/990, 256/990, 512/990, 768/990, 0, 0]
    { id: "apocalypse-cavalry", name: "天启骑士", growth: [0, 0, 0, 832/990, 448/990, 1280/990], growthFraction: {numerator: [0, 0, 0, 832, 448, 1280], denominator: 990} }, // 分数形式: [0, 0, 0, 832/990, 448/990, 1280/990]
    { id: "winged-cavalry", name: "翼骑兵", growth: [1088/990, 192/990, 256/990, 1024/990, 0, 0], growthFraction: {numerator: [1088, 192, 256, 1024, 0, 0], denominator: 990} }, // 分数形式: [1088/990, 192/990, 256/990, 1024/990, 0, 0]
    { id: "dawn-cavalry", name: "曙光骑兵", growth: [960/990, 896/990, 256/990, 448/990, 0, 0], growthFraction: {numerator: [960, 896, 256, 448, 0, 0], denominator: 990} }, // 分数形式: [960/990, 896/990, 256/990, 448/990, 0, 0]
    { id: "longbowman", name: "长弓手", growth: [832/990, 1088/990, 384/990, 256/990, 0, 0], growthFraction: {numerator: [832, 1088, 384, 256, 0, 0], denominator: 990} }, // 分数形式: [832/990, 1088/990, 384/990, 256/990, 0, 0]
    { id: "ranger", name: "游侠", growth: [448/990, 1024/990, 832/990, 256/990, 0, 0], growthFraction: {numerator: [448, 1024, 832, 256, 0, 0], denominator: 990} }, // 分数形式: [448/990, 1024/990, 832/990, 256/990, 0, 0]
    { id: "shield-crossbowman", name: "盾弩手", growth: [576/990, 960/990, 256/990, 768/990, 0, 0], growthFraction: {numerator: [576, 960, 256, 768, 0, 0], denominator: 990} }, // 分数形式: [576/990, 960/990, 256/990, 768/990, 0, 0]
    { id: "heavy-crossbowman", name: "重弩手", growth: [704/990, 768/990, 192/990, 896/990, 0, 0], growthFraction: {numerator: [704, 768, 192, 896, 0, 0], denominator: 990} }, // 分数形式: [704/990, 768/990, 192/990, 896/990, 0, 0]
    { id: "jungle-hunter", name: "丛林猎手", growth: [512/990, 896/990, 960/990, 192/990, 0, 0], growthFraction: {numerator: [512, 896, 960, 192, 0, 0], denominator: 990} }, // 分数形式: [512/990, 896/990, 960/990, 192/990, 0, 0]
    { id: "magic-archer", name: "魔弓手", growth: [0, 0, 256/990, 192/990, 1216/990, 896/990], growthFraction: {numerator: [0, 0, 256, 192, 1216, 896], denominator: 990} }, // 分数形式: [0, 0, 256/990, 192/990, 1216/990, 896/990]
    { id: "berserker", name: "狂战士", growth: [1024/990, 256/990, 704/990, 576/990, 0, 0], growthFraction: {numerator: [1024, 256, 704, 576, 0, 0], denominator: 990} }, // 分数形式: [1024/990, 256/990, 704/990, 576/990, 0, 0]
    { id: "great-swordsman", name: "大剑士", growth: [960/990, 768/990, 320/990, 512/990, 0, 0], growthFraction: {numerator: [960, 768, 320, 512, 0, 0], denominator: 990} }, // 分数形式: [960/990, 768/990, 320/990, 512/990, 0, 0]
    { id: "assassin", name: "刺客", growth: [256/990, 960/990, 1088/990, 256/990, 0, 0], growthFraction: {numerator: [256, 960, 1088, 256, 0, 0], denominator: 990} }, // 分数形式: [256/990, 960/990, 1088/990, 256/990, 0, 0]
    { id: "sword-saint", name: "剑圣", growth: [768/990, 576/990, 1024/990, 192/990, 0, 0], growthFraction: {numerator: [768, 576, 1024, 192, 0, 0], denominator: 990} }, // 分数形式: [768/990, 576/990, 1024/990, 192/990, 0, 0]
    { id: "gladiator", name: "决斗士", growth: [576/990, 1024/990, 640/990, 320/990, 0, 0], growthFraction: {numerator: [576, 1024, 640, 320, 0, 0], denominator: 990} }, // 分数形式: [576/990, 1024/990, 640/990, 320/990, 0, 0]
    { id: "shadow-swordsman", name: "暗影刀客", growth: [576/990, 0, 640/990, 224/990, 1120/990, 0], growthFraction: {numerator: [576, 0, 640, 224, 1120, 0], denominator: 990} }, // 分数形式: [576/990, 0, 640/990, 224/990, 1120/990, 0]
    { id: "royal-guard", name: "王室禁卫", growth: [576/990, 832/990, 192/990, 960/990, 0, 0], growthFraction: {numerator: [576, 832, 192, 960, 0, 0], denominator: 990} }, // 分数形式: [576/990, 832/990, 192/990, 960/990, 0, 0]
    { id: "iron-armor-soldier", name: "铁甲军士", growth: [832/990, 448/990, 192/990, 1088/990, 0, 0], growthFraction: {numerator: [832, 448, 192, 1088, 0, 0], denominator: 990} }, // 分数形式: [832/990, 448/990, 192/990, 1088/990, 0, 0]
    { id: "heavy-armor-monk", name: "重甲僧侣", growth: [320/990, 192/990, 192/990, 832/990, 384/990, 640/990], growthFraction: {numerator: [320, 192, 192, 832, 384, 640], denominator: 990} }, // 分数形式: [320/990, 192/990, 192/990, 832/990, 384/990, 640/990]
    { id: "holy-guard", name: "圣堂铁卫", growth: [768/990, 320/990, 192/990, 832/990, 0, 448/990], growthFraction: {numerator: [768, 320, 192, 832, 0, 448], denominator: 990} }, // 分数形式: [768/990, 320/990, 192/990, 832/990, 0, 448/990]
    { id: "eagle-guard", name: "神鹰侍卫", growth: [448/990, 960/990, 480/990, 672/990, 0, 0], growthFraction: {numerator: [448, 960, 480, 672, 0, 0], denominator: 990} }, // 分数形式: [448/990, 960/990, 480/990, 672/990, 0, 0]
    { id: "elite-warrior", name: "勇士精英", growth: [704/990, 896/990, 64/990, 896/990, 0, 0], growthFraction: {numerator: [704, 896, 64, 896, 0, 0], denominator: 990} }, // 分数形式: [448/990, 960/990, 192/990, 960/990, 0, 0]
    { id: "great-druid", name: "大德鲁伊", growth: [0, 0, 320/990, 192/990, 1280/990, 768/990], growthFraction: {numerator: [0, 0, 320, 192, 1280, 768], denominator: 990} }, // 分数形式: [0, 0, 320/990, 192/990, 1280/990, 768/990]
    { id: "bishop", name: "主教", growth: [0, 0, 128/990, 256/990, 896/990, 1280/990], growthFraction: {numerator: [0, 0, 128, 256, 896, 1280], denominator: 990} }, // 分数形式: [0, 0, 128/990, 256/990, 896/990, 1280/990]
    { id: "alchemist", name: "炼金术师", growth: [0, 576/990, 192/990, 384/990, 512/990, 896/990], growthFraction: {numerator: [0, 576, 192, 384, 512, 896], denominator: 990} }, // 分数形式: [0, 576/990, 192/990, 384/990, 512/990, 896/990]
    { id: "bard", name: "吟游诗人", growth: [0, 0, 576/990, 256/990, 1280/990, 448/990], growthFraction: {numerator: [0, 0, 576, 256, 1280, 448], denominator: 990} }, // 分数形式: [0, 0, 576/990, 256/990, 1280/990, 448/990]
    { id: "imperial-envoy", name: "帝国密使", growth: [0, 0, 0, 320/990, 1120/990, 1120/990], growthFraction: {numerator: [0, 0, 0, 320, 1120, 1120], denominator: 990} }, // 分数形式: [0, 0, 0, 320/990, 1120/990, 1120/990]
    { id: "inner-sword-saint", name: "内宗剑圣", growth: [0, 896/990, 1024/990, 128/990, 512/990, 0], growthFraction: {numerator: [0, 896, 1024, 128, 512, 0], denominator: 990} } // 分数形式: [0, 896/990, 1024/990, 128/990, 512/990, 0]
];

// 属性名称
const attrNames = ["力量", "技巧", "敏捷", "体质", "感知", "意志"];
// 修复装备-职业映射表中的错误（主要是"重装骑兵骑兵"的笔误）
const equipJobMap = {
    "单手剑": ["见习骑手", "轻骑兵", "皇家骑兵", "统御骑士", "翼骑兵", "曙光骑兵", "轻步兵", "勇士", "斥候", "剑圣", "重步兵", "方阵步兵", "王室禁卫", "神鹰侍卫", "圣堂铁卫", "内宗剑圣", "新兵"],
    "枪": ["皇家骑兵", "掠袭骑兵", "重装骑兵", "翼骑兵", "曙光骑兵", "重步兵", "方阵步兵", "重甲枪兵", "王室禁卫", "神鹰侍卫", "勇士精英", "铁甲军士", "新兵"],
    "刀": ["掠袭骑兵", "翼骑兵", "剑圣", "暗影刀客", "内宗剑圣"],
    "短弓": ["掠袭骑兵", "猎人", "弓箭手", "游侠", "丛林猎手", "魔弓手", "新兵"],
    "骑枪": ["重装骑兵"],  // 修复笔误
    "刺剑": ["统御骑士", "翼骑兵", "决斗士"],
    "弩": ["统御骑士", "弩手", "盾弩手"],
    "长柄": ["恐惧骑士", "重甲枪兵", "铁甲军士"],
    "双手剑": ["恐惧骑士", "轻步兵", "勇士", "大剑士", "剑圣", "新兵"],
    "单手斧": ["恐惧骑士", "轻步兵", "勇士", "斥候", "狂战士", "勇士精英", "新兵"],
    "双手斧": ["恐惧骑士", "轻步兵", "勇士", "狂战士", "新兵"],
    "权杖": ["天启骑士", "牧师", "主教", "重甲僧侣", "帝国密使"],
    "单手锤": ["翼骑兵", "方阵步兵", "重甲枪兵", "勇士精英", "铁甲军士", "圣堂铁卫", "重甲僧侣"],
    "链锤": ["铁甲军士", "圣堂铁卫", "重甲僧侣"],
    "长弓": ["长弓手"],
    "匕首": ["轻步兵", "斥候", "刺客", "决斗士", "暗影刀客", "自学巫师", "新兵"],
    "双手杖": ["自学巫师", "德鲁伊", "大德鲁伊"],
    "瓶子": ["炼金术士"],
    "琴": ["吟游诗人"],
    "链甲": ["皇家骑兵", "恐惧骑士", "曙光骑兵", "弩手", "盾弩手", "重步兵", "方阵步兵", "王室禁卫", "神鹰侍卫", "勇士精英"],
    "皮甲": ["见习骑手", "掠袭骑兵", "游侠", "魔弓手", "轻步兵", "勇士", "斥候", "狂战士", "大剑士", "刺客", "决斗士"],
    "板甲": ["重装骑兵", "统御骑士", "天启骑士", "重甲枪兵", "铁甲军士", "圣堂铁卫", "重甲僧侣"],  // 修复笔误
    "布甲": ["猎人", "弓箭手", "长弓手", "丛林猎手", "剑圣", "暗影刀客", "自学巫师", "德鲁伊", "牧师", "大德鲁伊", "主教", "炼金术士", "吟游诗人", "帝国密使", "内宗剑圣", "新兵"]
};

// 页面加载时初始化
window.onload = function () {
    generateJobTags();
    filterJobsByEquip();
    // 移除默认选择的职业标签
    // selectCaseJobs();
    renderGrowthTable();
    
    // 为目标属性下拉框添加change事件监听器
    document.getElementById('target-attr').addEventListener('change', function() {
        highlightJobs();
    });
    
    // 初始加载时也执行一次高亮
    highlightJobs();
};

// 生成职业标签
function generateJobTags() {
    const tagsContainer = document.getElementById("job-tags-container");
    tagsContainer.innerHTML = "";
    
    // 创建一个flex容器来存放标签
    const flexContainer = document.createElement("div");
    flexContainer.className = "flex flex-wrap gap-2";
    
    // 为每个职业创建标签
    allJobs.forEach(job => {
        const tag = document.createElement("div");
        tag.className = "job-tag";
        tag.textContent = job.name;
        tag.dataset.jobId = job.id;
        
        // 添加点击事件切换选中状态
        tag.addEventListener("click", function() {
            toggleJobSelection(job.id);
        });
        
        flexContainer.appendChild(tag);
    });
    
    tagsContainer.appendChild(flexContainer);
}

// 切换职业选中状态
function toggleJobSelection(jobId) {
    const tag = document.querySelector(`.job-tag[data-job-id="${jobId}"]`);
    if (tag) {
        tag.classList.toggle("selected");
        
        // 如果选择了职业且成长表当前是隐藏的，则显示成长表
        const growthContent = document.getElementById('growth-content');
        const growthToggleIcon = document.getElementById('growth-toggle-icon');
        
        if (growthContent.style.display === 'none') {
            growthContent.style.display = 'block';
            if (growthToggleIcon) {
                growthToggleIcon.style.transform = 'rotate(180deg)';
            }
        }
        
        // 重新渲染成长表格，只显示已选择的职业
        renderGrowthTable();
    }
}

// 根据装备过滤职业
function filterJobsByEquip() {
    const selectedEquip = document.getElementById("heirloom-equip").value;
    const allTags = document.querySelectorAll(".job-tag");
    
    // 清空所有已选择的职业
    allTags.forEach(tag => {
        tag.classList.remove("selected");
    });
    
    // 清空结果显示区域
    const resultContent = document.getElementById("result-content");
    if (resultContent) {
        resultContent.innerHTML = "";
    }
    
    // 先重置所有标签的显示
    allTags.forEach(tag => {
        tag.style.display = "inline-block";
    });
    
    // 如果选择了装备，过滤职业
    if (selectedEquip) {
        const compatibleJobs = equipJobMap[selectedEquip] || [];
        
        allTags.forEach(tag => {
            const jobName = tag.textContent;
            // 如果当前职业不在兼容列表中，隐藏标签
            if (!compatibleJobs.includes(jobName)) {
                tag.style.display = "none";
            }
        });
    }
    
    // 装备过滤后重新应用高亮
    highlightJobs();
}

// 计算最优方案
// 核心计算逻辑 
function calculateOptimalPlan() { 
    // 解析输入参数 
    const params = parseInputParams(); 
    if (!params) {
        return;
    }
    
    const { personGrowth, initLevel, selectedJobs, targetAttrIndex, secondTargetAttrIndex, maxAvailableLevelUp } = params; 
    const resultDom = document.getElementById("result-content"); 

    // 参数验证增强版 
    if (!personGrowth || personGrowth.length !== 6) { 
        resultDom.innerHTML = `<p class="highlight">参数错误：请输入正确格式的六维属性（6个数字，空格分隔）</p>`; 
        return; 
    } 

    if (!selectedJobs || selectedJobs.length === 0) { 
        resultDom.innerHTML = `<p class="highlight">参数错误：请至少选择1个可用职业</p>`; 
        return; 
    } 

    if (maxAvailableLevelUp < 1) {
        resultDom.innerHTML = `<p class="highlight">参数错误：升级总数必须≥1</p>`;
        return; 
    } 

    // 收集所有有效方案（第一属性为目标属性的方案） 
    const allValidPlans = [];
    // 定义总升级次数上限
    const totalLevels = maxAvailableLevelUp;
    try { 
        // 遍历升级次数小于等于totalLevels的所有组合
        for (let upgradeCount = 1; upgradeCount <= totalLevels; upgradeCount++) { 
            const levelCombinations = generateLevelCombinations(upgradeCount, selectedJobs.length); 

            levelCombinations.forEach(combination => { 
                // 计算注入值 
                const injectValues = new Array(6).fill(0); 
                combination.forEach((level, idx) => { 
                    const job = selectedJobs[idx]; 
                    for (let i = 0; i < 6; i++) { 
                        // 当职业成长与人物成长的和为负值时，注入值按0计算 
                        const growthSum = personGrowth[i] + job.growth[i]; 
                        injectValues[i] += Math.max(0, growthSum) * level; 
                    } 
                }); 

                // 排序注入值（降序，保留索引） 
                const sortedInjects = [...injectValues].map((val, idx) => ({ val, idx })) 
                    .sort((a, b) => b.val - a.val); 

                // 只保留第一属性为目标属性的方案 
                if (sortedInjects[0].idx !== targetAttrIndex) return; 

                // 计算奖励值 
                const S1 = sortedInjects[0].val; 
                const S2 = sortedInjects[1].val; 
                const S3 = sortedInjects[2].val; 
                const denominator = S1 + S2 + S3; 
                const reward2Exact = denominator === 0 ? 0 : (S2 / denominator) * 60; 
                const reward3Exact = denominator === 0 ? 0 : (S3 / denominator) * 60; 
                const reward1 = 60 - Math.floor(reward2Exact) - Math.floor(reward3Exact); 

                // 记录方案详情 
                allValidPlans.push({ 
                    upgradeCount, 
                    reward1, 
                    injectValues, 
                    sortedInjects, 
                    combination, 
                    secondAttrIdx: sortedInjects[1].idx,  // reward2对应的属性索引 
                    secondAttrVal: S2, 
                    thirdAttrIdx: sortedInjects[2].idx,   // reward3对应的属性索引 
                    thirdAttrVal: S3, 
                    reward2: Math.floor(reward2Exact), 
                    reward3: Math.floor(reward3Exact), 
                    reward2Exact, 
                    reward3Exact 
                }); 
            }); 
        } 
    } catch (e) { 
        resultDom.innerHTML = `<p class="highlight">计算过程出错：${e.message}</p>`; 
        console.error("计算错误:", e); 
        return; 
    } 

    // 没有有效方案 
    if (allValidPlans.length === 0) { 
        resultDom.innerHTML = `<p class="highlight">未找到有效方案（目标属性无法成为第一高）</p>`; 
        return; 
    } 

    // 第一步：筛选出reward1最大的方案集合（第一优先级） 
    const maxReward1 = Math.max(...allValidPlans.map(plan => plan.reward1)); 
    const firstAttrMaxPlans = allValidPlans.filter(plan => plan.reward1 === maxReward1); 

    // 第二步：按第二优先级排序（处理用户指定的第二目标属性） 
    const secondTarget = secondTargetAttrIndex !== null ? parseInt(secondTargetAttrIndex) : null; 
    console.log('排序前的方案数量:', firstAttrMaxPlans.length);
    console.log('第二目标属性索引:', secondTarget, '对应属性名:', secondTarget !== null ? attrNames[secondTarget] : '无');
    
    // 确保排序逻辑正确执行
    firstAttrMaxPlans.sort((a, b) => { 
        // 第二优先级：若指定了第二目标，优先匹配并最大化对应奖励 
        if (secondTarget !== null) { 
            // 获取a方案中第二目标属性的实际值
            let aTargetValue = 0;
            if (a.secondAttrIdx === secondTarget) {
                aTargetValue = a.reward2;
            } else if (a.thirdAttrIdx === secondTarget) {
                aTargetValue = a.reward3;
            }
            
            // 获取b方案中第二目标属性的实际值
            let bTargetValue = 0;
            if (b.secondAttrIdx === secondTarget) {
                bTargetValue = b.reward2;
            } else if (b.thirdAttrIdx === secondTarget) {
                bTargetValue = b.reward3;
            }
            
            // 优先比较目标属性的实际值，值大的方案优先
            if (aTargetValue !== bTargetValue) {
                return bTargetValue - aTargetValue; // 目标属性值大的优先
            }
            
            // 目标属性值相同时，检查是否都匹配目标属性
            const aHasTarget = a.secondAttrIdx === secondTarget || a.thirdAttrIdx === secondTarget;
            const bHasTarget = b.secondAttrIdx === secondTarget || b.thirdAttrIdx === secondTarget;
            
            // 如果一个匹配目标属性而另一个不匹配，匹配的优先
            if (aHasTarget && !bHasTarget) return -1;
            if (bHasTarget && !aHasTarget) return 1;
        } 
        
        // 第三优先级：升级次数最少（当未指定第二目标或目标属性值相同时使用） 
        return a.upgradeCount - b.upgradeCount; 
    });
    
    // 验证排序结果
    if (firstAttrMaxPlans.length > 0) {
        console.log('排序后的第一个方案:', {
            upgradeCount: firstAttrMaxPlans[0].upgradeCount,
            reward1: firstAttrMaxPlans[0].reward1,
            reward2: firstAttrMaxPlans[0].reward2,
            reward3: firstAttrMaxPlans[0].reward3,
            secondAttrName: attrNames[firstAttrMaxPlans[0].secondAttrIdx],
            thirdAttrName: attrNames[firstAttrMaxPlans[0].thirdAttrIdx]
        });
    } 

    // 第三步：提取最终方案 
    const finalPlans = []; 

    // 方案一：reward1最大且升级次数最少 
    const plan1Candidates = [...firstAttrMaxPlans].sort((a, b) => a.upgradeCount - b.upgradeCount); 
    finalPlans.push(plan1Candidates[0]); 

    // 方案二：reward1最大前提下，reward2最大的方案 
    const plan2Candidates = [...firstAttrMaxPlans].sort((a, b) => { 
        if (b.reward2 !== a.reward2) return b.reward2 - a.reward2; 
        return a.upgradeCount - b.upgradeCount; // reward2相同则取升级次数少的 
    }); 
    
    // 判断方案一和方案二是否相同，如果不同才添加方案二 
    const isPlan1AndPlan2Same = arePlansSame(plan1Candidates[0], plan2Candidates[0]); 
    if (!isPlan1AndPlan2Same) { 
        finalPlans.push(plan2Candidates[0]); 
    } 

    // 其他方案：reward1最大前提下，reward2为非方案二属性且reward2最大且升级次数最少 
    const plan2SecondAttrIdx = plan2Candidates[0].secondAttrIdx; 
    const otherCandidates = [...firstAttrMaxPlans] 
        .filter(plan => plan.secondAttrIdx !== plan2SecondAttrIdx); // 排除方案二的第二属性 

    if (otherCandidates.length > 0) { 
        otherCandidates.sort((a, b) => { 
            if (b.reward2 !== a.reward2) return b.reward2 - a.reward2; 
            return a.upgradeCount - b.upgradeCount; 
        }); 
        finalPlans.push(otherCandidates[0]); 
    } 

    // 展示结果 
    displayResults(finalPlans, initLevel, targetAttrIndex, secondTarget, selectedJobs); 
} 

// 展示结果（增加selectedJobs参数） 
function displayResults(plans, initLevel, targetAttrIndex, secondTarget, selectedJobs) { 
    // 添加selectedJobs参数类型检查
    if (!Array.isArray(selectedJobs)) {
        console.error('selectedJobs参数错误，期望数组类型:', selectedJobs);
        const resultDom = document.getElementById("result-content");
        resultDom.innerHTML = '<p style="color: #ff6b6b;">错误: 内部参数类型错误，请刷新页面重试</p>';
        return;
    }
    
    const resultDom = document.getElementById("result-content"); 
    let html = ""; 

    // 属性名称定义
    const attrNames = ["力量", "技巧", "敏捷", "体质", "感知", "意志"];

    // 生成方案标题 - 统一使用固定的方案标题
    const planTitles = ["方案一：升级次数最少", "方案二：第二属性最大", "方案三：不同第二属性最大"];

    plans.forEach((plan, index) => { 
        if (!plan) return; 

        const { upgradeCount, reward1, injectValues, sortedInjects, combination, 
            reward2, reward3, reward2Exact, reward3Exact } = plan; 
        const S1 = sortedInjects[0].val; 
        const S2 = sortedInjects[1].val; 
        const S3 = sortedInjects[2].val; 

        // 组装升级方案文本（使用传入的selectedJobs参数） 
        let combinationText = ""; 
        combination.forEach((level, idx) => { 
            if (level > 0 && selectedJobs[idx]) { 
                combinationText += `${level}级${selectedJobs[idx].name}、`; 
            } 
        }); 
        combinationText = combinationText.slice(0, -1) || "无升级（异常）"; 

        // 方案HTML 
        html += ` 
            <div class="plan-container"> 
                <div class="plan-title">${planTitles[index]}</div> 
                <div class="result-item"><strong>1. 核心结论：</strong>第一属性${reward1}，升级${upgradeCount}次${index === 0 && secondTarget === null ? '<span class="min-level-tag">总升级次数最少</span>' : ''}</div> 
                <div class="result-item"><strong>2. 推荐转职方案：</strong>${combinationText}</div> 
                <div class="result-item"><strong>3. 各属性注入值：</strong></div> 
                <div class="result-item">${attrNames.map((name, i) => `${name}：${injectValues[i].toFixed(4)}`).join(" | ")}</div> 
                <div class="result-item"><strong>4. 前三高注入值：</strong></div> 
                <div class="result-item">第1：${attrNames[sortedInjects[0].idx]}（${S1.toFixed(4)}）| 第2：${attrNames[sortedInjects[1].idx]}（${S2.toFixed(4)}）| 第3：${attrNames[sortedInjects[2].idx]}（${S3.toFixed(4)}）</div> 
                <div class="result-item"><strong>5. 最终奖励（含精确值）：</strong></div> 
                <div class="result-item">目标属性（${attrNames[targetAttrIndex]}）：<span class="highlight">${reward1}</span></div> 
                <div class="result-item">第2属性：${reward2} <span class="exact-value">（精确值：${reward2Exact.toFixed(4)}）</span></div> 
                <div class="result-item">第3属性：${reward3} <span class="exact-value">（精确值：${reward3Exact.toFixed(4)}）</span></div> 
            </div>`; 
    }); 

    resultDom.innerHTML = html;
}

// 解析输入参数
function parseInputParams() {
    // 解析人物六维
    const personGrowthStr = document.getElementById("person-growth").value.trim();
    const personGrowthArray = personGrowthStr.split(/\s+/);
    
    if (personGrowthArray.length !== 6) {
        const resultDom = document.getElementById("result-content");
        resultDom.innerHTML = `<p class="highlight">参数错误：请输入正确格式的六维属性（6个数字，空格分隔）</p>`;
        return null;
    }
    
    const personGrowth = personGrowthArray.map(value => {
        const num = parseFloat(value);
        if (isNaN(num) || num < -0.2 || num > 2) {
            const resultDom = document.getElementById("result-content");
            resultDom.innerHTML = `<p class="highlight">参数错误：人物六维数值范围应为-0.2到2之间</p>`;
            return null;
        }
        return num;
    });
    
    // 解析升级总数
    const initLevelStr = document.getElementById("init-level").value;
    const initLevel = parseInt(initLevelStr);
    
    if (isNaN(initLevel) || initLevel < 1 || initLevel > 89) {
        const resultDom = document.getElementById("result-content");
        resultDom.innerHTML = `<p class="highlight">参数错误：升级总数应为1到89之间的整数</p>`;
        return null;
    }
    
    // 获取选中的职业
    const selectedTags = document.querySelectorAll(".job-tag.selected");
    
    if (selectedTags.length === 0) {
        const resultDom = document.getElementById("result-content");
        resultDom.innerHTML = `<p class="highlight">参数错误：请至少选择一个职业</p>`;
        return null;
    }
    
    const selectedJobs = Array.from(selectedTags).map(tag => {
        const jobId = tag.dataset.jobId;
        const job = allJobs.find(j => j.id === jobId);
        return job;
    });
    
    // 获取目标属性
    const targetAttrIndex = parseInt(document.getElementById("target-attr").value);
    const secondTargetAttr = document.getElementById("second-target-attr").value;
    const secondTargetAttrIndex = secondTargetAttr !== "" ? parseInt(secondTargetAttr) : null;
    
    // 升级总数直接使用initLevel的值
    const maxAvailableLevelUp = initLevel;
    
    return { personGrowth, initLevel, selectedJobs, targetAttrIndex, secondTargetAttrIndex, maxAvailableLevelUp };
}

// 判断两个方案是否相同
function arePlansSame(plan1, plan2) {
    // 检查是否都有combination属性
    if (!plan1 || !plan2 || !plan1.combination || !plan2.combination) {
        return false;
    }
    
    // 检查combination数组长度是否相同
    if (plan1.combination.length !== plan2.combination.length) {
        return false;
    }
    
    // 比较每个职业的升级次数
    for (let i = 0; i < plan1.combination.length; i++) {
        if (plan1.combination[i] !== plan2.combination[i]) {
            return false;
        }
    }
    
    return true;
}

// 生成所有可能的等级组合
function generateLevelCombinations(totalLevels, numJobs) {
    const results = [];
    
    // 辅助函数：递归生成组合
    function generateCombinations(currentCombination, remainingLevels, currentJobIndex) {
        // 如果已经处理完所有职业
        if (currentJobIndex === numJobs - 1) {
            // 最后一个职业分配剩余的所有等级
            const newCombination = [...currentCombination, remainingLevels];
            results.push(newCombination);
            return;
        }
        
        // 为当前职业分配0到remainingLevels之间的等级数
        for (let levels = 0; levels <= remainingLevels; levels++) {
            const newCombination = [...currentCombination, levels];
            generateCombinations(newCombination, remainingLevels - levels, currentJobIndex + 1);
        }
    }
    
    generateCombinations([], totalLevels, 0);
    return results;
}

// 以下是新的displayResults函数，已在文件其他位置实现
// 旧版本函数已移除以避免冲突
        
// 旧版本函数已完全移除

// 显示错误信息
function displayError(message) {
    const resultContent = document.getElementById("result-content");
    resultContent.innerHTML = `<p style="color: #ff6b6b;">错误: ${message}</p>`;
}

// 切换职业成长展示区域
function toggleGrowthSection() {
    const content = document.getElementById('growth-content');
    const icon = document.getElementById('growth-toggle-icon');
    
    if (content.style.display === 'none') {
        content.style.display = 'block';
        icon.style.transform = 'rotate(180deg)';
    } else {
        content.style.display = 'none';
        icon.style.transform = 'rotate(0)';
    }
}

// 渲染职业成长表格
function renderGrowthTable() {
    const tableBody = document.getElementById('growth-table-body');
    tableBody.innerHTML = '';
    
    // 获取所有选中的职业
    const selectedTags = document.querySelectorAll('.job-tag.selected');
    
    // 决定要显示的职业：如果有选中的职业，则只显示选中的职业；否则显示所有职业
    let jobsToDisplay = allJobs;
    if (selectedTags.length > 0) {
        const selectedJobIds = Array.from(selectedTags).map(tag => tag.dataset.jobId);
        jobsToDisplay = allJobs.filter(job => selectedJobIds.includes(job.id));
    }
    
    // 为每个需要显示的职业创建一行
    jobsToDisplay.forEach(job => {
        const row = document.createElement('tr');
        
        // 职业名称单元格 - 固定列
        const nameCell = document.createElement('td');
        nameCell.className = 'fixed-column';
        nameCell.textContent = job.name;
        row.appendChild(nameCell);
        
        // 为每个属性创建一个单元格
        job.growth.forEach((value, index) => {
            const cell = document.createElement('td');
            
            // 使用分数成长表校正小数显示
            const numerator = job.growthFraction.numerator[index];
            const denominator = job.growthFraction.denominator;
            const preciseValue = numerator / denominator;
            
            // 格式化显示：0值不保留小数，其他值保留四位小数
            if (preciseValue === 0) {
                cell.textContent = '0';
            } else {
                cell.textContent = preciseValue.toFixed(4);
            }
            
            // 检查是否是该属性的最高值
            const isHighest = allJobs.every(j => preciseValue >= j.growthFraction.numerator[index] / j.growthFraction.denominator);
            if (isHighest) {
                cell.className = 'growth-highlight';
            }
            
            row.appendChild(cell);
        });
        
        tableBody.appendChild(row);
    });
}

// 根据属性成长值排序
function sortByGrowth(attrIndex) {
    // 获取当前排序状态
    const th = document.querySelectorAll('.growth-table th')[attrIndex + 1]; // +1 因为第一个是职业名称
    const isAsc = th.classList.contains('sort-asc');
    const isDesc = th.classList.contains('sort-desc');
    
    // 移除所有排序样式
    document.querySelectorAll('.growth-table th').forEach(header => {
        header.classList.remove('sort-asc', 'sort-desc');
    });
    
    // 设置新的排序方向
    if (isAsc || !isDesc) {
        // 如果是升序或没有排序，则切换为降序
        th.classList.add('sort-desc');
        sortTableByAttribute(attrIndex, false);
    } else {
        // 如果是降序，则切换为升序
        th.classList.add('sort-asc');
        sortTableByAttribute(attrIndex, true);
    }
}

// 根据指定属性对表格进行排序
function sortTableByAttribute(attrIndex, isAscending) {
    const tableBody = document.getElementById('growth-table-body');
    const rows = Array.from(tableBody.querySelectorAll('tr'));
    
    // 按属性值排序
    rows.sort((rowA, rowB) => {
        const valueA = parseFloat(rowA.cells[attrIndex + 1].textContent); // +1 因为第一个是职业名称
        const valueB = parseFloat(rowB.cells[attrIndex + 1].textContent);
        
        return isAscending ? valueA - valueB : valueB - valueA;
    });
    
    // 重新添加排序后的行
    rows.forEach(row => tableBody.appendChild(row));
    
    // 重新应用高亮
    rows.forEach((row, index) => {
        const job = allJobs.find(j => j.name === row.cells[0].textContent);
        if (job) {
            for (let i = 0; i < 6; i++) {
                const cell = row.cells[i + 1];
                // 检查是否是该属性的最高值
                const isHighest = allJobs.every(j => job.growth[i] >= j.growth[i]);
                if (isHighest) {
                    cell.className = 'growth-highlight';
                } else {
                    cell.className = '';
                }
            }
        }
    });
}

// 高亮显示目标属性是本职业最高成长的职业标签，并为基础职业添加边框
function highlightJobs() {
    // 获取当前选中的目标属性
    const targetAttr = parseInt(document.getElementById('target-attr').value);
    
    // 定义基础职业ID列表
    const basicJobIds = ['apprentice-rider', 'hunter', 'light-infantry', 'heavy-infantry', 'self-taught-wizard'];
    
    // 获取所有职业标签
    const allTags = document.querySelectorAll('.job-tag');
    
    // 重置所有标签的边框样式
    allTags.forEach(tag => {
        tag.style.borderWidth = '1px'; // 恢复默认边框宽度
        tag.style.borderColor = '#666'; // 恢复默认边框颜色
        tag.style.borderStyle = 'solid'; // 确保边框样式一致
    });
    
    // 遍历所有可见的职业标签
    allTags.forEach(tag => {
        // 只处理可见的标签
        if (tag.style.display !== 'none' && tag.style.display !== 'hidden') {
            const jobId = tag.getAttribute('data-job-id');
            const job = allJobs.find(j => j.id === jobId);
            
            if (job) {
                // 检查是否是基础职业，如果是则添加高亮颜色边框
                if (basicJobIds.includes(jobId)) {
                    tag.style.borderWidth = '2px'; // 加粗边框
                    tag.style.borderColor = '#ff9b37'; // 设置高亮颜色边框
                    tag.style.borderStyle = 'solid';
                    tag.style.borderRadius = '20px'; // 保持与原样式相同的圆角
                }
                
                // 检查目标属性是否是该职业的六个成长中的最大值
                const isTargetAttrMax = job.growth[targetAttr] === Math.max(...job.growth);
                
                if (isTargetAttrMax) {
                    tag.style.borderWidth = '2px'; // 加粗边框
                    tag.style.borderColor = '#ff9b37'; // 设置指定的边框颜色
                    tag.style.borderStyle = 'solid';
                    tag.style.borderRadius = '20px'; // 保持与原样式相同的圆角
                }
            }
        }
    });
}