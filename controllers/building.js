const buildingRepository = require('../repositories/building.js');

exports.getBuildings = (req, res) => {
    buildingRepository.getBuildings()
        .then(buildings => res.status(200).json(buildings))
        .catch(error => res.status(500).send(error));
};

exports.getBuilding = (req, res) => {
    const {id} = req.params;
    buildingRepository.getBuildingById(id)
        .then(building => res.status(200).json(building))
        .catch(error => res.status(500).send(error));
};

exports.createBuilding = (req, res) => {
    const buildingData = req.body;
    buildingRepository.createBuilding(buildingData)
        .then(building => res.status(201).json(building))
        .catch(error => res.status(500).send(error));
};

exports.updateBuilding = (req, res) => {
    const {id} = req.params;
    const buildingData = req.body;
    buildingRepository.updateBuilding(id, buildingData)
        .then(building => res.status(200).json(building))
        .catch(error => res.status(500).send(error));
};

exports.deletebuilding = (req, res) => {
    const {id} = req.params;
    buildingRepository.deleteBuilding(id)
        .then(building => res.status(200).json(building))
        .catch(error => res.status(500).send(error));
};