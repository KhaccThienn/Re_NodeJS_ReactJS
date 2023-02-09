const conn = require("../database/database");

const student = {
    getAll: (callback) => {
        let query = "SELECT * FROM tbl_student";
        conn.query(query, (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        });
    },
    getByID: (id, callback) => {
        let query = "SELECT * FROM tbl_student WHERE id = ?";
        conn.query(query, id, (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        });
    },
    create: (data, callback) => {
        let query = "INSERT INTO tbl_student SET ?";
        conn.query(query, data, (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        });
    },
    update: (id, data, callback) => {
        let query = "UPDATE tbl_student SET ? WHERE id = ?";
        conn.query(query, [data, id], (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        });
    },
    delete: (id, callback) => {
        let query = "DELETE FROM tbl_student WHERE id = ?";
        conn.query(query, id, (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        });
    }
};

module.exports = student;