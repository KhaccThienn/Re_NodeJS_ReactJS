const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();

const api_route = require("./routes/api.route");

const port = 8000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "./uploads")));
app.use(bodyParser.json());
app.use(express.json());

api_route(app);

app.listen(port, () => {
    console.log(`API App is running: http://localhost:${port}`);
});