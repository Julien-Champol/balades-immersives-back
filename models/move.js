const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const moveSchema = new mongoose.Schema(
    {
        photo360_id: {
            type: Schema.Types.ObjectId, ref: 'Photo360',
            required: [true, "Merci d'indiquer le nom de la photo"]
        },
        nextPhoto360: {
            type: Schema.Types.ObjectId, ref: 'Photo360',
            required: [true, "Merci d'indiquer la prochaine photo du déplacement"]
        },
        coordinates: {
            type: [
                {
                    x: Number,
                    y: Number,
                    z: Number
                }
            ],
        }
    }
);

const Move = mongoose.model('Move', moveSchema);

module.exports = Move;