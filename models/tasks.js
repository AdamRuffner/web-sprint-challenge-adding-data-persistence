const db = require("../data/db-config");

module.exports = {
    getTasks,
    getTasksById,
    addTasks
};

function getTasks() {
    return db('tasks')
}

function getTasksById(id) {
    return db('tasks').where({ id }).first()
}

function addTasks(data) {
    return db("tasks").insert(data).then((id) => {
      return getTasksById(id);
    });
  }