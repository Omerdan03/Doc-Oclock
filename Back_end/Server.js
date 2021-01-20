// Import npm packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();

//import routes
const routes = require('./routes/routes');

// db
mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => console.log('DB Connected'));

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());


//routes
app.use('/api', routes);

// server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
