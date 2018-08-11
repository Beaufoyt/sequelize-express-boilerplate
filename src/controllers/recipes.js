import { models } from '../db.js';

module.exports = {
    fetchRecipes: (req, res) => {
        models.recipes.findAll().then(recipes => {
            res.send(recipes);
        });
    },
};
