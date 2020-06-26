exports.up = async function(knex) {
  await knex.schema.createTable("projects", (table) => {
      table.increments("Id")
      table.text("name").notNull().unique()
      table.text("description")
      table.boolean("completed").notNull().defaultTo("false")
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("projects")
};