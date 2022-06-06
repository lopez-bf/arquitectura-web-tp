const mongoose = require("mongoose");

const asientoSchema = mongoose.Schema({
    fAsiento:{
        type: String,
        required: true
    },
    conceptoId: {
        type: String,
        required: true
    },
    conceptoDesc: {
        type: String,
        required:true
    },
    tipo: {
        type: String,
        required: true
    },
    cuenta: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true
    },
    debe: {
        type: String,
        required: true
    },
    haber: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Asientos',asientoSchema);