'use strict';
const mongoose = require('mongoose')
const fruitschema = new mongoose.Schema({
    name:{type:string},
    image:{type:string},
    price:{type:string}
})
const fruitmodel = mongoose.model('Fruit',fruitschema)
module.exports = fruitmodel;