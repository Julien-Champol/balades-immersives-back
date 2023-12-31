const express = require(`express`);
const router = express.Router();
const userController = require(`../controllers/user`);

router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);
router.post('/connexion', userController.getUserConnexion);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;