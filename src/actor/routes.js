const express = require('express');
const router  = express.Router();

const ctrl = require('./actor.functions');

// Ruta inicial de portada
router.get('/', (req, res) => {
    res.render('index');
});

module.exports = router;