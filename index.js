const express = require('express');
const helmet = require('helmet');
const app = express();

const recipesDB = require('./data/recipeBk');


app.use(helmet());
app.use(express.json());

app.get('/dishes', async (req, res, next) => {
    try {
        const dishes = await recipesDB.getDishes();
        res.status(200).json(dishes)
    } catch (err) {
        console.log(err)
        res.status(500).json({errorMessage: "Could not fetch the dishes."})
    }
})
app.get('/dishes/:id', async (req, res, next) => {
    try {
        const dish = await recipesDB.getDish(req.params.id);
        if (!dish) {
            res.status(404).json({errorMessage: "The dish with that id does not exist."})
        } else {
            res.status(200).json(dish);
        }
    } catch (err) {
        console.log(err)
        res.status({errorMessage: "Could not fetch at dish"})
    }
})
app.get('/recipes', async (req, res, next) => {
    try {
        const recipes = await recipesDB.getRecipes();
        res.status(200).json(recipes)
    } catch (err) {
        console.log(err)
        res.status(500).json({errorMessage: "Could not fetch the recipes."})
    }
})
app.get('/recipes/:id', async (req, res, next) => {
    try {
        const recipe = await recipesDB.getRecipe(req.params.id);
        if (!recipe.name) {
            res.status(404).json({errorMessage: "Could not find the recipe for that id."})
        } else {
            res.status(200).json(recipe);
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({errorMessage: "Could not fetch that recipe"})
    }
})
app.post( '/dishes' , async (req, res, next) => {
    const { name } = req.body;
    if (!name) {
        return res.status(404).json({errorMessage: "Please provide a name field for the new dish."})
    }
    try {
        const [id] = await recipesDB.addDish({name});
        
        res.status(201).json({id});
    } catch (err) {
        console.log(err)
        res.status(500).json({errorMessage: 'Could not add that dishs'})
    }
})




app.listen(4000, () => {console.log('Listening on port 4000...')})