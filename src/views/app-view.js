import { Project, ProjectService, ProjectState } from '../models/project';

function createProjectCard (project) {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');

    const cardHeader = document.createElement('div');
    cardHeader.classList.add('proj-card-header');

    const cardTitle = document.createElement('p');
    cardTitle.classList.add('proj-card-title');
    cardTitle.textContent = `${project.title}`;
    cardHeader.appendChild(cardTitle);
    
    const cardSpan = document.createElement('span');
    cardSpan.classList.add('project-open-btn');
    cardSpan.textContent = 'OPEN';
    cardHeader.appendChild(cardSpan);

    projectCard.appendChild(cardHeader);

    const cardDescription = document.createElement('p');
    cardDescription.classList.add('proj-card-descript');
    cardDescription.textContent = `${project.description}`;
    projectCard.appendChild(cardDescription);
    
    return projectCard;
}

export default function loadApp () {
    const mainContainer = document.querySelector('.main-content');
    const appContainer = document.createElement('div');
    appContainer.classList.add('app-container');

    const projectsAdm = document.createElement('div');
    projectsAdm.classList.add('projects-adm');

    const admTitle = document.createElement('p');
    admTitle.textContent = 'Projects';
    projectsAdm.appendChild(admTitle);

    const admSpan = document.createElement('span');
    admSpan.textContent = '+ ADD';
    projectsAdm.appendChild(admSpan);

    appContainer.appendChild(projectsAdm);

    const projectsContainer = document.createElement('div');
    projectsContainer.classList.add('projects-container');

    const allProjects = ProjectService.getAllProjects();

    allProjects.forEach(project => {
        const card = createProjectCard(project);
        projectsContainer.appendChild(card);
    });

    appContainer.appendChild(projectsContainer);
    mainContainer.appendChild(appContainer);
}