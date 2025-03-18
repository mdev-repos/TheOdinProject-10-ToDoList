import clearContent from '../index.js'
import loadProject from './project-view.js';
import { TaskService } from '../models/task.js';
import { dateFormatter, dateComparer } from '../utils/date-utils.js';
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
  dueDateSection.appendChild(dueDateSeter);

  littleSection.appendChild(dueDateSection);

  const prioritySection = document.createElement('div');
  prioritySection.classList.add('form-section-little');

  const priorityLabel = document.createElement('label');
  priorityLabel.for = 'task-priority';
  priorityLabel.textContent = 'Task Priority'
  prioritySection.appendChild(priorityLabel);

  const prioritySelect = document.createElement('select');
  prioritySelect.id = 'task-priority';
  prioritySelect.name = 'priority'

  const nonOption = document.createElement('option');
  nonOption.textContent = 'Choose Task priority';
  nonOption.value = '';
  prioritySelect.appendChild(nonOption);

  const lowOption = document.createElement('option');
  lowOption.textContent = 'Low';
  lowOption.value = 'Low';
  prioritySelect.appendChild(lowOption);

  const midOption = document.createElement('option');
  midOption.textContent = 'Medium';
  midOption.value = 'Medium';
  prioritySelect.appendChild(midOption);

  const highOption = document.createElement('option');
  highOption.textContent = 'High';
  highOption.value = 'High';
  prioritySelect.appendChild(highOption);

  prioritySection.appendChild(prioritySelect);
  littleSection.appendChild(prioritySection);

  newTaskForm.appendChild(littleSection);

  const btnContainer = document.createElement('div');
  btnContainer.classList.add('btn-container');

  const formBtn = document.createElement('button');
  formBtn.id = 'form-btn';
  formBtn.textContent = 'Create Task';

  btnContainer.appendChild(formBtn);
  newTaskForm.appendChild(btnContainer);

  newTaskContainer.appendChild(newTaskForm);

  const titleError = document.createElement('p')
  titleError.id = 'title-error';
  titleError.classList.add('error-text');
  titleError.classList.add('hidden')
  titleError.textContent = '* The title is mandatory and must have a minimum of 4 characters and a maximum of 16.';
  newTaskContainer.appendChild(titleError);

  const descError = document.createElement('p')
  descError.id = 'desc-error';
  descError.classList.add('error-text');
  descError.classList.add('hidden')
  descError.textContent = '* The description is mandatory and must have a minimum of 10 characters and a maximum of 40.';
  newTaskContainer.appendChild(descError);

  const dateError = document.createElement('p')
  dateError.id = 'date-error';
  dateError.classList.add('error-text');
  dateError.classList.add('hidden')
  dateError.textContent = '* The due date is mandatory and cannot be passed.';
  newTaskContainer.appendChild(dateError);

  const priorityError = document.createElement('p');
  priorityError.id = 'priority-error';
  priorityError.classList.add('error-text');
  priorityError.classList.add('hidden')
  priorityError.textContent = '* The priority is mandatory. Choose one option.';
  newTaskContainer.appendChild(priorityError);

  const taskSucces = document.createElement('p');
  taskSucces.id = 'created';
  taskSucces.classList.add('success');
  taskSucces.classList.add('hidden');
  taskSucces.textContent = 'Task create successfully!';
  newTaskContainer.appendChild(taskSucces);

  mainContainer.appendChild(newTaskContainer);

   // EVENT LISTENERS
    goBackTo.addEventListener('click', () => {
     clearContent();
     loadProject (projectID);
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

    dueDateSeter.addEventListener('input', () => {
      const inputDATE = dueDateSeter.value;
      const inputDate = new Date(inputDATE);
      const now = new Date();
  
      if (dateComparer(inputDate, now)) {
          dateError.classList.remove('hidden');
          dueDateSeter.classList.add('invalid-date');
          dueDateSeter.classList.remove('valid-date');
      } else {
          dateError.classList.add('hidden');
          dueDateSeter.classList.remove('invalid-date');
          dueDateSeter.classList.add('valid-date');
      }
  });

    prioritySelect.addEventListener('change', () => {
      if (prioritySelect.value === '') {
          priorityError.classList.remove('hidden');
          prioritySelect.classList.add('invalid-priority');
      } else {
          priorityError.classList.add('hidden');
          prioritySelect.classList.remove('invalid-priority');
      }
    });

    formBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const inputDATE = dueDateSeter.value;
      const inputDate = new Date(inputDATE);
      const now = new Date();
      if (!titleInput.checkValidity() || 
          !descriptionArea.checkValidity() || 
          !dueDateSeter.checkValidity() || 
          dateComparer(inputDate, now) ||
          prioritySelect.value === '') {
          return;
      } else {
          const newTask = TaskService.createTask(
              titleInput.value, 
              descriptionArea.value, 
              dateFormatter(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate()),
              prioritySelect.value,
              projectID
          );

          ProjectService.addTask(projectID, newTask.taskID);

          titleInput.value = '';
          descriptionArea.value = '';
          dueDateSeter.value = '';
          prioritySelect.value = '';
          taskSucces.classList.remove('hidden');
  
          setTimeout(() => {
              clearContent();
              loadProject(projectID);
          }, 3000); 
      }
  });
};