
exports.up = function(knex) {
    return (
  knex.schema.createTable('projects', project => {
    project.increments('project_id');
    project.string('project_name', 128).notNullable();
    project.string('project_description', 255);
    project.boolean('project_completed').defaultTo(false);
  })
  .createTable('resources', resource => {
    resource.increments('resource_id');
    resource.string('resource_name').notNullable().unique();
    resource.string('resource_description', 255);
  })
  .createTable('tasks', task => {
      task.increments('task_id');
      task.string('task_description', 255).notNullable();
      task.string('task_notes', 255);
      task.boolean('task_completed').defaultTo(false);
      task.integer('project_id')
      .references('projects.project_id')
      .notNullable()
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  })
  .createTable('project_resources', tbl => {
      tbl.increments();
      tbl.integer('project_id')
      .references('projects.project_id')
      .notNullable()
      .unique()
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
      tbl.integer('resource_id')
      .references('resources.resource_id')
      .notNullable()
      .unique()
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  })
    )
};

exports.down = function(knex) {
    return (
        knex.schema
        .dropTableIfExists('project_resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTable('projects')
 
  

    );
};
