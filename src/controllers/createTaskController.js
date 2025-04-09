const TaskCreator = require("../services/taskCreator");

const createTaskController = (req, res) => {
  const { title, description } = req.body;
  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  const userId = req.user.uid; // Firebase Auth assigns this
  const task = TaskCreator.createTask(title, description, userId);

  res.status(201).json(task);
};

module.exports = createTaskController;
