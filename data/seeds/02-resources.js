exports.seed = async function(knex) {
  await knex("resources").insert([
    {name: "pc parts", description: "parts for a gaming pc"}
  ])
};
