const db = require('./dbConfig.js');

const getDishes = () => {
    return db('dishes');
}
const getDish = async (id) => {
    const dish = await db('dishes').where({id: id}).first();
    const recipeArray = await db('recipes').where({dish_id: id});
    return {
        ...dish,
        recipeArray
    }
}

const getRecipes = () => {
    return db('recipes')
                .join('dishes', {'dishes.id':'recipes.dish_id'})
                .select('recipes.id','recipes.name', 'dishes.name as dish');
}

const getRecipe = async (id) => {
    const recipe =  await db('recipes')
                .where({'recipes.id': id}).first()
                .join('dishes', {'dishes.id':'recipes.dish_id'})
                .select('recipes.id','recipes.name', 'dishes.name as dish');
    const ingredients = await db('ingredients_for_recipe')
                                .where({'recipe_id': id})
                                .join('ingredients', {'ingredients.id' : 'ingredients_for_recipe.ingredient_id'})
                                .select('ingredients.name', 'ingredients_for_recipe.quantity')
    return {
        ...recipe,
        ingredients
    }
}

const addDish = (dish) => {
    return db('dishes').insert(dish);
}


module.exports = {
    getDishes,
    getDish,
    getRecipes,
    getRecipe,
    addDish
}