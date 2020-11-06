exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          description: "Learn to use VSCode",
          notes: "Google it",
          project_id: 1,
          completed: false,
        },
        {
          description: "Learn to use SQLite",
          notes: "Go to lecture",
          project_id: 2,
          completed: false,
        },
      ]);
    });
};
