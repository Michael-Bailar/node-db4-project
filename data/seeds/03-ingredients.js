exports.seed = function (knex, Promise) {
    return knex('ingredients').insert([
        {ingredient_name: "egg"},
        {ingredient_name: "salt"},
        {ingredient_name: "pepper"},
        {ingredient_name: "egg"},
        {ingredient_name: "egg"},
        {ingredient_name: "egg"},
        {ingredient_name: "egg"},
        {ingredient_name: "egg"},
        {ingredient_name: "egg"},
        {ingredient_name: "egg"},
    ]);
};