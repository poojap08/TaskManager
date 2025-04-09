const tasks = require("./taskStorage");

const TaskDeleter = {
  deleteTask(id, userId) {
    const index = tasks.findIndex(task => task.id === id && task.userId === userId);
    if (index === -1) return null;
    return tasks.splice(index, 1)[0];
  }
};

module.exports = TaskDeleter;
