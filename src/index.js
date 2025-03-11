import './styles.css';
import { Task, TaskService, TaskState, Priority } from './models/task';
import { Project, ProjectService, ProjectState } from './models/project';
import { dateFormatter, dateComparer, changeDue, getRemainingDays } from './utils/date-utils'
import loadHome from './views/home-view';
import loadApp from './views/app-view';

function clearContent(){
  const mainContainer = document.querySelector('.main-content');
  mainContainer.innerHTML = '';
}

// Example
const exampleProject = ProjectService.createProject('Example Project', 'This is an example project for new users. Enjoy the app!');
const exampleTask = TaskService.createTask('First Task', 'This is an example task', dateFormatter(2025, 2, 15, 22, 15), Priority.MEDIUM, exampleProject.projectID);
const exampleTask2 = TaskService.createTask('Second Task', 'This is an example task', dateFormatter(2025, 2, 17, 15, 45), Priority.HIGH, exampleProject.projectID);
ProjectService.addTask(exampleProject.projectID, exampleTask.taskID);
ProjectService.addTask(exampleProject.projectID, exampleTask2.taskID);

const exampleProject2 = ProjectService.createProject('Another Project', 'This is an example project for new users. Enjoy the app!');
const exampleTask3 = TaskService.createTask('Another Task', 'This is an example task', dateFormatter(2025, 2, 19, 19, 30), Priority.LOW, exampleProject2.projectID);
ProjectService.addTask(exampleProject2.projectID, exampleTask3.taskID);

console.log(ProjectService.getAllProjects());
console.log(ProjectService.getProjectByID(exampleProject.projectID));
console.log(TaskService.getAllTasks(exampleProject.projectID));
console.log(TaskService.getTaskByID(exampleTask.taskID));

clearContent();
loadHome();

const ctaHomeBtn = document.querySelector('#home-cta');
  ctaHomeBtn.addEventListener ('click', () => {
    clearContent();
    loadApp();
  });