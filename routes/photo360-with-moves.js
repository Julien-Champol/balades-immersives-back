const express = require(`express`);
const router = express.Router();
const photo360WithMoveController = require(`../controllers/photo360-with-moves`);

router.get('/', photo360WithMoveController.getPhoto360sWithMoves)
router.get('/:id',photo360WithMoveController.getPhoto360sByBuildingIdWithMoves)

module.exports = router;