const student = require("../models/student");

const studentController = {
    getAll: (req, res) => {
        student.getAll((err, data) => {
            if (err) {
                res.json(err);
            } else {
                res.status(200).json(data);
            }
        });
    },
    getByID: (req, res) => {
        student.getByID(req.params.id, (err, data) => {
            if (err) {
                res.json(err);
            } else {
                res.status(200).json(data);
            }
        });
    },
    create: (req, res) => {
        req.body.avatar = `http://${req.get('host')}/${req.file.filename}`;
        student.create(req.body, (err, data) => {
            if (err) {
                res.json(err);
            } else {
                res.status(200).json(data);
            }
        });
    },
    update: (req, res) => {
        student.getByID(req.params.id, (err1, data1) => {
            if (err1) {
                res.json(err1);
            } else {
                if (req.file) {
                    req.body.avatar = `http://${req.get('host')}/${req.file.filename}`;
                } else {
                    req.body.avatar = data1[0].avatar;
                }
                student.update(req.params.id, req.body, (err2, data2) => {
                    if (err2) {
                        res.json(err2);
                    } else {
                        res.status(200).json(data2);
                    }
                });
            }
        });
    },
    delete: (req, res) => {
        student.delete(req.params.id, (err, data) => {
            if (err) {
                res.json(err);
            } else {
                res.status(200).json(data);
            }
        });
    }
};

module.exports = studentController;