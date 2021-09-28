'use strict';
const axios = require('axios')
const express = require('express')
const app = express()
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose')
app.use(cors())
app.use(express.json)
const MONGODB =process.env.MONGODB
const PORT = process.env.PORT
mongoose.connect(MONGODB)
const {
    getfruit,
    getmyfruit,
    updatfruit,
    deletfruit,
    createfruit
} = require('./controller/fruitControl')

app.get('/fruitapi',getfruit);
app.get('/fruit',getmyfruit);
app.post('/fruit',createfruit)
app.delete('/fruit/:_id',deletfruit)
app.put('./fruit/:_id',updatfruit)

app.listen(PORT,()=>{console.log(`you are on port ${PORT}`)})