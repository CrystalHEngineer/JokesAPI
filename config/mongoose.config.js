const mongoose = require('mongoose');
const dbName = "jokes-api";

mongoose.connect('mongodb://localhost/' + dbName, {
    urlNewParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connected with mongo database: " + dbName))
    .catch((err) => console.log("Somethng went wrong with the connecting to the DB: " + error))