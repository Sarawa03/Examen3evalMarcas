const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const params = { timestamps: true, strict: false, strictPopulate: false }
const schema = {
    id          : { type:String },
    name        : { type:String, default:'' },
    movies: [
        { type: Schema.Types.ObjectId, ref: 'movie' }
    ],
    caracteristicas_fisicas:{
        altura: { type: Number, default: 0 },
        peso: { type: Number, default: 0 },
        genero:{
            type: String,
            enum: ['masculino', 'femenino', 'otro'],
        }
    },
    edad: {type: Number}
}
const Esquema = new Schema(schema, params);
const model   = mongoose.model('actor', Esquema);

module.exports = model