const multer = require("multer");

const diskStorage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./uploads");
    },
    filename: (req, file, callback) => {
        var filename = `${Date.now() + file.originalname}`;
        callback(null, filename);
    }
});

const uploadFile = multer({
    storage: diskStorage
});

module.exports = uploadFile;
