const Move = require(`../models/move`);

exports.getMoves = () => Move.find({});

exports.getMoveById = (id) => Move.findById(id);

exports.createMove = (MoveData) => Move.create(MoveData);

exports.updateMove = (id, MoveData) => Move.findByIdAndUpdate(id, MoveData, { new: true});

exports.deleteMove = (id) => Move.findByIdAndDelete(id);