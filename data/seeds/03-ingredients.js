exports.seed = function (knex, Promise) {
    return knex('ingredients').insert([
        {ingredient_name: "egg"},
        {ingredient_name: "dash/es of salt"},
        {ingredient_name: "dash/es of pepper"},
        {ingredient_name: "tablespoon/s of butter"},
        {ingredient_name: "can/s of tuna"},
        {ingredient_name: "tablespoon/s of mayonnaise"},
        {ingredient_name: "teaspon/s of siracha"},
        {ingredient_name: "tablespoon/s of dill relish"}
    ]);
};