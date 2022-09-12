const Productos = require('../models/ProductsModels');

const Findallproductos = (req, res) => {
    Productos.find((err, prdt) => {
        if(!err) {
            res.status(200).json(prdt);
        } else {
            res.status(500).send(err.message);
        }
    });
}

const FindById = (req, res) => {
    Productos.findById(req.params.id,(err, pdts) => {
        if(!err) {
            res.status(200).json(pdts);
        } else {
            res.status(500).send(err.message)
        }
    });
}

const AgregarProductos = async (req, res) => {
    console.log(req.body);
    const productosadd = new Productos({
        name: req.body.name,
        price: req.body.price,
        fechaEntrada: req.body.fechaEntrada,
        fechaVencimiento: req.body.fechaVencimiento,
    });

    try {
        const dataProductsSave = await productosadd.save();
        res.status(200).json(dataProductsSave);
    } catch (error) {
        res.status(500).send(error.message);
    }

}

const ActualizarProductos = async (req, res) => {
    console.log(req.body);
    try {
        const id = req.params.id;
        const dataProducts = req.body;
        const options = { options: true };
        const results = await Productos.findByIdAndUpdate(
            id, dataProducts, options
        );
        res.status(200).json(results)
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const DeleteProducts = async (req, res) => {
    try {
        const id = req.params.id;
        const deleteproduct = await Productos.findByIdAndDelete(id);
        res.status(200).json(deleteproduct);
    } catch (error) {
        res.status(500).send(error.message);
    }
}





module.exports = { Findallproductos, FindById, AgregarProductos, ActualizarProductos, DeleteProducts };