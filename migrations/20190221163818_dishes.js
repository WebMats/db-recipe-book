exports.up = function(knex, Promise) {
    return knex.schema.createTable('dishes', function (tbl) {
      tbl
          .increments()
          .notNullable();
      tbl
          .string('name', 128)
          .notNullable()
          .unique();
    })
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('dishes');
  };

