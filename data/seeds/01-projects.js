exports.seed = async function (knex) {
  await knex("projects").insert([
    {
      name: "Build a gaming pc",
      description: "Buy parts and get started",
      completed: false,
    },
  ]);
};
