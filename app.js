const express = require("express");
const morgan = require("morgan");
const mysql = require("mysql");
const myConnection = require("express-myconnection");
const path = require('path');
const app = express();
require('dotenv').config();

// Importing routes
const studentRoutes = require('./routes/studentRoutes');

// settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'sql5.freesqldatabase.com',
    user: 'sql5712897',
    password: 'EM1iPPGtWQ',
    port: 3306,
    database: 'sql5712897'
}, 'single'));
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api', studentRoutes);

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
