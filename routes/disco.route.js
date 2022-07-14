const express = require('express');
const app = express();
const discoRuta = express.Router()

let Disco = require('../models/Disco.js');

//Agregar nuevo disco
discoRuta.route('/create').post((req, res, next) => {
   Disco.create(req.body,(error, data) => {
    if (error) {
        return next(error);
    }else {
        res.json(data);
    }
   });
});

//Obtener todos los productos
discoRuta.route('/').get((req, res, next) => {
    Disco.find((error, data) => {
        if (error) {
            return next(error);
        }else {
            res.json(data);
        }
    });
});

//Obtener un producto mediante su ID
discoRuta.route('/producto/:id').get((req, res, next) => {
    Disco.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        }else {
            res.json(data);
        }
    });
});

//Actualizar el documento de un producto
discoRuta.route('/update/:id').put((req, res, next) => {
    Disco.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        }else {
            res.json(data);
            console.log("Se actualizó el documento exitosamente");
        }
    });
})

//Eliminar el documento de un producto
discoRuta.route('/delete/:id').delete((req, res, next) => {
    Disco.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        }else {
            res.json(data)
        }
    })
})
module.exports = discoRuta;