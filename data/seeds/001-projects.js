exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        { name: "Node", description: "Learn to make dbs", completed: true },
        {
          name: "React",
          description: "Learn to make dynamic sites",
          completed: true,
        },
        { name: "HTML", completed: false },
      ]);
    });
};
