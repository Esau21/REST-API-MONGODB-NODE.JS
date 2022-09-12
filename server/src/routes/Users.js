const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');


router.get('/usuarios', UserController.Findallusers);
router.get('/usuarios/:id', UserController.FindById);
router.post('/usuariosagregar', UserController.AgregarUsuario);
router.put('/actualizar/:id', UserController.Updateusuarios);
router.delete('/delete/:id', UserController.DeleteUsuarios);






module.exports = router;