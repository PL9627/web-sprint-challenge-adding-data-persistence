const express = require("express");
const Resources = require("../models/resources-model");

const router = express.Router();

//resources endpoints
router.get("/resources", async (req, res, next) => {
  try {
    const resource = await Resources.findResources();
    res.json(resource);
  } catch (err) {
    next(err);
  }
});

router.post("/resources", async (req, res, next) => {
  try {
    const resource = await Resources.addResources(req.body);
    res.status(201).json(resource);
  } catch (err) {
    next(err);
  }
});

module.exports = router;