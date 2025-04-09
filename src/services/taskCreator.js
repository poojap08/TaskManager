const Task = require("../models/taskModel");
const tasks = require("./taskStorage");

let taskId = 1;

const TaskCreator = {
  createTask(title, description, userId) {
    const task = new Task(taskId++, title, userId, description);
    tasks.push(task);
    return task;
  }
};

module.exports = TaskCreator;
