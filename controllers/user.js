const userRepository = require(`../repositories/user`);
const {updateUser} = require("../repositories/user");

exports.getUsers = (req, res) => {
    userRepository.getUsers()
        .then(users => res.status(200).json(users))
        .catch(error => res.status(500).send(error));
};

exports.getUser = (req, res) => {
    const {id} = req.params;
    userRepository.getUserById(id)
        .then(user => res.status(200).json(user))
        .catch(error => res.status(500).send(error));
};

exports.createUser = (req, res) => {
    const userData = req.body;
    userRepository.createUser(userData)
        .then(user => res.status(201).json(user))
        .catch(error => res.status(500).send(error));
};

exports.updateUser = (req, res) => {
    const {id} = req.params;
    const userData = req.body;
    userRepository.updateUser(id, userData)
        .then(user => res.status(200).json(user))
        .catch(error => res.status(500).send(error));
};

exports.deleteUser = (req, res) => {
    const {id} = req.params;
    userRepository.deleteUser(id)
        .then(user => res.status(200).json(user))
        .catch(error => res.status(500).send(error));
};