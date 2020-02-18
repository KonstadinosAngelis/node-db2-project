
exports.up = function(knex) {
  return knex.schema.createTable('car-dealer', tbl => {
    tbl.increments();
    tbl.integer('VIN').unique().notNullable();
    tbl.text('make').notNullable();
    tbl.text('model').notNullable();
    tbl.integer('mileage').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('car-dealer');
};
