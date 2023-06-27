const moveRepository = require(`../repositories/move`);

exports.getMoves = (req, res) => {
    moveRepository.getMoves()
        .then(moves => res.status(200).json(moves))
        .catch(error => res.status(500).send(error));
};

exports.getMove = (req, res) => {
    const {id} = req.params;
    moveRepository.getMoveById(id)
        .then(move => res.status(200).json(move))
        .catch(error => res.status(500).send(error));
};

exports.createMove = (req, res) => {
    const moveData = req.body;
    moveRepository.createMove(moveData)
        .then(move => res.status(201).json(move))
        .catch(error => res.status(500).send(error));
};

exports.updateMove = (req, res) => {
    const {id} = req.params;
    const moveData = req.body;
    moveRepository.updateMove(id, moveData)
        .then(move => res.status(200).json(move))
        .catch(error => res.status(500).send(error));
};

exports.deleteMove = (req, res) => {
    const {id} = req.params;
    moveRepository.deleteMove(id)
        .then(move => res.status(200).json(move))
        .catch(error => res.status(500).send(error));
};