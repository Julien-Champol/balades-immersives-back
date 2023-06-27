const Building = require(`../models/building`);

exports.getBuildings = () => Building.find({});

exports.getBuildingById = (id) => Building.findById(id);

exports.createBuilding = (buildingData) => Building.create(buildingData);

exports.updateBuilding = (id, buildingData) => Building.findByIdAndUpdate(id, buildingData, { new: true});

exports.deleteBuilding = (id) => Building.findByIdAndDelete(id);