
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { name: 'dry yeast by ounce'}, 
        { name: 'water by cup'},
        { name: 'sugar by teaspoon'}, 
        { name: 'flour by cup'},
        { name: 'tomato puree by cup'}, 
        { name: 'fresh mozzarella by ounce'},
        { name: 'onion by cup'}, 
        { name: 'dried oregano by teaspoon'},
        { name: 'parmesan cheese by cup'},
        { name: 'fresh garlic cloves'},
        { name: 'parmigiano-reggiano cheese by tablespoon'}, 
        { name: 'freshly ground chuck by pound'},
        { name: 'salt by teaspoon'}, 
        { name: 'American cheese'},
        { name: 'burger buns'}, 
        { name: 'sliced tomatoes'},
        { name: 'fresh lettuce leaves'}, 
        { name: 'mushrooms by ounces'},
        { name: 'carrot'}, 
        { name: 'broccoli florets by cup'},
        { name: 'ground black pepper by teaspoon'}, 
        { name: 'black beans by can'},
        { name: 'spinach leaves by cup'},
        { name: 'eggs'},
        { name: 'cornstarch by tablespoon'},
        { name: 'ground cinnamon by teaspoon'},
        { name: 'fresh blueberries by cup'},
        { name: 'butter by tablespoon'},
        { name: 'pie crust'},
        { name: 'Granny Smith apples'},
        { name: 'key lime juice by cup'},
        { name: 'grated lime zest by tablespoon'},
        { name: 'key lime juice by cup'},
      ]);
    });
};
