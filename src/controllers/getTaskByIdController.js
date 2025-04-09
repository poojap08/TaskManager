const TaskFinder = require("../services/taskFinder");

const getTaskByIdController = (req, res) => {
  const id = parseInt(req.params.id);
  const userId = req.user.uid;

  const task = TaskFinder.getTaskById(id, userId);
  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.json(task);
};

module.exports = getTaskByIdController;
