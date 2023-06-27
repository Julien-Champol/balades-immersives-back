const express = require(`express`);
const router = express.Router();
const photo360Controller = require(`../controllers/photo360`);

router.get('/', photo360Controller.getPhoto360s);
router.get('/:id', photo360Controller.getPhoto360);
router.post('/', photo360Controller.createPhoto360);
router.put('/:id', photo360Controller.updatePhoto360);
router.delete('/:id', photo360Controller.deletePhoto360);

module.exports = router;