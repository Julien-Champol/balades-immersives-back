const photo360Repository = require(`../repositories/photo360`);

exports.getPhoto360s = (req, res) => {
    photo360Repository.getPhoto360s()
        .then(photo360s => res.status(200).json(photo360s))
        .catch(error => res.status(500).send(error));
};

exports.getPhoto360 = (req, res) => {
    const {id} = req.params;
    photo360Repository.getPhoto360ById(id)
        .then(photo360 => res.status(200).json(photo360))
        .catch(error => res.status(500).send(error));
};

exports.createPhoto360 = (req, res) => {
    const photo360Data = req.body;
    photo360Repository.createPhoto360(photo360Data)
        .then(photo360 => res.status(201).json(photo360))
        .catch(error => res.status(500).send(error));
};

exports.updatePhoto360 = (req, res) => {
    const {id} = req.params;
    const photo360Data = req.body;
    photo360Repository.updatePhoto360(id, photo360Data)
        .then(photo360 => res.status(200).json(photo360))
        .catch(error => res.status(500).send(error));
};

exports.deletePhoto360 = (req, res) => {
    const {id} = req.params;
    photo360Repository.deletePhoto360(id)
        .then(photo360 => res.status(200).json(photo360))
        .catch(error => res.status(500).send(error));
};