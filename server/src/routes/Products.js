const express = require('express');
const router = express.Router();
const ProductsController = require('../controllers/ProductsController');

router.get('/productos', ProductsController.Findallproductos);
router.get('/productos/:id', ProductsController.FindById);
router.post('/productosagregar', ProductsController.AgregarProductos);
router.put('/productosupdate/:id', ProductsController.ActualizarProductos);
router.delete('/productosdelete/:id', ProductsController.DeleteProducts);







module.exports = router;