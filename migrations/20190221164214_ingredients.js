exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', function (tbl) {
      tbl
          .increments()
          .notNullable();
      tbl
          .string('name', 128)
          .notNullable()
    })
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('ingredients');
  };

