const db = require("../data/config");

module.exports = {
  findTasks,
  findByTaskId,
  addTask,
};

function findTasks() {
  return db("tasks")
    .leftJoin("projects", "projects.id", "tasks.project_ID")
    .select("tasks.id", "tasks.description", "tasks.notes", "tasks.completed");
}

function findByTaskId(id) {
  return db("tasks")
    .where("tasks.id", id)
    .leftJoin("projects", "projects.id", "tasks.project_ID")
    .first("tasks.description", "tasks.notes", "tasks.completed");
}

function addTask(task) {
  return db("tasks")
    .insert(task)
    .then(([id]) => {
      findByTaskId(id);
    });
}
