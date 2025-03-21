const tasks = require("./taskStorage");

const TaskFinder = {
    getTaskById(id) {
        return tasks.find(task => task.id === id);
    }
};

module.exports = TaskFinder;
