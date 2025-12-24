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
        name: 'Extra Banners',
        category: '游戏MOD',
        icon: '/assets/icons/lan.png',
        url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3251872472',
        desc: '骑马与砍杀2游戏MOD'
    },
    {
        name: 'Visual Studio',
        category: '开发工具',
        icon: 'https://visualstudio.microsoft.com/wp-content/uploads/2022/11/vs-icon.svg',
        url: 'https://visualstudio.microsoft.com/zh-hans/',
        desc: '高效编码，必备工具！'
    },
    {
        name: '豆包AI',
        category: '网站',
        icon: 'https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/chat/static/image/logo-icon-white-bg.72df0b1a.png',
        url: 'https://www.doubao.com/',
        desc: '豆包AI智能助手'
    },
    {
        name: 'Via',
        category: '浏览器',
        icon: 'https://viayoo.com/zh-cn/images/via-logo.svg',
        url: 'https://viayoo.com/zh-cn/',
        desc: '探索速度与简约的极限：似乎不凡的速度总会为无所不能的定制让步，似乎简约的界面总会为繁杂的功能牺牲，Via 浏览器在打破陈规旧则，让你看到另种可能。'
    },
    {
        name: 'FreeConvert',
        category: '网站',
        icon: 'https://www.freeconvert.com/favicon.ico',
        url: 'https://www.freeconvert.com/',
        desc: '在线线格式转换'
    },
    {
        name: 'TapTap',
        category: '网站',
        icon: 'https://www.taptap.cn/favicon.ico',
        url: 'https://www.taptap.cn/',
        desc: '发现游戏，发现乐趣'
    },
    {
        name: '花瓣网',
        category: '网站',
        icon: 'https://grocery-cdn.huaban.com/file/hb_logo.svg',
        url: 'https://huaban.com/',
        desc: '发现素材，探索灵感'
    }
];

// 路径处理函数 - 根据当前页面路径返回正确的相对路径
// 这个函数将在main.js中使用，以确保在不同页面都能正确显示磁贴
