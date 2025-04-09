const TaskDeleter = require("../services/taskDeleter");

const deleteTaskController = (req, res) => {
  const id = parseInt(req.params.id);
  const userId = req.user.uid;

  const deletedTask = TaskDeleter.deleteTask(id, userId);
  if (!deletedTask) {
    return res.status(404).json({ error: "Task not found or unauthorized" });
  }

  res.json({ message: "Task deleted successfully" });
};

module.exports = deleteTaskController;
