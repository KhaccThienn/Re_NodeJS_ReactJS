const mysql = require("mysql");

const connect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_student"
});

connect.connect((err) => {
    if (err) {
        throw err
    };
    console.log(`Connected to db success on id: ${connect.threadId}`);
});

module.exports = connect;