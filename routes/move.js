const express = require(`express`);
const router = express.Router();
const moveController = require(`../controllers/move`);

router.get('/', moveController.getMoves);
router.get('/:id', moveController.getMove);
router.post('/', moveController.createMove);
router.put('/:id', moveController.updateMove);
router.delete('/:id', moveController.deleteMove);

module.exports = router;