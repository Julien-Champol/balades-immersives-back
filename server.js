const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
const port = 3002;
dotenv.config();

/* Entêtes CORS */
app.use((req, res, next) => {
    res.header('Access-Control-allow-Origin', '*');
    res.header('Access-Control-allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
    next();
});

app.use(express.json());

// routes
app.use('/users', require("./routes/user"));
app.use('/buildings', require("./routes/building"));
app.use('/moves', require("./routes/move"));
app.use('/photo360s', require("./routes/photo360"));
app.use('/interestPoints', require("./routes/interestPoint"));
app.use('/photos360s-with-moves', require('./routes/photo360-with-moves'))

// initialisation à la base de données
mongoose.set('strictQuery', false);
mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        console.log("Connecté à MongoDB!");
        app.listen(port, () => {
            console.log(`Server rocks on port: http://localhost:${port}`);
        });
    })
    .catch((error) => {
        console.log(error)
    });