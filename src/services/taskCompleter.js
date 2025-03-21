const TaskFinder = require("./taskFinder");

const TaskCompleter = {
    markTaskComplete(id) {
        const task = TaskFinder.getTaskById(id);
        if (!task) return null;
        task.completed = true;
        return task;
    }
};

module.exports = TaskCompleter;
