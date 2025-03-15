import clearContent from '../index.js'
import loadProject from './project-view.js';
import { ProjectService } from '../models/project.js';

export default function loadNewTaskForm (projectID) {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });

  const mainContainer = document.querySelector('.main-content');
  const newTaskContainer = document.createElement('div');
  newTaskContainer.classList.add('proj-view-container');

  const goBackTo = document.createElement('div');
  goBackTo.classList.add('view-back-container');

  const goBackSpan = document.createElement('span');
  goBackSpan.textContent = 'GO BACK TO MAIN PROJECT';
  goBackTo.appendChild(goBackSpan);

  newTaskContainer.appendChild(goBackTo);



  // FORM
  const newTaskForm = document.createElement('form');
  newTaskForm.classList.add('new-form');

  const titleSection = document.createElement('div');
  titleSection.classList.add('form-section');

  const titleLabel = document.createElement('label');
  titleLabel.for = 'task-title';
  titleLabel.textContent = 'Task Title';
  titleSection.appendChild(titleLabel);

  const titleInput = document.createElement('input');
  titleInput.type = 'text';
  titleInput.name = 'title';
  titleInput.id = 'task-title';
  titleInput.placeholder = 'Important Task Title...';
  titleInput.required = true;
  titleInput.minLength = '3';
  titleInput.maxlength = '12';
  titleSection.appendChild(titleInput);
  
  newTaskForm.appendChild(titleSection);

  const descriptionSection = document.createElement('div');
  descriptionSection.classList.add('form-section');

  const descriptionLabel = document.createElement('label');
  descriptionLabel.for = 'task-description';
  descriptionLabel.textContent = 'Task Description';
  descriptionSection.appendChild(descriptionLabel);

  const descriptionArea = document.createElement('textarea');
  descriptionArea.name = 'description';
  descriptionArea.id = 'task-description';
  descriptionArea.placeholder = 'A briefly description of your Task...';
  descriptionArea.required = true;
  descriptionArea.minLength = '6';
  descriptionArea.maxlength = '30';
  descriptionSection.appendChild(descriptionArea);

  newTaskForm.appendChild(descriptionSection);


  const littleSection = document.createElement('div');
  littleSection.classList.add('little-section-container');

  const dueDateSection = document.createElement('div');
  dueDateSection.classList.add('form-section-little');

  const dueDateLabel = document.createElement('label');
  dueDateLabel.for = 'task-due';
  dueDateLabel.textContent = 'Task Due Date'
  dueDateSection.appendChild(dueDateLabel);

  const dueDateSeter = document.createElement('input');
  dueDateSeter.type = 'date';
  dueDateSeter.name = "due-date";
  dueDateSeter.id = 'task-due'
  dueDateSeter.required = true;
  dueDateSeter.min = new Date();
  dueDateSection.appendChild(dueDateSeter);

  littleSection.appendChild(dueDateSection);

  const prioritySection = document.createElement('div');
  prioritySection.classList.add('form-section-little');

  const priorityLabel = document.createElement('label');
  priorityLabel.for = 'task-priority';
  priorityLabel.textContent = 'Task Priority'
  prioritySection.appendChild(priorityLabel);

  const prioritySelect = document.createElement('select');


  prioritySection.appendChild(prioritySelect);
  littleSection.appendChild(prioritySection);

  newTaskForm.appendChild(littleSection);

  // FORM BTN
  const btnContainer = document.createElement('div');
  btnContainer.classList.add('btn-container');

  const formBtn = document.createElement('button');
  formBtn.id = 'form-btn';
  formBtn.textContent = 'Create Task';

  btnContainer.appendChild(formBtn);
  newTaskForm.appendChild(btnContainer);

  newTaskContainer.appendChild(newTaskForm);



   // APPENDING
   mainContainer.appendChild(newTaskContainer);

   // EVENT LISTENERS
   goBackTo.addEventListener('click', () => {
     clearContent();
     loadProject (projectID);
   });
};