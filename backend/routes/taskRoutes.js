const express = require("express");
const router = express.Router();

const {
  createTask,
  getTasks,
  deleteTask,
  updateTask,
} = require("../controllers/taskController");

router.get("/", getTasks);
router.post("/", createTask);

// ✅ THESE WERE MISSING OR NOT USED PROPERLY
router.delete("/:id", deleteTask);
router.put("/:id", updateTask);

module.exports = router;