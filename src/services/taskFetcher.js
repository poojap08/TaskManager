const tasks = require("./taskStorage");

const TaskFetcher = {
    getAllTasks() {
        return tasks;
    }
};

module.exports = TaskFetcher;
