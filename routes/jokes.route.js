const jokesController = require('../controllers/jokes.controller');

module.exports = (app) => {
    app.get("/", jokesController.helloWorld);
    app.get("/api/jokes", jokesController.getAllJokes);
    app.post("/api/jokes", jokesController.createJoke);
    app.get("/api/jokes/:_id", jokesController.returnJoke);
    app.put("/api/jokes/:_id", jokesController.updateJoke);
    app.delete("/api/jokes/:_id", jokesController.deleteJoke);
}