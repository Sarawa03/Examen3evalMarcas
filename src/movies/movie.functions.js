const mMovie = require('../models/movie.model');

exports.getLast = async (req, res) => {

    // Tenemos la lista de las 10 ultimas peliculas creadas
    const movies = await mMovie.find({}).sort({ createdAt: -1 }).limit(10);

    // Si no hay peliculas, mostramos un mensaje
    if (!movies || movies.length <= 0) {
        const obj = { message: 'No hay peliculas creadas' }
        return res.render('movies/error', obj);
    }

    // TODO: Teneis que hacer una vista para mostrar las peliculas
    // Si hay peliculas, mostramos la portada
    res.render('movies/portada', {movies});

}

exports.getFirstMovie = async (req, res) => {

    // Buscamos la primera pelicula creada
    const movie = await mMovie.findOne({}).sort({ createdAt: 1 });

    // Si no hay peliculas, mostramos un mensaje
    if (!movie) {
        const obj = { message: 'No hay peliculas creadas' }
        return res.render('movies/error', obj);
    }

    // TODO: Teneis que hacer el detalle de la pelicula
    // Mostramos el detalle de la pelicula
    // res.render('movies/details', {movie});
    res.send(movie)
}