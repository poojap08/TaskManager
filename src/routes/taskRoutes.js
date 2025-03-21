const express = require("express");
const getAllTasksController = require("../controllers/getAllTasksController");
const getTaskByIdController = require("../controllers/getTaskByIdController");
const createTaskController = require("../controllers/createTaskController");
const deleteTaskController = require("../controllers/deleteTaskController");
const markTaskCompleteController = require("../controllers/markTaskCompleteController");

const router = express.Router();

router.get("/", getAllTasksController);
router.get("/:id", getTaskByIdController);
router.post("/", createTaskController);
router.delete("/:id", deleteTaskController);
router.patch("/:id/complete", markTaskCompleteController);

module.exports = router;
