const db = require("../data/config");

module.exports = {
  findProject,
  findByProjectId,
  addProject,
};

function findProject() {
  return db("projects");
}

function findByProjectId(id) {
  return db("projects").where({ id }).first();
}

function addProject(project) {
  return db("projects")
    .insert(project)
    .then(([id]) => {
      findByProjectId(id);
    });
}
