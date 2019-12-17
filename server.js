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
const cloudinary = require('cloudinary');
const User = require('./models/user');

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
// app.use(express.static(__dirname + '/client/build'));
app.use(helmet());

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.once('open', () => {
    console.log(`Connected to MongoDB on ${db.host}:${db.port}...`);
});
db.on('error', (err) => {
    console.log(`Database error:\n${err}`);
});

let user = new User({
    name: "Garrison",
    email: "ghighsmith28@gmil.com",
    password: "password",
    photographer: true
})

// user.save(console.log(user))

app.use('/auth', require(`./routes/auth`));
app.use('/home', require('./routes/index'))
app.use('/locked',
        expressJWT({ secret: process.env.JWT_SECRET }).unless({ method: 'POST'}), 
        require('./routes/locked'));

// app.get('*', (req, res) => {
//     res.sendFile(__dirname + '/client/build/index.html')
// })

app.listen(process.env.PORT, () => {
    console.log(`Your tuning into Port ${process.env.PORT}...`);
});
