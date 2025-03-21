const TaskCreator = require("../services/taskCreator");

const createTaskController = (req, res) => {
    const { title, description } = req.body;
    if (!title) {
        return res.status(400).json({ error: "Title is required" });
    }
    const task = TaskCreator.createTask(title, description);
    res.status(201).json(task);
};

module.exports = createTaskController;
