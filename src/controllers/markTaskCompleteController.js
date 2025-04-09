const TaskCompleter = require("../services/taskCompleter");

const markTaskCompleteController = (req, res) => {
  const id = parseInt(req.params.id);
  const userId = req.user.uid;

  const task = TaskCompleter.markTaskComplete(id, userId);
  if (!task) {
    return res.status(404).json({ error: "Task not found or unauthorized" });
  }

  res.json({ message: "Task marked as completed", task });
};

module.exports = markTaskCompleteController;
