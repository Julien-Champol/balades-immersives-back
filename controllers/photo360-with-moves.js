const photo360Repository = require('../repositories/photo360')
const moveRepository = require('../repositories/move')

exports.getPhoto360sWithMoves = (req, res) => {
    photo360Repository.getPhoto360s()
        .then(photo360s => {
            const photoIds = photo360s.map(photo => photo._id);
            moveRepository.getMovesByPhotosId(photoIds)
                .then(moves => {
                    console.log(moves)
                    const photos360WithMoves = photo360s.map(photo => {
                        const photoData = photo.toObject();
                        photoData.deplacement = moves.filter(move => {
                            return move.photo360_id.toString() === photoData._id.toString();
                        });
                        return photoData;
                    });
                    res.status(200).json(photos360WithMoves)
                }).catch(error => res.status(500).send(error));


        }).catch(error => res.status(500).send(error));
};

exports.getPhoto360sByBuildingIdWithMoves = (req, res) => {
    const {id} = req.params;

    photo360Repository.getPhoto360ByBuildingId(id)
        .then(photo360s => {
            const photoIds = photo360s.map(photo => photo._id);
            moveRepository.getMovesByPhotosId(photoIds)
                .then(moves => {
                    console.log(moves)
                    const photos360WithMoves = photo360s.map(photo => {
                        const photoData = photo.toObject();
                        photoData.deplacement = moves.filter(move => {
                            return move.photo360_id.toString() === photoData._id.toString();
                        });
                        return photoData;
                    });
                    res.status(200).json(photos360WithMoves)
                }).catch(error => res.status(500).send(error));


        }).catch(error => res.status(500).send(error));
};