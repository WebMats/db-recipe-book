
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { name: 'plain', dish_id: 1},
        { name: 'plain chicago-style', dish_id: 1},
        { name: 'margherita', dish_id: 1},
        { name: 'cheeseburger', dish_id: 2},
        { name: 'bacon cheeseburger', dish_id: 2},
        { name: 'veggie burger', dish_id: 2},
        { name: 'blueberry', dish_id: 3},
        { name: 'apple', dish_id: 3},
        { name: 'key-lime pie', dish_id: 3},
      ]);
    });
};
