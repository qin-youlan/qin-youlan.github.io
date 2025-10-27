// data.js - 存储所有页面的磁贴数据

// ldgj页面相关的磁贴数据集合
export const ldgjTiles = [
    {
        name: '澄澈之瞳',
        category: '游戏辅助工具',
        icon: '/assets/icons/audrey.svg',
        url: '/hx/index.html',
        desc: '血脉极限属性'
    },
    {
        name: '专注之眸',
        category: '游戏辅助工具',
        icon: '/assets/icons/ring6.svg',
        url: '/cjb/index.html',
        desc: '传家宝极限方案'
    },
    {
        name: '太阳之眼',
        category: '游戏辅助工具',
        icon: '/assets/icons/taiyangzhiyan.svg',
        url: '/tysb/index.html',
        desc: '太阳之眼识别'
    }
];

// ldtj页面相关的磁贴数据集合
export const ldtjTiles = [
    {
        name: '诸神工具',
        category: '游戏辅助工具',
        icon: '/assets/icons/lan.png',
        url: '/ldgj/index.html',
        desc: '诸神皇冠辅助工具'
    },
    {
        name: 'Visual Studio',
        category: '开发工具',
        icon: '/assets/icons/vscode_icon.png',
        url: 'https://visualstudio.microsoft.com/zh-hans/',
        desc: '高效编码，必备工具！'
    },
    {
        name: 'Kimi.ai',
        category: '网站',
        icon: '/assets/icons/kimi_icon.png',
        url: 'https://kimi.moonshot.cn/',
        desc: 'Kimi智能助手'
    },
    {
        name: 'Via',
        category: '浏览器',
        icon: '/assets/icons/via_icon.png',
        url: 'https://viayoo.com/zh-cn/',
        desc: '探索速度与简约的极限：似乎不凡的速度总会为无所不能的定制让步，似乎简约的界面总会为繁杂的功能牺牲，Via 浏览器在打破陈规旧则，让你看到另种可能。'
    },
    {
        name: 'FreeConvert',
        category: '网站',
        icon: '/assets/icons/FreeConvert_icon.png',
        url: 'https://www.freeconvert.com/',
        desc: '在线线格式转换'
    },
    {
        name: '花瓣网',
        category: '网站',
        icon: '/assets/icons/huaban.svg',
        url: 'https://huaban.com/',
        desc: '发现素材，探索灵感'
    }
];

// 路径处理函数 - 根据当前页面路径返回正确的相对路径
// 这个函数将在main.js中使用，以确保在不同页面都能正确显示磁贴