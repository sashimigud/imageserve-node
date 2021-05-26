const mongoose = require('mongoose')
const config = require('../config');

const url = config.mongoURI;

mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db