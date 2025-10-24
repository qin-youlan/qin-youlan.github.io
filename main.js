// main.js 文件，用于动态生成磁贴
import { softwareList } from './data.js'; // 导入软件列表数据

document.addEventListener('DOMContentLoaded', function () {
    const softwareListElement = document.getElementById('software-list');

    softwareList.forEach(software => {
        const listItem = document.createElement('li');
        listItem.className = 'software-tile';
        const content = `
            <a href="${software.url}" class="tile-link" target="_blank" rel="noopener noreferrer">
                <div class="tile-content">
                    <div class="icon-container">
                        <img src="${software.icon}" alt="${software.name}">
                    </div>
                    <h3>${software.name}</h3>
                    <p class="category-text">${software.category}</p>
                </div>
                <div class="tile-overlay">
                    <p class="overlay-text">${software.recommendText}</p>
                    <a href="${software.url}" class="visit-btn" target="_blank" rel="noopener noreferrer">访问</a>
                </div>
            </a>
        `;
        listItem.innerHTML = content;
        softwareListElement.appendChild(listItem);
    });
});