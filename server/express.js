//import express
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

/* Handle auth-related errors thrown by express-jwt when it tries to validate JWT
tokens in incoming requests */
app.use((err, req, res, next) => {
    if (err.name === "UnauthorizedError") {
        res.status(401).send(err.message);
    } else if (err) {
        res.status(400).send(err.message);
    }
});

// export express server
module.exports = () => app;