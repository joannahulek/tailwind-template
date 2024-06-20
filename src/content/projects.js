import { itprojects, selfprojects, publicspeaking, Project } from './Project.js';

class Category {
    constructor(category, projects) {
        this.category = category || '';
        this.projects = projects || [];
    }
}

const categories = [
    new Category('Frontend Development', itprojects),
    new Category('Self Development', selfprojects),
    new Category('Public Speaking', publicspeaking)
];

function renderProjects(categoriesArray) {
    const container = document.getElementById('projects-container');
    let content = '';

    categoriesArray.forEach(category => {
        content += `
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 class="text-xl font-bold mb-2">${category.category}</h2>
    `;

        category.projects.forEach(project => {
            content += `
          <div class="mb-4">
            <h3 class="text-lg font-bold mb-2">${project.title}</h3>
            <p class="text-gray-600 mb-4">${project.time}</p>
            <div>${project.description}</div>
            <div>
              ${project.links.map(link => `<a href="${link}" target="_blank">${link}</a>`).join('<br>')}
            </div>
          </div>
        `;
        });

        content += `</div>`;
    });

    container.innerHTML = content;
}

renderProjects(categories);