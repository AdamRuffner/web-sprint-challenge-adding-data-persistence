exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("resources").insert([
        { name: "VSCode", description: "Code Editor" },
        { name: "SQLite", description: "DB" },
      ]);
    });
};
