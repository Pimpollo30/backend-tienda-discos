const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Disco = new Schema({
    nombre: {
        type: String
    },
    artista: {
        type: String
    },
    sello: {
        type: String
    },
    formato: {
        type: String
    },
    velocidad: {
        type: String
    },
    condicion: {
        type: String
    },
    pais: {
        type: String
    },
    year: {
        type: Number
    },
    genero: {
        type: String
    },
    cantidad: {
        type: Number
    },
    precio: {
        type: Number
    },
    url: {
        type: String
    }
}, {
    collection: 'discos'
});
module.exports = mongoose.model('Disco',Disco);
