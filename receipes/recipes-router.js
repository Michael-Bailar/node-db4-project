const express = require('express')

const db = require('../data/db-config.js')
const Recipes = require('./recipes-model.js')

const router = express.Router()

router.get('/', (req, res) => {
    Recipes.getRecipes()
        .then(recipes => {
            res.status(200).json(recipes)
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to get recipes" });
          });
})

router.get("/:id/shoppinglist", (req, res) => {
    const { id } = req.params

    Recipes.getShoppingList(id)
    .then(list => {
        if (list) {
          res.json(list);
        } else {
          res.status(404).json({ message: 'Could not find list with the given id.' })
        }
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to get list', error: err });
      });
})

router.get("/:id/instructions", (req, res) => {
    const { id } = req.params

    Recipes.getInstructions(id)
    .then(list => {
        if (list) {
          res.json(list);
        } else {
          res.status(404).json({ message: 'Could not find list with the given id.' })
        }
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to get list', error: err });
      });
})


module.exports = router;
