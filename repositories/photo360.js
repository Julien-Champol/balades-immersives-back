const Photo360 = require(`../models/photo360`);

exports.getPhoto360s = () => Photo360.find({});

exports.getPhoto360ByBuildingId = (buildingId) => Photo360.find({ building_id: buildingId })

exports.getPhoto360ById = (id) => Photo360.findById(id);

exports.createPhoto360 = (Photo360Data) => Photo360.create(Photo360Data);

exports.updatePhoto360 = (id, Photo360Data) => Photo360.findByIdAndUpdate(id, Photo360Data, { new: true});

exports.deletePhoto360 = (id) => Photo360.findByIdAndDelete(id);