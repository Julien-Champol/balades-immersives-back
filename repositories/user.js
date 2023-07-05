const User = require(`../models/user`);

exports.getUsers = () => User.find({});

exports.getUserById = (id) => User.findById(id);

exports.createUser = async (userData) => {
    const isEmailTaken = await User.exists({email: {$in: userData.email}});
    if (isEmailTaken) {
        throw new Error('L\'adresse e-mail est déjà utilisée.');
    } else {
        await User.create(userData);
    }
};

exports.getUserConnexion = (email) => User.find({email: {$in: email}});


exports.updateUser = (id, userData) => User.findByIdAndUpdate(id, userData, {new: true});

exports.deleteUser = (id) => User.findByIdAndDelete(id);
