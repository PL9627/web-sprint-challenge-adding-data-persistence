exports.seed = async function (knex) {
  await knex("tasks").insert([
    {
      description: "Shop for pc parts",
      notes: "Go get 'em",
      project_ID: 1,
      completed: false,
    },
  ]);
};