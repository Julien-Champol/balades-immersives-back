const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const photo360Schema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Merci d'indiquer le titre de la photo!"]
        },
        description: {
            type: String,
            required: [true, "Merci d'indiquer une description de l'image"]
        },
        URLPhoto360: {
            type: String,
            required: [true, "Merci d'indiquer l' url de la photo !"]
        },
        building_id: {
            type: Schema.Types.ObjectId, ref: 'Building',
            required: [true, "Merci d'indiquer le nom du bâtiment!"]
        },
    }
);

const Photo360 = mongoose.model(`Photo360`, photo360Schema);

module.exports = Photo360;
