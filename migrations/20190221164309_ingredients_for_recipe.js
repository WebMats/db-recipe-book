exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients_for_recipe', function (tbl) {
        tbl
            .increments()
            .notNullable();
        tbl
            .float('quantity', 2)
            .notNullable();
        tbl
            .integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id').inTable('recipes')
            .onDelete('CASCADE').onUpdate('CASCADE');
        tbl
            .integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id').inTable('ingredients')
            .onDelete('CASCADE').onUpdate('CASCADE');
    })
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('ingredients_for_recipe');
  };
