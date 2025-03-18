import './styles.css';
import { Task, TaskService, TaskState, Priority } from './models/task';
import { Project, ProjectService, ProjectState } from './models/project';
import { dateFormatter, dateComparer, changeDue, getRemainingDays } from './utils/date-utils'
import { ProjectsData, TasksData, saveData, loadData } from './models/data';
import loadHome from './views/home-view';
import loadApp from './views/app-view';

export default function clearContent(){
  const mainContainer = document.querySelector('.main-content');
  mainContainer.innerHTML = '';
};

loadData();

if (ProjectsData.length === 0 && TasksData.length === 0){
  // Testing Data
  const firstProject = ProjectService.createProject('Cool Test Project', 'This is a simple test project to checkout the app. I am talking to myself that so weird...');
  const firstOneTask = TaskService.createTask('First project First Task', 'This is the First Task of the First Project', dateFormatter(2025, 2, 19), Priority.MEDIUM, firstProject.projectID);
  const firstTwoTask = TaskService.createTask('First project Second Task', 'This is the Second Task of the First Project', dateFormatter(2025, 2, 14), Priority.HIGH, firstProject.projectID);
  const firstThreeTask = TaskService.createTask('First project Third Task', 'This is the Third Task of the First Project', dateFormatter(2025, 3, 30), Priority.LOW, firstProject.projectID);

  ProjectService.addTask(firstProject.projectID, firstOneTask.taskID);
  ProjectService.addTask(firstProject.projectID, firstTwoTask.taskID);
  ProjectService.addTask(firstProject.projectID, firstThreeTask.taskID);

  const secondProject = ProjectService.createProject('Another Cool Test Project', 'This is a simple test project to checkout the app. I figure out that this text will live in me forever...');
  const secondOneTask = TaskService.createTask('First project First Task', 'This is the First Task of the Second Project', dateFormatter(2025, 2, 15), Priority.HIGH, secondProject.projectID);
  const secondTwoTask = TaskService.createTask('First project Second Task', 'This is the Second Task of the Second Project', dateFormatter(2025, 2, 14), Priority.HIGH, secondProject.projectID);
  const secondThreeTask = TaskService.createTask('First project Third Task', 'This is the Third Task of the Second Project', dateFormatter(2025, 9, 2), Priority.LOW, secondProject.projectID);

  ProjectService.addTask(secondProject.projectID, secondOneTask.taskID);
  ProjectService.addTask(secondProject.projectID, secondTwoTask.taskID);
  ProjectService.addTask(secondProject.projectID, secondThreeTask.taskID);

  saveData();
}

clearContent();
loadHome();

const ctaHomeBtn = document.querySelector('#home-cta');
ctaHomeBtn.addEventListener ('click', () => {
  clearContent();
  loadApp();
});
