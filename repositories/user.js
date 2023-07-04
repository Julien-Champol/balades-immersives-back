const User = require(`../models/user`);

exports.getUsers = () => User.find({});

exports.getUserById = (id) => User.findById(id);

exports.getUserConnexion = (email,password) => User.find({ email: { $in: email }, password: { $in: password } });


exports.createUser = (userData) => User.create(userData);

exports.updateUser = (id, userData) => User.findByIdAndUpdate(id, userData, { new: true});

exports.deleteUser = (id) => User.findByIdAndDelete(id);
