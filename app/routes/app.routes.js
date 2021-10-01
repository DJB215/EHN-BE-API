module.exports = (app) => {
    const App = require("../controllers/app.controller.js");

    app.post("/create", App.create);

    app.get("/get-all", App.findAll);

    // app.get("/test/:id", App.findOne);

    // app.put("/test/:id", App.update);

    // app.delete("/test/:id", App.delete);
};