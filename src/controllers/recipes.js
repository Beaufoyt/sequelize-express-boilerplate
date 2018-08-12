import { recipes } from '../models';

module.exports = {
    fetchRecipes: (req, res) => {
        recipes.findAll().then(recipes => {
            res.send(recipes);
        });
    },
};
