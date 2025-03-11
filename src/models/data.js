// DATA
export let ProjectsData = [];
export let TasksData = [];

export const saveData = () => {
  localStorage.setItem('projects', JSON.stringify(ProjectsData));
  localStorage.setItem('tasks', JSON.stringify(TasksData));
};

export const loadData = () => {
  const projectsJson = localStorage.getItem('projects');
  const tasksJson = localStorage.getItem('tasks');
  ProjectsData = projectsJson ? JSON.parse(projectsJson) : [];
  TasksData = tasksJson ? JSON.parse(tasksJson) : [];
};