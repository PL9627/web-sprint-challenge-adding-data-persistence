exports.seed = async function (knex) {
  await knex.("projects_resources").insert([{ project_ID: 1, resources_ID: 1 }]);
};
