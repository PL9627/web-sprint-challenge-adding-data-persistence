const express = require("express");
const Tasks = require("../models/tasks-model");

const router = express.Router();

//project endpoints
router.get("/tasks", async (req, res, next) => {
  try {
    const task = await Tasks.findProject();
    res.json(task);
  } catch (err) {
    next(err);
  }
});

router.post("/tasks", async (req, res, next) => {
  try {
    const task = await Tasks.addProject(req.body);
    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
});