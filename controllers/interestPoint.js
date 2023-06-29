const interestPointRepository = require(`../repositories/interestPoint`);

exports.getInterestPoints = (req, res) => {
    interestPointRepository.getInterestPoints()
        .then(interestPoints => res.status(200).json(interestPoints))
        .catch(error => res.status(500).send(error));
};

exports.getInterestPoint = (req, res) => {
    const {id} = req.params;
    interestPointRepository.getInterestPointById(id)
        .then(interestPoint => res.status(200).json(interestPoint))
        .catch(error => res.status(500).send(error));
};

exports.createInterestPoint = (req, res) => {
    const interestPointData = req.body;
    interestPointRepository.createInterestPoint(interestPointData)
        .then(interestPoint => res.status(201).json(interestPoint))
        .catch(error => res.status(500).send(error));
};

exports.updateInterestPoint = (req, res) => {
    const {id} = req.params;
    const interestPointData = req.body;
    interestPointRepository.updateInterestPoint(id, interestPointData)
        .then(interestPoint => res.status(200).json(interestPoint))
        .catch(error => res.status(500).send(error));
};

exports.deleteInterestPoint = (req, res) => {
    const {id} = req.params;
    interestPointRepository.deleteInterestPoint(id)
        .then(interestPoint => res.status(200).json(interestPoint))
        .catch(error => res.status(500).send(error));
};