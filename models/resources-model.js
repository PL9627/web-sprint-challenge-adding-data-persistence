const db = require("../data/config");

module.exports = {
  findResources,
  findByResourcesId,
  addResources,
};

function findResources() {
  return db("resources");
}

function findByResourcesId(id) {
  return db("resources").where({ id }).first();
}

function addResources(resource) {
  return db("resources")
    .insert(resource)
    .then(([id]) => {
      findByResourcesId(id);
    });
}
