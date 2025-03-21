const Task = require("../models/taskModel");
const tasks = require("./taskStorage");

let taskId = 1;

const TaskCreator = {
    createTask(title, description) {
        const task = new Task(taskId++, title, description);
        tasks.push(task);
        return task;
    }
};

module.exports = TaskCreator;
