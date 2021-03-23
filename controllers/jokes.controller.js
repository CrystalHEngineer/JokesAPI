const Jokes = require('../models/jokes.model');

module.exports = {
    helloWorld: (req, res) => {
        return res.json("Hello World.");
    },

    getAllJokes: (req, res) => {
        Jokes.find({})
            .then((allJokesArray) => {
                console.log(allJokesArray);
                res.json(allJokesArray);
            })
            .catch((err) => res.json(err));
    },

    createJoke: (req, res) => {
        console.log(req.body);

        Jokes.create(req.body)
            .then((newJokesObj) => {
                console.log(newJokesObj);
                res.json(newJokesObj);
            })
            .catch((err) => {
                console.log("in jokes create");
                console.log(err);
                res.json({
                    theErrObject: err,
                    message: "There was an error."
                });
            });
    },

    returnJoke: (req, res) => {
        Jokes.findById(req.params._id)
            .then(joke => {
                console.log(joke);
                res.json(joke);
            })
            .catch(err => res.json(err));
    },

    updateJoke: (req, res) => {
        Jokes.findByIdAndUpdate(req.params._id, req.body, {
            new: true,
            runValidators: true,
        })
        .then(result => {
            console.log(result);
            res.json(result);
        })
        .catch(err => res.json(err));
    },

    deleteJoke: (req, res) => {
        Jokes.findByIdAndDelete(req.params._id)
        .then(deletedJoke => {
            console.log(deletedJoke);
            res.json(deletedJoke);
        })
        .catch(err => res.json(err))
    },
}