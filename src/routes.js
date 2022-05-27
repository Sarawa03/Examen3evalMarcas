const express = require('express');
const router  = express.Router();

router.use('/movies',     require('./movies/routes'))
router.use('/actor',      require('./actor/routes'))
router.use('/categories', require('./categories/routes'))

// Ruta inicial de portada
router.get('/', (req, res) => {

    // TODO: Teneis que hacer la plantilla de la portada
    // Hacer una portada para la web, donde haya unos botones (a) para cada una de las funciones
    /*
    .- Ver ultimas peliculas -> /movies/last
    .- Ver primera pelicula  -> /movies/first
    .- Ver detalle de pelicula -> /movies/:id
    .- Ver categorias -> /categories
    .- Ver las peliculas de una categoria -> /categories/:id

    //*/
    res.render('index');
});

module.exports = router;