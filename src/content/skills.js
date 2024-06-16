function renderSkils() {
    const container = document.getElementById('skills-container');
    let content = `
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 class="text-xl font-bold mb-2">Skills</h2>
        <div class="mb-4">
            <h3 class="text-lg font-bold mb-2">Frontend Development</h3>
            <p class="text-gray-600 mb-4">• Javascript • TypeScript • React • Bootstrap • Tailwind CSS • HTML • CSS • JSON • GIT, GitHub, GitLab • JIRA •</p>
        </div>
        <div class="mb-4">
            <h3 class="text-lg font-bold mb-2">Soft Skills</h3>
            <p class="text-gray-600 mb-4">• Agile • Kanban • Scrum •  Public Speaking • Knowledge Sharing • Emotional Intelligence • Empathy •</p>
        </div>
        </div>`;

    container.innerHTML = content;
}

renderSkils();
