const TaskFinder = require("./taskFinder");

const TaskCompleter = {
  markTaskComplete(id, userId) {
    const task = TaskFinder.getTaskById(id, userId);
    if (!task) return null;
    task.completed = true;
    return task;
  }
};

module.exports = TaskCompleter;
