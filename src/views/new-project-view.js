import clearContent from '../index.js'
import loadApp from './app-view.js';
import { ProjectService } from '../models/project.js';

export default function loadNewProjectForm () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });

  const mainContainer = document.querySelector('.main-content');
  const newProjectContainer = document.createElement('div');
  newProjectContainer.classList.add('proj-view-container');

  const goBackTo = document.createElement('div');
  goBackTo.classList.add('view-back-container');

  const goBackSpan = document.createElement('span');
  goBackSpan.textContent = 'GO BACK TO PROJECTS';
  goBackTo.appendChild(goBackSpan);

  newProjectContainer.appendChild(goBackTo);

  // FORM
  const newProjectForm = document.createElement('form');
  newProjectForm.classList.add('new-form');

  const titleSection = document.createElement('div');
  titleSection.classList.add('form-section');

  const titleLabel = document.createElement('label');
  titleLabel.for = 'project-title';
  titleLabel.textContent = 'Project Title';
  titleSection.appendChild(titleLabel);

  const titleInput = document.createElement('input');
  titleInput.type = 'text';
  titleInput.name = 'title';
  titleInput.id = 'project-title';
  titleInput.placeholder = 'Awsome Project Title...';
  titleInput.required = true;
  titleInput.minLength = '4';
  titleInput.maxlength = '16';
  titleSection.appendChild(titleInput);
  
  newProjectForm.appendChild(titleSection);

  const descriptionSection = document.createElement('div');
  descriptionSection.classList.add('form-section');

  const descriptionLabel = document.createElement('label');
  descriptionLabel.for = 'project-description';
  descriptionLabel.textContent = 'Project Description';
  descriptionSection.appendChild(descriptionLabel);

  const descriptionArea = document.createElement('textarea');
  descriptionArea.name = 'description';
  descriptionArea.id = 'project-description';
  descriptionArea.placeholder = 'A briefly description of your Project...';
  descriptionArea.required = true;
  descriptionArea.minLength = '10';
  descriptionArea.maxlength = '40';
  descriptionSection.appendChild(descriptionArea);

  newProjectForm.appendChild(descriptionSection);

  const btnContainer = document.createElement('div');
  btnContainer.classList.add('btn-container');

  const formBtn = document.createElement('button');
  formBtn.id = 'form-btn';
  formBtn.textContent = 'Create Project';

  btnContainer.appendChild(formBtn);
  newProjectForm.appendChild(btnContainer);

  newProjectContainer.appendChild(newProjectForm);


  const titleError = document.createElement('p')
  titleError.id = 'title-error';
  titleError.classList.add('error-text');
  titleError.classList.add('hidden')
  titleError.textContent = '* The title is mandatory and must have a minimum of 4 characters and a maximum of 16.';
  newProjectContainer.appendChild(titleError);

  const descError = document.createElement('p')
  descError.id = 'desc-error';
  descError.classList.add('error-text');
  descError.classList.add('hidden')
  descError.textContent = '* The description is mandatory and must have a minimum of 10 characters and a maximum of 40.';
  newProjectContainer.appendChild(descError);

  const projSucces = document.createElement('p');
  projSucces.id = 'created';
  projSucces.classList.add('success');
  projSucces.classList.add('hidden');
  projSucces.textContent = 'Project created successfully!';
  newProjectContainer.appendChild(projSucces);

  mainContainer.appendChild(newProjectContainer);

// EVENT LISTENERS
  goBackTo.addEventListener('click', (e) => {
      e.preventDefault();
      clearContent();
      loadApp();
    });

  titleInput.addEventListener('input', () => {
    if(!titleInput.checkValidity()){
      titleError.classList.remove('hidden');
    } else { titleError.classList.add('hidden'); }
  });

  descriptionArea.addEventListener('input', () => {
    if(!descriptionArea.checkValidity()){
      descError.classList.remove('hidden');
    } else { descError.classList.add('hidden') }
  });

  formBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(!titleInput.checkValidity() || !descriptionArea.checkValidity()){
      return;
    } else {
      ProjectService.createProject(titleInput.value, descriptionArea.value);
      titleInput.value = '';
      descriptionArea.value = '';
      projSucces.classList.remove('hidden');

      setTimeout(() => {
        clearContent();
        loadApp();
      }, 3000); 
    }
  });
};