
exports.up = function(knex) {
  return(
      knex.schema
        .createTable("recipes", tbl => {
            tbl.string("id", 255).primary()
            tbl.string("recipe_name", 255).notNullable().unique()
            tbl.string("recipe_author", 255)
        })
        .createTable("steps", tbl => {
            tbl.string("id", 255).primary()
            tbl.string("step_text", 255).notNullable()
            tbl.string("step_number", 255).notNullable()
            tbl
                .string("recipe_id", 255)
                .notNullable()
                .references("id")
                .inTable("recipes")
                .onDelete("RESTRICT")
                .onUpdate("CASCADE")
        })
        .createTable("ingredients", tbl => {
            tbl.string("id", 255).primary()
            tbl.string("ingredient_name", 255).notNullable().unique()
        })
        .createTable("recipe_ingredients", tbl => {
            tbl.string("id", 255).primary()
            tbl.string("ingredient_amount", 255).notNullable()
            tbl
                .string("receipe_id", 255)
                .notNullable()
                .references("id")
                .inTable("recipes")
                .onDelete("RESTRICT")
                .onUpdate("CASCADE")
            tbl
                .string("ingredient_id", 255)
                .notNullable()
                .references("id")
                .inTable("ingredients")
                .onDelete("RESTRICT")
                .onUpdate("CASCADE")
        })
  )
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("recipe_ingredients")
        .dropTableIfExists("ingredients")
        .dropTableIfExists("steps")
        .dropTableIfExists("recipes")
};
