const mongoose = require('mongoose');
const config = require('../config');
const url = config.mongoURI;

const connect = mongoose.createConnection(url, { useNewUrlParser: true, useUnifiedTopology: true });

let gfs;

connect.once('open', () => {
    // initialize stream
    gfs = new mongoose.mongo.GridFSBucket(connect.db, {
        bucketName: "uploads"
    });
});

getImages = (req, res) => {
  gfs.find().toArray((err, files) => {
    if (!files || files.length === 0) {
        return res.status(200).json({
            success: false,
            message: 'No files available'
        });
    }

    files.map(file => {
        if (file.contentType === 'image/jpeg' || file.contentType === 'image/png' || file.contentType === 'image/svg') {
            file.isImage = true;
        } else {
            file.isImage = false;
        }
    });

    res.status(200).json({
        success: true,
        files,
    });
});
}


module.exports = {
  getImages
}