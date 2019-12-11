require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const expressJWT = require('express-jwt');
const bcrypt = require('bcrypt');
const helmet = require('helmet');
const Photo = require('./models/photo');
const Category = require('./models/category');
const Photographer = require('./models/photographer');
const multer = require('multer');
const upload = multer({ dest: './uploads/'});

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(helmet());

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.once('open', () => {
    console.log(`Connected to MongoDB on ${db.host}:${db.port}...`);
});
db.on('error', (err) => {
    console.log(`Database error:\n${err}`);
});




app.use('/auth', require(`./routes/auth`));
app.use('/home', require('./routes/index'))
app.use('/locked',
        expressJWT({ secret: process.env.JWT_SECRET }).unless({ method: 'POST'}), 
        require('./routes/locked'));

app.listen(process.env.PORT, () => {
    console.log(`Your tuning into Port ${process.env.PORT}...`);
});
