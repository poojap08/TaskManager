const tasks = require("./taskStorage");

const TaskFinder = {
  getTaskById(id, userId) {
    return tasks.find(task => task.id === id && task.userId === userId);
  }
};

module.exports = TaskFinder;
