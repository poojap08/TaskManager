const TaskCompleter = require("../services/taskCompleter");

const markTaskCompleteController = (req, res) => {
    const id = parseInt(req.params.id);
    const task = TaskCompleter.markTaskComplete(id);
    if (!task) {
        return res.status(404).json({ error: "Task not found" });
    }
    res.json({ message: "Task marked as completed", task });
};

module.exports = markTaskCompleteController;
