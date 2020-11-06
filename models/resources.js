const db = require("../data/db-config");

module.exports = {
  getResources,
  getResourcesById,
  addResources,
};

function getResources() {
  return db("resources");
}

function getResourcesById(id) {
  return db("resources").where({ id }).first();
}

function addResources(data) {
  return db("resources").insert(data).then((id) => {
    return getResourcesById(id);
  });
}
