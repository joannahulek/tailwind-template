class Workplace {
    constructor(company, time, title, description) {
        this.company = company || '';
        this.time = time || '';
        this.title = title || '';
        this.description = description || '';
    }
}

const experience = [
    new Workplace(
        'UBS Business Solutions Poland sp. z o.o.',
        'Dec 2018 - Present',
        'Web Miner, Software Engineer',
        `<p>Developing and providing full life cycle of web scraping robots with RPA tools and dedicated web scraping
            platforms based on Python (in 2018-2019) or Java Script (in 2024):
            <ul>
                <li>collecting requirements, creating, testing and implementing robots</li>
                <li>writing documentation</li>
                <li>regular monitoring and maintenance, adjusting, optimization, processes documentation</li>
                <li>decommission of unnecessary robots and projects</li>
            </ul>
        </p>
        <p>Analyzing websites and web applications in terms of:
            <ul>
                <li>architecture, structure</li>
                <li>used technologies</li>
                <li>API</li>
            </ul>
        </p>
        <p>Basic analysis and quality control of data (with SQL) and cooperation with teams involved in further analysis and data processing.</p>
        <p>Developing and maintaining tools for web miners using Python.</p>
        <p>Audit and improving processes of handling robots and data. Implementation and adjusting new solutions.</p>
        <p>Providing trainings for coworkers, onboarding new joiners in the team as an onboarding buddy.</p>
        <p>Implementation of agile solutions (Scrum-based) and project management in R&D projects.</p>`
    ),
    new Workplace(
        'JoHu Apps',
        'Apr 2018 - Nov 2018',
        'Founder, Android Developer',
        `<p>Start-up within the Akademickie Inkubatory Przedsiębiorczości (AIP). Brand created to implement ideas that emerged during my participation in the Android Basics Nanodegree by Google.</p>
        <p>Creating, designing and implementation of mobile applications for Android (for versions Nougat, Oreo, Pie).</p>`
    ),
    new Workplace(
        'We Just Love Coffee',
        'May 2018 - Nov 2018',
        'Barista',
        '<p>Part-time job as a barista at the Salon i Serwis Mercedes-Benz Sobiesław Zasada Automotive.</p>'
    )
];

function renderExperience(experienceArray) {
    const container = document.getElementById('work-experience-container');
    let content = `
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 class="text-xl font-bold mb-2">Work Experience</h2>
    `;

    experienceArray.forEach(workplace => {
        content += `
          <div class="mb-4">
            <h3 class="text-lg font-bold mb-2">${workplace.title} at ${workplace.company}</h3>
            <p class="text-gray-600 mb-4">${workplace.time}</p>
            <div>${workplace.description}</div>
          </div>
        `;
    });

    content += `</div>`;

    container.innerHTML = content;
}

renderExperience(experience);
