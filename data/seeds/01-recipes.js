
exports.seed = function (knex, Promise) {
    return knex('zoos').insert([
        { recipe_name: 'Omelette', recipe_author: "Michael Bailar" },
        { recipe_name: 'Tuna Salad' },
        { recipe_name: 'Hard Boiled Eggs', recipe_author: "Test Bailar" }
    ]);
};
