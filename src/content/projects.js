class Project {
    constructor(title, time, description, links) {
        this.title = title || '';
        this.time = time || '';
        this.description = description || '';
        this.links = links || [''];
    }
}

let svg_url = "<svg width='10' height='10' fill='darkcyan' version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 425.466 425.467' xml:space='preserve'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'> <g> <g> <g> <path d='M318.15,230.195l77.934-77.937c31.894-31.892,31.894-83.782-0.004-115.674l-12.66-12.66 c-31.893-31.896-83.78-31.896-115.674-0.004l-77.937,77.934c-17.588,17.588-25.457,41.264-23.646,64.311 c-23.045-1.813-46.722,6.056-64.308,23.647L23.92,267.748c-31.894,31.889-31.894,83.779,0,115.674l12.664,12.662 c31.893,31.893,83.783,31.893,115.674,0l77.935-77.936c17.592-17.59,25.459-41.266,23.647-64.309 C276.884,255.654,300.56,247.783,318.15,230.195z M202.653,290.605l-77.936,77.938c-16.705,16.703-43.889,16.703-60.59,0 l-12.666-12.666c-16.705-16.701-16.703-43.885,0-60.594l77.936-77.932c14.14-14.141,35.779-16.306,52.226-6.516l-32.302,32.307 c-7.606,7.604-7.606,19.938,0,27.541c7.605,7.607,19.937,7.607,27.541,0l32.306-32.303 C218.959,254.828,216.795,276.469,202.653,290.605z M238.382,209.169l32.299-32.306c7.608-7.602,7.608-19.935,0-27.538 c-7.604-7.61-19.936-7.61-27.541-0.004l-32.303,32.303c-9.791-16.446-7.627-38.087,6.514-52.226l77.935-77.935 c16.707-16.707,43.89-16.707,60.594,0l12.664,12.664c16.705,16.705,16.705,43.886,0,60.591l-77.936,77.937 C276.468,216.797,254.828,218.959,238.382,209.169z'></path> </g> </g> </g> </g></svg>";

const itprojects = [
    new Project(
        'marka-tekst.vercel.app',
        'May 2024',
        'Online business card for my friend Marta, to help her grow her business. Created in React.js, TypeScript and Bootstrap',
        ['https://marka-tekst.vercel.app/', 'https://github.com/joannahulek/marka-tekst.vercel.app'],
    ),
    new Project(
        'joannahulek.github.io',
        'Apr 2024',
        'My home website, created in React.js, TypeScript and Bootstrap',
        ['https://joannahulek.github.io/', 'https://github.com/joannahulek/joannahulek.github.io'],
    )
];

const selfprojects=[
    new Project(
        'Be Visible in IT',
        'May 2024 - Jan 2025',
        'Working on personal development, directing professional goals and actions, building an authentic, strong personal brand based on my strengths and predispositions, under the supervision of experienced specialists. Improving public speaking and communication skills. Collaboration inside and outside the project.<br>project organized by <i>Women in Technology Poland</i> by <i>Imagine Inclusive Technology Foundation</i> in cooperation with <i>Splunk</i>',
        ['https://www.womenintechnology.pl/be-visible-in-it'],
    ),
    new Project(
        'Tech Leaders',
        '20th Feb - 20th Jun 2024',
        'Collaboration with a mentor during to 9th edition of Tech Leaders Mentoring Program to plan my career path and self-awareness of my competences and predispositions. Gaining a deeper understanding of using Agile methodologies in practice. Actively participating in additional initiatives supporting the development of leadership competences and knowledge sharing.<br>Individual working on projects to develop technical skills as a Front-end Developer.',
        ['https://techleaders.eu/', 'https://www.linkedin.com/company/tech-leaders/'],
    )
]

const publicspeaking =[
    new Project(
        'Nasze cele zmieniają się wraz z nami',
        '21th Jun 2024',
        'Live presentation (in Polish) during the Tech Leaders 9 Closing Gala, telling about my journey during the program - how a deeper understanding of my strengths and weaknesses influenced a more conscious choice of goals and their more effective implementation.<br>Of the over 100 mentees participating in the program, only 3 were distinguished with the opportunity to present during the Closing Gala.',
        ['']
    ),
    new Project(
        'Jak zepsułam Scrum? Case Study',
        '10th Jun 2024',
        '',
        ['']
    )
]

let marka=[
    new Project(
        '<a href="https://marka-tekst.vercel.app/" target="_blank" class="url-text">'+svg_url+' marka-tekst.vercel.app</a>',
        'maj-czerwiec 2024',
        '<p>Strona biznesowa dla mojej przyjaciółki zajmującej się copywritingiem, mająca pomóc jej pozyskać klientów oraz zaprezentować portfolio i ofertę.</p>' +
        '<p>Jak wyglądała realizacja projektu:<ul><li>lorem ipsum</li><li>to muszę opisać i uzupełnić</li></ul></p>'+
        '<p><u>Technologie:</u> React.js, TypeScript, Bootstrap</p>',
        ['<a href="https://github.com/joannahulek/marka-tekst.vercel.app" target="_blank" class="url-text">'+svg_url+' repozytorium projektu</a>'],
    )
]

let jh=[
    new Project(
        '<a href="https://joannahulek.github.io/" target="_blank" class="url-text">'+svg_url+' joannahulek.github.io</a>',
        'kwiecień-maj 2024',
        '<p>Statyczna strona prezentująca moje CV i portfolio. Wciąż w budowie ;-)</p>'+
        '<p><u>Technologie:</u> React.js, TypeScript, Bootstrap</p>',
        ['<a href="https://github.com/joannahulek/joannahulek.github.io" target="_blank" class="url-text">'+svg_url+' repozytorium projektu</a>'],
    )
]

let cv =[
    new Project(
        '<a href="https://github.com/joannahulek/cv-tailwind-template" target="_blank" class="url-text">'+svg_url+' repozytorium projektu</a>',
        'lipiec 2024 (a tak naprawdę, to czerwiec)',
        '<p>Z Bootstrapem dogadujemy się całkiem dobrze. Z TypeScriptem bardzo się lubimy! React skądinąd jest bliski mojemu sercu. Ale chciałam też poćwiczyć JS i zapoznać się z Tailwindem - dlatego w maju wymyśliłam sobie projekt: szablon CV w tych technologiach.<br>' +
        'Finalnie nie korzystam z tego szablonu. Ale przygotowując to zestawienie, postanowiłam wrócić do tego projektu i użyć kodu do wyświetlania projektów, który napisałam kiedyś.</p>'+
        '<p>Nie jest to może jakiś szalenie ambitny projekt i sporo tu jeszcze do zrobienia, ale cieszę się, że miałam okazję i pretekst, żeby do niego wrócić :-)</p>'+
        '<p><u>Technologie:</u> JavaScript, Tailwind</p>',
        [],
    )
]

let johu = [
    new Project(
        '<i>Co one tu robią i dlaczego o nich piszę?</i>',
        '<i>i czemu bez keczupu?</i>',
        '<i>Młode mamy często decydują się na przebranżowienie w trakcie urlopu macierzyńskiego. W 2016 roku ja postanowiłam powrócić do programowania, które tak bardzo pasjonowało mnie w szkole średniej i na studiach. ' +
        '<br>Tak się złożyło, że miałam możliwość realizowania kursu z podstaw tworzenia aplikacji na Android (jeszcze wtedy w Java) - to była fajna opcja na początek.' +
        '<br>Spośród kilkunastu projektów, które powstały w tamtym czasie, mam szczególny sentyment do kilku z nich:</i>',
        ['']
    ),
    new Project(
        '<a href="https://github.com/joannahulek/TytusQuiz" target="_blank" class="url-text">'+svg_url+' Tytus Quiz</a>',
        'kwiecień-czerwiec 2017',
        'Quiz wiedzy o komiksach z serii "Tytus Romek i A\'Tomek". Aplikacja była kiedyś dostępna na Google Play Store.',
        ['']
    ),
    new Project(
        '<a href="https://github.com/joannahulek/TarnowTourGuide" target="_blank" class="url-text">'+svg_url+' Tarnów Tour Guide</a>',
        'czerwiec 2017',
        'Prosta aplikacja ułatwiająca zwiedzanie miasta Tarnowa - lista zabytków wraz z krótkimi opisami, zdjęciami i odnośnikami do Wikipedi oraz do wywołania aplikacji zewnętrznej (mapy). Aplikacja była kiedyś dostępna na Google Play Store.',
        ['']
    ),
    new Project(
        'link',
        'data',
        'opis',
        ['']
    )

]

class Category{
    constructor(category, projects) {
        this.category = category || '';
        this.projects = projects || [''];
    }
}

const categories = [
    //new Category('Frontend Development', itprojects),
    //new Category('Self Development', selfprojects),
    //new Category('Public Speaking', publicspeaking),
    new Category("MarKa Tekst - strona biznesowa", marka),
    new Category("Joanna Hulek - moja wizytówka", jh),
    new Category("Aplikacje natywne dla systemu Android", johu),
    new Category("Portfolio projektów, które właśnie czytasz ;-)", cv)

]

function renderProjects(categoriesArray) {
    const container = document.getElementById('projects-container');
    let content=''

    categoriesArray.forEach(category =>{
        content +=`
      <div class="bg-white shadow-md rounded px-8 pt-4 pb-8 mb-4">
        <h2 class="text-xl font-bold mb-2">${category.category}</h2>
    `;

        /*category.projects.forEach(project => {
            content += `
          <div class="mb-4">
            <h3 class="text-lg font-bold mb-2">${project.title}</h3>
            <p class="text-gray-600 mb-4">${project.time}</p>
            <div>${project.description}</div>
            <div>${project.links}</div>
          </div>
        `;
         */
            category.projects.forEach(project => {
                content += `
          <div>
            <p class="text-gray-600">${project.title} &emsp; | <small>${project.time}</small></p>
            <div>${project.description}</div>
            <div>${project.links}</div>
          </div>
        `;

        });

        content += `</div>`;
    })
    container.innerHTML = content;
}

renderProjects(categories);