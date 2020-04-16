
exports.seed = function (knex, Promise) {
    return knex('recipes').insert([
        { recipe_name: 'Scrambled Eggs', recipe_author: "Michael Bailar" },
        { recipe_name: 'Tuna Salad' }
    ]);
};
