class School {
    constructor(school, time, field, degeree, specialty) {
        this.school = school || '';
        this.time = time || '';
        this.field = field || '';
        this.degeree = degeree || '';
        this.specialty = specialty || '';
    }
}

const education = [
    new School(
        'Krakow University of Economics',
        '2012-2015',
        'Management',
        'Master',
        `International Marketing`
    ),
    new School(
        'Krakow University of Economics',
        '2007-2012',
        'Information Technology and Econometrics',
        'Bachelor',
        `Information economics`
    )
];

function renderEducation(educationArray) {
    const container = document.getElementById('education-container');
    let content = `
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 class="text-xl font-bold mb-2">Education</h2>
    `;

    educationArray.forEach(school => {
        content += `
          <div class="mb-4">
            <h3 class="text-lg font-bold mb-2">${school.field} at ${school.school}</h3>
            <p class="text-gray-600 mb-4">${school.time}</p>
            <div>${school.degeree}s degeree</div>
            <div>speciality: ${school.specialty}</div>
          </div>
        `;
    });

    content += `</div>`;

    container.innerHTML = content;
}

renderEducation(education);
