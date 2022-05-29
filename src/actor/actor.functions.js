const mActor      = require('../models/actor.model')
const movies      = require('../models/movie.model')


//Buscar personas con el nombre pepe
const buscar_por_nombre = async (req, res) => {

    const dbQuery = {
        nombre: 'Pepe'
    }

    // Devuelve SIEMPRE un array
    const actores = await mActor.find(dbQuery)

    res.send(actores)
}

//Buscar todos los actores que participen en avatar 5
const buscar_por_nombre_de_pelicula = async (req, res) => {
    const movies = await movies.find({
        name: {$regex: 'Avatar 5', $options: 'i'}
    })
    const dbQuery = {
        movies: {$in: movies}
    }
    const actores = await mActor.find(dbQuery)
    res.send(actores)

}

//Buscar todas las peliculas donde aparece el personaje "Pepe"
const buscar_por_peliculas_por_actores = async (req, res) => {
const dbQuery = {
    name: 'Pepe'
}
    const actor =  await mActor.findOne(dbQuery).populate('movies')
    const peliculas = actor.movies
    res.send(peliculas)

}

//Añadimos una pelicula (Avatar 5) a un actor (Pepe)
const añadimos_pelicula_a_actor = async (req, res) => {
    const dbQuery = {
        name: 'Pepe'
    }
    const añadir = {
        name: 'Avatar 5'
    }

    const pelicula = await movies.findOne(añadir)
    const actor = await mActor.findOne(dbQuery).populate('movies')
    actor.movies.push(pelicula)

    await actor.save()
}

//Primeros 10 actores que esten en Avatar 5
const primeros_actores_en_pelicula = async (req, res) => {
    const movies = await movies.find({
        name: {$regex: 'Avatar 5', $options: 'i'}
    })
    const dbQuery = {
        movies: {$in: movies}
    }
    const actores = await mActor.find(dbQuery).limit(10)
    res.send(actores)
}

//Todos los actores de Avatar 5 se llamen pepe
const update_actores_en_pelicula = async(req, res) => {
    const peliculas = await movies.find({
        name: { $regex: 'Avatar 5', $options: 'i' }
    })

    const dbQuery ={
        movies: {$in: peliculas}
    }

    const update = {
        name: 'Pepe'
    }
    const actor = await mActor.updateMany(dbQuery, update)
}
