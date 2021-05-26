const express = require('express')
const router = express.Router()

const ImageCtrl = require('../controllers/image-ctrl')

router.get('/images', ImageCtrl.getImages)

module.exports = router