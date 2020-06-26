exports.seed = async function (knex) {
  await "projects_resources".insert([{ project_ID: 1, resources_ID: 1 }]);
};
