const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const interestPoint = new mongoose.Schema(
    {
        photo360_id: {
            type: Schema.Types.ObjectId, ref: 'Photo360',
            required: [true, "Merci d'indiquer le nom de la photo"]
        },
        coordinates: {
            type: [
                {
                    x: Number,
                    y: Number,
                    z: Number
                }
            ],
        },
        name: {
            type: String,
            required: [true, `Merci d'insérer votre nom`]
        },
        description: {
            type: String,
            required: [true, `Merci d'insérer la description associée`]
        },
        typePointInteret: {
            type: String,
            required: [true, `Merci d'insérer le type de point d'intérêt`]
        },
    }
);

const InterestPoint = mongoose.model('InterestPoint', interestPoint);

module.exports = InterestPoint;