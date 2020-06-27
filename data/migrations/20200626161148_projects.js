exports.up = async function (knex) {
  await knex.schema.createTable("projects", (table) => {
    table.increments("Id");
    table.text("name").notNull().unique();
    table.text("description");
    table.boolean("completed").notNull().defaultTo("false");
  });

  await knex.schema.createTable("resources", (table) => {
    table.increments("Id");
    table.text("name").notNull().unique();
    table.text("description");
  });

  await knex.schema.createTable("tasks", (table) => {
    table.increments("Id");
    table.text("description").notNull();
    table.text("notes");
    table
      .integer("project_ID")
      .references("Id")
      .inTable("projects")
      .onDelete("SET NULL")
      .onUpdate("CASCADE");
    table.boolean("completed").notNull().defaultTo("false");
  });

  await knex.schema.createTable("projects_resources", (table) => {
    table
      .integer("project_ID")
      .references("Id")
      .inTable("projects")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table
      .integer("resources_ID")
      .references("Id")
      .inTable("resources")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("projects_resources");
  await knex.schema.dropTableIfExists("tasks");
  await knex.schema.dropTableIfExists("resources");
  await knex.schema.dropTableIfExists("projects");
};
