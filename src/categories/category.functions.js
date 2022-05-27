const mCat          = require('../models/category.model')
const mMovieDetails = require('../models/movie_detail.model')

exports.getList = async (req, res) => {
    const categories = await mCat.find({})

    // TODO: Hacer la pantalla de categorias, con enlaces a cada una de las categorias
    // Usar el id de la categoria para el enlace, y que lleve a la otra ruta
    res.render('category/index', { categories })

}

exports.getCategoryMovies = async (req, res) => {
    const {body, params, query} = req
    const { id } = params.id || query.id || body.id

    const category = await mCat.findById(id)
    if (!category) {
        const obj = { message: 'No existe la categoria' }
        return res.render('category/error', obj);
    }
    const movies   = await mMovieDetails.find({ genres: category.id })

    const data = { category, movies }

    // TODO: Hacer la pantalla de las peliculas de una categoria
    // Tener en cuenta que la categoria es un objeto y movies es un array
    res.render('category/movies', data)

}