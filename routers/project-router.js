const express = require("express")
const Projects = require("../models/projects-model")

const router = express.Router()

//project endpoints
router.get("/projects", async (req, res, next) => {
    try {
        const project = await project.findProject()
        res.json(project)
    } catch (err) {
        next(err)
    }
})

router.post("/projects", async (req, res, next) => {
    try {
        const project = await Projects.addProject(req.body)
        res.status(201).json(project)
    } catch (err) {
        next(err)
    }
})

