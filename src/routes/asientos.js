const express = require("express");
const asientoSchema = require("../models/asientos");

const router = express.Router();

//create asiento
router.post('/asientos', (req, res) => {
    const asiento = asientoSchema(req.body);
    asiento
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


//get all asientos
router.get('/asientos', (req, res) => {
    asientoSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


//get un asientos
router.get('/asientos/:id', (req, res) => {
    const { id } = req.params;
    asientoSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


//update un asientos
router.put('/asientos/:id', (req, res) => {
    const { id } = req.params;
    const {fAsiento, conceptoId, conceptoDesc, tipo, cuenta, estado, debe, haber } = req.body
    asientoSchema
    .updateOne({_id: id}, {$set: {fAsiento, conceptoId, conceptoDesc, tipo, cuenta, estado, debe, haber}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//delete un asiento
router.delete('/asientos/:id', (req, res) => {
    const { id } = req.params;
    asientoSchema
    .remove({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;

