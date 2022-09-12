const express = require('express');
const mongoose = require('mongoose');
const Usuarios = require('./routes/Users');
const Productos = require('./routes/Products');
const cors = require('cors');
const bodyparser = require('body-parser');
const app = express();
require('dotenv').config();

app.set('port', process.env.PORT || 7000);

app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(express.json());
app.use('/api', Usuarios);
app.use('/api', Productos);


mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("DB Is Connected in port || localhost: 27107");
}).catch((err) => {
    console.log(err.message);
});


app.listen(app.get('port'), () => {
    console.log("The Sever is Running in port || localhost: ", app.get('port'));
});