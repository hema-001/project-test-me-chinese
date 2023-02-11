// Import express and create express server on port "PORT" (default 3000) fetched from .env file
require("dotenv").config();
const server = require("./express");
// import mongoose and connect to mongodb database fetched from .env file
const mongoose = require("mongoose");
const app = server();
const PORT = process.env.PORT || 3000;

// connecte to mongodb database and handle errors
mongoose.connect(process.env.MONGODB_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false, 
    useCreateIndex: true 
}).then(() => {
    console.log("Connected to database");
}).catch((err) => {
    console.log("Error connecting to database", err);
});

// Start express server
app.listen(PORT, () => {
    console.log("Server started on port", PORT);
}); 