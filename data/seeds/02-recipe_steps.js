exports.seed = function (knex, Promise) {
    return knex('recipe_steps').insert([
        {step_text: "mix eggs in a bowl", step_number: 1, recipe_id: 1},
        {step_text: "season with salt and pepper", step_number: 2, recipe_id: 1},
        {step_text: "melt butter in pan", step_number: 3, recipe_id: 1},
        {step_text: "pour well-mixed eggs into the pan", step_number: 4, recipe_id: 1},
        {step_text: "mix eggs as they cook until solid", step_number: 5, recipe_id: 1},
        {step_text: "empty 1 can of tuna into a bowl", step_number: 1, recipe_id: 2},
        {step_text: "add: salt, pepper, mayonnaise, relish, and siracha", step_number: 2, recipe_id: 2},
        {step_text: "mix well and serve with crackers", step_number: 3, recipe_id: 2},
    ]);
};
