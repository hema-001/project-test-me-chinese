const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const compress = require('compression');
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');

const app = express();

// configure express
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());
app.use(compress());

// configure routes
app.use('/', authRoutes);
app.use('/', userRoutes);

// serve hello world on get request to root
app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});

module.exports = app;