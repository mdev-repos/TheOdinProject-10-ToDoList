import { ProjectsData } from "./data";

// Enum
export const ProjectState = {
  OPEN: 'Open',
  CLOSED: 'Closed'
};

// Class
export class Project {
  constructor(title, description) {
    this.projectID = crypto.randomUUID();
    this.title = title;
    this.description = description;
    this.state = ProjectState.OPEN;
    this.taskList = [];
  }
}

// Service
export class ProjectService {
  // Create
  static createProject(title, description) {
    const project = new Project(title, description);
    ProjectsData.push(project);
    console.log('Project created successfully');
    return project;
  }

  // Read
  static getAllProjects() {
    return ProjectsData;
  }

  static getProjectByID(projID) {
    return ProjectsData.find(project => project.projectID === projID) || null;
  }

  // Update
  static addTask(projectID, taskID) {
    const project = ProjectsData.find(project => project.projectID === projectID) || null;
    if (project) {
      project.taskList.push(taskID);
      return project.taskList;
    }
    return null;
  }

  static updateProject(projID, updatedProject) {
    const index = ProjectsData.findIndex(project => project.projectID === projID);
    if (index !== -1) {
      ProjectsData[index] = updatedProject;
      return updatedProject;
    }
    return null;
  }

  static removeTaskFromProject(projectID, taskID) {
    const project = this.getProjectByID(projectID);
    if (project) {
      const taskIndex = project.taskList.indexOf(taskID);
      if (taskIndex !== -1) {
        project.taskList.splice(taskIndex, 1);
        return project;
      }
    }
    return null;
  }

  // Delete
  static deleteProject(projectID) {
    const index = ProjectsData.findIndex(project => project.projectID === projectID);
    if (index !== -1) {
      ProjectsData.splice(index, 1);
      return ProjectsData;
    }
    return null;
  }
}