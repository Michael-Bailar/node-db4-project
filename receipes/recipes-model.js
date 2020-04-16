const db = require('../data/db-config.js')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db("recipes")
}

function getShoppingList(id) {
    return db("ingredients")
        .join("recipe_ingredients", "ingredients.id", "recipe_ingredients.ingredient_id")
        .join("recipes", "recipe_ingredients.recipe_id", "recipes.id" )
        .where({"recipe_ingredients.recipe_id": `${id}`})
        .select("ingredients.ingredient_name", "recipe_ingredients.ingredient_amount")
}

function getInstructions(id) {
    return db("steps")
        .join("recipes", "steps.recipe_id", "recipes.id")
        .where({"steps.recipe_id": `${id}`})
        .select("steps.step_number", "steps.step_text")
        .orderBy("steps.step_number")
}
