import mongoose from "mongoose";

/**
 * Cosas necesarias para crear un modelo
 * 1.- schema
 * 2.- nombre
 */

const schema = new mongoose.Schema({
    author: String,
    ttile: String,
    genre: String,
    category: String,
    lenguage: String,
    editorial: String,
    printingDate: Date,
    pages: Number,
    coverage: String,

});

export default mongoose.model('Book', schema);