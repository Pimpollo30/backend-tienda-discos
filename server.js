//Se declaran las dependencias
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

//Conexión local
mongoose.connect('mongodb://127.0.0.1:27017/discos').then((x) => {
    console.log(`Conectado a Mongo! Base de datos "${x.connections[0].name}"`);
}).catch((err) => {
    console.log("Error al conectarse con Mongo",err.reason);
});


//Configuramos servidor de Express
const app = express();
const discoRuta = require("./routes/disco.route");
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended:false
    })
);

app.use(cors());
app.use(express.static(path.join(__dirname,'dist/tienda-discos')));
app.use("/",express.static(path.join(__dirname,'dist/tienda-discos')));
app.use('/api',discoRuta);

//Crear puerto
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Conectada al puerto '+port);
});

app.use((req, res, next) => {
    next(createError(404));
});

//Manejador de errores
app.use(function(err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});