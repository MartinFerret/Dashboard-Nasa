const planet = require('../../models/planets.model');

function getAllPlanets (req, res) {
    return res.status(200).json(planet);
}

module.exports = {
    getAllPlanets
};