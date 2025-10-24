// home.js 文件，用于在首页显示懒工具和懒推荐页面的所有磁贴
import { softwareList } from './data.js'; // 导入软件列表数据（来自ldtj页面）

document.addEventListener('DOMContentLoaded', function () {
    const softwareListElement = document.getElementById('software-list');
    
    // 懒工具页面的数据（来自ldgj.html）
    const toolList = [
        {
            name: '澄澈之瞳',
            category: '游戏辅助工具',
            icon: 'icons/audrey.png',
            url: 'hx.html',
            recommendText: '血脉极限属性'
        },
        {
            name: '专注之眸',
            category: '游戏辅助工具',
            icon: 'icons/ring6.png',
            url: 'cjb.html',
            recommendText: '传家宝极限方案'
        },
        {
            name: '太阳之眼',
            category: '游戏辅助工具',
            icon: 'icons/audrey.png',
            url: 'tysb.html',
            recommendText: '太阳之眼识别'
        }
    ];
    
    // 合并两个列表（懒工具和懒推荐的所有磁贴）
    const allItems = [...toolList, ...softwareList];
    
    // 清空列表
    softwareListElement.innerHTML = '';
    
    // 添加所有磁贴
    allItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.className = 'software-tile';
        const content = `
            <a href="${item.url}" class="tile-link" target="_self" rel="noopener noreferrer">
                <div class="tile-content">
                    <div class="icon-container">
                        <img src="${item.icon}" alt="${item.name}">
                    </div>
                    <h3>${item.name}</h3>
                    <p class="category-text">${item.category}</p>
                </div>
                <div class="tile-overlay">
                    <p class="overlay-text">${item.recommendText}</p>
                    <a href="${item.url}" class="visit-btn" target="_self" rel="noopener noreferrer">访问</a>
                </div>
            </a>
        `;
        listItem.innerHTML = content;
        softwareListElement.appendChild(listItem);
    });
});