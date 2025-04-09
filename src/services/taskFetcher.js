const tasks = require("./taskStorage");

const TaskFetcher = {
  getUserTasks(userId) {
    return tasks.filter(task => task.userId === userId);
  }
};

module.exports = TaskFetcher;
