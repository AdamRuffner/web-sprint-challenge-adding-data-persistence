const db = require("../data/db-config");

module.exports = {
  getTasks,
  getTasksById,
  addTasks,
};

function getTasks() {
  return db("tasks as t")
    .join("projects as p", "t.project_id", "p.id")
    .select(
      "p.name as project_name",
      "p.description as project_description",
      "t.*"
    );
}

function getTasksById(id) {
  return db("tasks").where({ id }).first();
}

function addTasks(data) {
  return db("tasks")
    .insert(data)
    .then((id) => {
      return getTasksById(id);
    });
}
