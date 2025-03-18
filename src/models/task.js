import { TasksData, saveData } from "./data";

// Enums
export const Priority = {
  LOW: 'Low',
  MEDIUM: 'Medium',
  HIGH: 'High',
};

export const TaskState = {
  TODO: 'To do',
  DONE: 'Done'
};

// Class
export class Task {
  constructor(title, description, dueDate, priority, projectID) {
    this.taskID = crypto.randomUUID();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.state = TaskState.TODO;
    this.projectID = projectID;
  }
}

// Service
export class TaskService {
  // Create
  static createTask(title, description, dueDate, priority, projectID) {
    if (!title || !description) {
      throw new Error('Title and description are required');
    }
    if (!dueDate || isNaN(new Date(dueDate).getTime())) {
      throw new Error('Invalid due date');
    }
    const task = new Task(title, description, dueDate, priority, projectID);
    TasksData.push(task);
    saveData();
    return task;
  }

  // Read
  static getAllTasks(projectID) {
    return TasksData.filter(task => task.projectID === projectID) || null;
  }

  static getTaskByID(taskID) {
    return TasksData.find(task => task.taskID === taskID) || null;
  }

  // Update
  static updateTask(taskID, updatedFields) {
    const index = TasksData.findIndex(task => task.taskID === taskID);
    if (index !== -1) {
      TasksData[index] = { ...TasksData[index], ...updatedFields };
      saveData();
      return TasksData[index];
    }
    return null;
  }

  // Delete
  static deleteTask(taskID) {
    const index = TasksData.findIndex(task => task.taskID === taskID);
    if (index !== -1) {
      TasksData.splice(index, 1);
      saveData();
      return TasksData;
    }
    return null;
  }
}