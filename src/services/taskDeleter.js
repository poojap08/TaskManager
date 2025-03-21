const tasks = require("./taskStorage");

const TaskDeleter = {
    deleteTask(id) {
        const index = tasks.findIndex(task => task.id === id);
        if (index === -1) return null;
        return tasks.splice(index, 1)[0];
    }
};

module.exports = TaskDeleter;
