const app = require('./express');
const mongoose = require('mongoose');
require('dotenv').config();

// get port from environment and store in Express.
const PORT = process.env.PORT || 5000;

// connect to database
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to database');
    })
    .catch(() => {
        console.log('Connection to DB failed');
    });

// start express server
app.listen(PORT, (err) => {
    if (err) {
        return console.log('Error starting server', err);
    }
    console.log(`Server listening on port ${PORT}`);
});