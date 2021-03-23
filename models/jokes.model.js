const mongoose = require('mongoose');

const JokesSchema = new mongoose.Schema (
    {
        setup: String,
        punchline: String,
    },
    {
        timestamps: true,
    }
);

const modelName = "Jokes"

const Jokes = mongoose.model(modelName, JokesSchema);

module.exports = Jokes;