exports.up = function(knex, Promise) {
  return knex.schema.createTable('scrapbook', function(table) {
    table.increments()
    table.string('title', 255).notNullable();
    table.string('description', 255);
    table.string('item_image', 255);
    table.timestamps(true, true)
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('scrapbook');
};
