const InterestPoint = require(`../models/interestPoint`);

exports.getInterestPoints = () => InterestPoint.find({});

exports.getInterestPointById = (id) => InterestPoint.findById(id);

exports.getInterestsPointsByPhotosId = (photosId) => InterestPoint.find({ photo360_id: { $in: photosId } })

exports.createInterestPoint = (InterestPointData) => InterestPoint.create(InterestPointData);

exports.updateInterestPoint = (id, InterestPointData) => InterestPoint.findByIdAndUpdate(id, InterestPointData, { new: true});

exports.deleteInterestPoint = (id) => InterestPoint.findByIdAndDelete(id);