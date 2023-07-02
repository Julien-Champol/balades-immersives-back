const photo360Repository = require('../repositories/photo360')
const moveRepository = require('../repositories/move')
const interestPointRepository = require(`../repositories/interestPoint`);

exports.getPhoto360sWithMoves = (req, res) => {
    photo360Repository.getPhoto360s()
        .then(photo360s => {
            const photoIds = photo360s.map(photo => photo._id);
            moveRepository.getMovesByPhotosId(photoIds)
                .then(moves => {
                    console.log(moves)
                    const photos360WithMoves = photo360s.map(photo => {
                        const photoData = photo.toObject();
                        photoData.deplacements = moves.filter(move => {
                            return move.photo360_id.toString() === photoData._id.toString();
                        });
                        return photoData;
                    });
                    res.status(200).json(photos360WithMoves)
                }).catch(error => res.status(500).send(error));


        }).catch(error => res.status(500).send(error));
};

exports.getPhoto360sByBuildingIdWithMoves = async (req, res) => {
    try {
        const { id } = req.params;

        const photo360s = await photo360Repository.getPhoto360ByBuildingId(id);
        // console.log(photo360s)
        const photoIds = photo360s.map(photo => photo._id);
        const moves = await moveRepository.getMovesByPhotosId(photoIds);

        const photos360WithMoves = photo360s.map(photo => {
            const photoData = photo.toObject();
            photoData.deplacements = moves.filter(move => move.photo360_id.toString() === photoData._id.toString());
            return photoData;
        });

        // console.log(photos360WithMoves)
        //
        // const interestsPoints = await interestPointRepository.getInterestsPointsByPhotosId(photoIds);
        // console.log(interestsPoints)
        // const photos360WithMovesAndInterestsPoints = photos360WithMoves.map(photo => {
        //     const photoData = photo.toObject();
        //     photoData.interestsPoints = interestsPoints.filter(interestPoint => interestPoint.photo360_id.toString() === photoData._id.toString());
        //     return photoData;
        // });
        // console.log(photos360WithMovesAndInterestsPoints)
        res.status(200).json(photos360WithMoves);
    } catch (error) {
        res.status(500).send(error);
    }
};