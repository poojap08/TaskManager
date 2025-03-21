const TaskFetcher = require("../services/taskFetcher");

const getAllTasksController = (req, res) => {
    res.json(TaskFetcher.getAllTasks());
};

module.exports = getAllTasksController;
