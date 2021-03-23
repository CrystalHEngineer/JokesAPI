const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

require('./config/mongoose.config');

require('./routes/jokes.route')(app);

app.listen(8000, () => {
    console.log("running on port 8000");
});