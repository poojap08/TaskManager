const TaskFetcher = require("../services/taskFetcher");

const getAllTasksController = (req, res) => {
  const userId = req.user.uid;
  res.json(TaskFetcher.getUserTasks(userId));
};

module.exports = getAllTasksController;
