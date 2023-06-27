const express = require(`express`);
const router = express.Router();
const interestPointController = require(`../controllers/interestPoint`);

router.get('/', interestPointController.getInterestPoints);
router.get('/:id', interestPointController.getInterestPoint);
router.post('/', interestPointController.createInterestPoint);
router.put('/:id', interestPointController.updateInterestPoint);
router.delete('/:id', interestPointController.deleteInterestPoint);

module.exports = router;