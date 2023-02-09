const studentController = require("../controllers/studentController");
const uploadFile = require("../configs/uploadFile");

const api_route = (app) => {
    app.get("/api/student", studentController.getAll);
    app.get("/api/student/:id", studentController.getByID);
    app.post("/api/student", uploadFile.single("avatar"), studentController.create);
    app.put("/api/student/:id", uploadFile.single("avatar"), studentController.update);
    app.delete("/api/student/:id", studentController.delete);
};

module.exports = api_route;