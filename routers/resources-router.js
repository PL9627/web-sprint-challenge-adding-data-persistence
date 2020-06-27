const express = require("express");
const Resources = require("../models/resources-model");

const router = express.Router();

//resources endpoints
router.get("/resources", async (req, res, next) => {
  try {
    const resource = await Resources.findProject();
    res.json(resource);
  } catch (err) {
    next(err);
  }
});

router.post("/resources", async (req, res, next) => {
  try {
    const resource = await Resources.addProject(req.body);
    res.status(201).json(resource);
  } catch (err) {
    next(err);
  }
});