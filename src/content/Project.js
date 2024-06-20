export class Project {
    constructor(title, time, description, links) {
        this.title = title || '';
        this.time = time || '';
        this.description = description || '';
        this.links = links || [''];
    }
}

export const itprojects = [
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

export const selfprojects=[
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

export const publicspeaking =[
    new Project(
        'Nasze cele zmieniają się wraz z nami',
        '21th Jun 2024',
        'Live presentation (in Polish) during the Tech Leaders 9 Closing Gala, telling about my journey during the program - how a deeper understanding of my strengths and weaknesses influenced a more conscious choice of goals and their more effective implementation.<br>Of the over 100 mentees participating in the program, only 3 were distinguished with the opportunity to present during the Closing Gala.',
        ['']
    ),
    new Project(
        'Jak zepsułam Scrum? Case Study',
        '10th Jun 2024',
        'Webinar about frequently mistakes during implementing Scrum framework - based on my own practices and cooperation with experienced, professional Scrum Masters and IT Managers.<br>In addition to case study that shows how common mistakes impacts for product developming, also includes conclusions and tips for beginner Scrum Masters, Menagers and people who want to work in Scrum or start thier jurney with Agile.',
        ['']
    )
]