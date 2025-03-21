const TaskDeleter = require("../services/taskDeleter");

const deleteTaskController = (req, res) => {
    const id = parseInt(req.params.id);
    const deletedTask = TaskDeleter.deleteTask(id);
    if (!deletedTask) {
        return res.status(404).json({ error: "Task not found" });
    }
    res.json({ message: "Task deleted successfully" });
};

module.exports = deleteTaskController;
