const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, `Merci d'insérer votre nom`]
        },
        email: {
            type: String,
            unique: true,
            required: [true, `Merci d'insérer un email valide`]
        },
        password: {
            type: String,
            required: [true, `Merci d'insérer un mot de passe valide`]
        },
    },
    {
        timestamps: true
    }
);

userSchema.statics.checkEmailUniqueness = async function (email) {
    const user = await this.findOne({email});
    return !!user;
};

const User = mongoose.model(`User`, userSchema);

module.exports = User;