const Move = require(`../models/move`);

exports.getMoves = () => Move.find({});

exports.getMoveById = (id) => Move.findById(id);

exports.getMovesByPhotosId = (photosId) => Move.find({ photo360_id: { $in: photosId } })

exports.createMove = (MoveData) => Move.create(MoveData);

exports.updateMove = (id, MoveData) => Move.findByIdAndUpdate(id, MoveData, { new: true});

exports.deleteMove = (id) => Move.findByIdAndDelete(id);