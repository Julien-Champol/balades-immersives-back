const InterestPoint = require(`../models/interestPoint`);

exports.getInterestPoint = () => InterestPoint.find({});

exports.getInterestPointById = (id) => InterestPoint.findById(id);

exports.createInterestPoint = (InterestPointData) => InterestPoint.create(InterestPointData);

exports.updateInterestPoint = (id, InterestPointData) => InterestPoint.findByIdAndUpdate(id, InterestPointData, { new: true});

exports.deleteInterestPoint = (id) => InterestPoint.findByIdAndDelete(id);