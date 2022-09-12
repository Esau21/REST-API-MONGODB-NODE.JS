const Usuarios = require('../models/UserModels');



const Findallusers = (req, res) => {
    Usuarios.find((err, usuarios)=> {
        if(!err) {
            res.status(200).json(usuarios);
        } else {
            res.status(400).send({ message: err.message });
        }
    });
};

const FindById = async (req, res) => {
    Usuarios.findById(req.params.id,(err, usrs) => {
        if(!err) {
            res.status(200).json(usrs)
        } else {
            res.send(500).send(err.message)
        }
    });
}

const AgregarUsuario = async (req, res) => {
    console.log(req.body);
    const data = new Usuarios({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        confirmpassword: req.body.confirmpassword,
    });

    try {
        const datasave = await data.save();
        res.status(200).json(datasave);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

const Updateusuarios = async (req, res) => {
    try {
        const id = req.params.id;
        const dataUpdate = req.body;
        const options = { options: true };
        const results = await Usuarios.findByIdAndUpdate(
            id, dataUpdate, options
        );
        res.status(200).json(results);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

const DeleteUsuarios = async (req, res) => {
    try {
        const id = req.params.id;
        const results = await Usuarios.findByIdAndDelete(id);

        res.status(200).json(results);

    } catch (error) {
        res.status(500).send(error.message);
    }
}




module.exports = {Findallusers, FindById, AgregarUsuario, Updateusuarios, DeleteUsuarios};