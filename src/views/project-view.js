import { Project, ProjectService, ProjectState } from '../models/project';
import { Task, TaskService, TaskState, Priority } from '../models/task';
import { dateFormatter, dateComparer, changeDue, getRemainingDays } from '../utils/date-utils.js'
import clearContent from '../index.js'
import loadApp from './app-view.js';
import loadNewTaskForm from './new-task-view.js'
import loadEditTaskForm from './edit-task-view.js'

function createTaskCard (taskID) {
    const task = TaskService.getTaskByID(taskID);
    const taskDueDate = task.dueDate;
    const remainingDays = getRemainingDays(taskDueDate);

    const taskCard = document.createElement('div');
    taskCard.classList.add('task-card');
    taskCard.id = task.taskID;

    const titleContainer = document.createElement('div');
    titleContainer.classList.add('task-title-container');

    const taskCardTitle = document.createElement('p');
    taskCardTitle.classList.add('task-card-title');
    taskCardTitle.textContent = `${task.title}`;
    titleContainer.appendChild(taskCardTitle);

    const titleSpan = document.createElement('span');
    titleSpan.classList.add('task-card-title-span');
    if(task.state === TaskState.DONE) {
      titleSpan.classList.add('state-done');
    }
    titleSpan.textContent = `${task.state}`;

    if(remainingDays < 0 && task.state === TaskState.TODO){
      titleSpan.textContent = 'Past date';
    }
    
    titleContainer.appendChild(titleSpan);

    taskCard.appendChild(titleContainer);

    const taskCardContent = document.createElement('div');
    taskCardContent.classList.add('task-card-content');

    const cardStateTime = document.createElement('span');
    cardStateTime.classList.add('task-states');

    const cardStatesTitle = document.createElement('div');
    cardStatesTitle.classList.add('task-states-title');

    const dueEmoji = document.createElement('span');
    dueEmoji.textContent = '📆';
    const dueTitle = document.createElement('p');
    dueTitle.textContent = 'Due';
    cardStatesTitle.appendChild(dueEmoji);
    cardStatesTitle.appendChild(dueTitle);

    cardStateTime.appendChild(cardStatesTitle);

    const remianingTime = document.createElement('p');
    remianingTime.classList.add('state-value');
    
    
    
    if (remainingDays === 0){
      remianingTime.textContent = 'Today!';
    } else if(remainingDays < 0){
      remianingTime.textContent = 'Past date!';

    } else {
        remianingTime.textContent = `in ${remainingDays} days`;
    }

    if (remainingDays > 7){
      remianingTime.classList.add('low-prior');
    } else if (remainingDays <= 7 && remainingDays > 3){
        remianingTime.classList.add('mid-prior');
    } else {
        remianingTime.classList.add('high-prior');
    }

    if(task.state === TaskState.DONE){
      remianingTime.textContent = 'Done';
      remianingTime.classList.remove('low-prior');
      remianingTime.classList.remove('mid-prior');
      remianingTime.classList.remove('high-prior');
      remianingTime.classList.add('low-prior');
    }

    cardStateTime.appendChild(remianingTime);
    taskCardContent.appendChild(cardStateTime);

    const cardStatePriority = document.createElement('span');
    cardStatePriority.classList.add('task-states');

    const statesPriorityTitle = document.createElement('div');
    statesPriorityTitle.classList.add('task-states-title');

    const priorEmoji = document.createElement('span');
    priorEmoji.textContent = '🚦';
    const priorTitle = document.createElement('p');
    priorTitle.textContent = 'Priority';
    
    statesPriorityTitle.appendChild(priorEmoji);
    statesPriorityTitle.appendChild(priorTitle);

    cardStatePriority.appendChild(statesPriorityTitle);

    const taskPriority = document.createElement('p');
    taskPriority.classList.add('state-value');

    taskPriority.textContent = `${task.priority}`;

    switch (task.priority) {
        case 'Low':
        taskPriority.classList.add('low-prior');
        break;
        case 'Medium':
        taskPriority.classList.add('mid-prior');
        break;
        case 'High':
        taskPriority.classList.add('high-prior');
        break;
    };

    cardStatePriority.appendChild(taskPriority);
    taskCardContent.appendChild(cardStatePriority);

    taskCard.appendChild(taskCardContent);


    const cardOptions = document.createElement('div');
    cardOptions.classList.add('task-card-opt'); 

    const editBtn = document.createElement('span');
    editBtn.classList.add('task-edit');
    editBtn.id = task.taskID;
    editBtn.textContent = 'Edit'; 
    cardOptions.appendChild(editBtn);

    const deleteBtn = document.createElement('span');
    deleteBtn.classList.add('task-delete');
    deleteBtn.id = task.taskID;
    deleteBtn.textContent = 'Delete'; 
    cardOptions.appendChild(deleteBtn);

    const completeBtn = document.createElement('span');
    completeBtn.classList.add('task-complete');
    completeBtn.id = task.taskID;
    completeBtn.textContent = 'Complete'; 
    cardOptions.appendChild(completeBtn);

    taskCard.appendChild(cardOptions);

    return taskCard;
  };

export default function loadProject (projectID) {
  const projectEntity = ProjectService.getProjectByID(projectID);

  const mainContainer = document.querySelector('.main-content');
  const projectContainer = document.createElement('div');
  projectContainer.classList.add('proj-view-container');

  const goBackTo = document.createElement('div');
  goBackTo.classList.add('view-back-container');

  const goBackSpan = document.createElement('span');
  goBackSpan.textContent = 'GO BACK TO PROJECTS';
  goBackTo.appendChild(goBackSpan);

  projectContainer.appendChild(goBackTo);

  const admContainer = document.createElement('div');
  admContainer.classList.add('proj-adm-container');
    
  const projectTitle = document.createElement('p');
  projectTitle.textContent = `${projectEntity.title}`;
  admContainer.appendChild(projectTitle);

  const addTaskBtn = document.createElement('span');
  addTaskBtn.textContent = '+ TASK'
  admContainer.appendChild(addTaskBtn);

  projectContainer.appendChild(admContainer);

  const taskListContainer = document.createElement('div');
  taskListContainer.classList.add('tasks-container');

  console.log(projectEntity.taskList.length);
  if(projectEntity.taskList.length !== 0){
    projectEntity.taskList.forEach(task => {
      const card = createTaskCard(task);
      taskListContainer.appendChild(card);
    });
  } 

  projectContainer.appendChild(taskListContainer);
  mainContainer.appendChild(projectContainer);


  //EVENT LISTENERS
  goBackTo.addEventListener('click', (e) => {
    e.preventDefault();
    clearContent();
    loadApp();
  });

  addTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();
    clearContent();
    loadNewTaskForm(projectID);
  });

  const editTaskBtns = document.querySelectorAll('.task-edit');
  editTaskBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const taskID = e.target.id;
      clearContent();
      loadEditTaskForm(taskID);
    });
  });

  const deleteTaskBtns = document.querySelectorAll('.task-delete');
  deleteTaskBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const taskID = e.target.id;  
    const task = TaskService.getTaskByID(taskID);  

    if (task) {
      const projectID = task.projectID;
      ProjectService.removeTaskFromProject(projectID, taskID);
      TaskService.deleteTask(taskID);
      clearContent();
      loadProject(projectID);
    } else {
      console.error('Task not found.');
    }
  });
});

  const completeTaskBtns = document.querySelectorAll('.task-complete');
  completeTaskBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const taskID = e.target.id;
      const task = TaskService.getTaskByID(taskID);
      const projectID = task.projectID;
      task.state = task.state === TaskState.TODO ? TaskState.DONE : TaskState.TODO;
      clearContent();
      loadProject(projectID);
    });
  });
}