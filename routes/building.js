const express = require(`express`);
const router = express.Router();
const buildingController = require(`../controllers/building`);

router.get('/', buildingController.getBuildings);
router.get('/:id', buildingController.getBuilding);
router.post('/', buildingController.createBuilding);
router.put('/:id', buildingController.updateBuilding);
router.delete('/:id', buildingController.deletebuilding);

module.exports = router;