const mongoose = require("mongoose");

const buildingSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, `Merci d'insérer le nom du bâtiment`]
        },
        address: {
            type: String,
            required: [true, `Merci d'indiquer l'adresse du bâtiment`]
        },
        latitude: {
            type: Number,
            required: [true, `Merci d'indiquer la latitude du bâtiment`]
        },
        longitude: {
            type: Number,
            required: [true, `Merci d'indiquer la longitude du bâtiment`]
        },
        URLPhoto: {
            type: String,
            required:[true, `Une photo est nécessaire pour illustrer le bâtiment`]
        },
        url: {
            type: String,
        },
    },
    {
        timestamps: true
    }
);

const Building = mongoose.model(`Building`, buildingSchema);

module.exports = Building;