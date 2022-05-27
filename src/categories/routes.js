const express = require('express');
const router  = express.Router();


const cCat = require('./category.functions');

router.get('/list',  cCat.getList)
router.get('/:id',   cCat.getCategoryMovies)


// TODO: Hacer la portada
// Ruta inicial de portada
router.get('/', (req, res) => {
    // Solo mostrar que estamos dentro de la carpeta y enlaces a las rutas
    res.render('categories/index');
});

module.exports = router;