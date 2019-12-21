const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Photo = require('../models/photo');
const Category = require('../models/category');
const Photographer = require('../models/photographer');
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const upload = multer({ dest: './uploads/' });
const cloudinaryStorage = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});
const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "thePhoto",
  allowedFormats: ["jpg", "png"],
  transformation: [{ width: 500, height: 500, crop: "limit" }]
});
const parser = multer({ storage: storage });




router.post('/photos', (req, res) => {
  console.log('----------------------------------------------', req.body)
  User.findById(req.body.theUserId, (err, user) => {
    user.photos.push(req.body.theImage)
    console.log('the user.photos before save', user.photos)
    user.save()
    console.log('the user.photos after save', user.photos)
    res.json(user.photos)
  }) 
});

router.get('/photos/all/:id', (req, res) => {
  console.log('hit the /photos/all route', req.params)
  User.findById(req.params.id, (err, user) => {
    console.log('in the getting user photos route', user)
    res.json(user.photos)
  })
})

router.get('/users', (req, res) => {
  User.find({}, (err, users) => {
    //all users
    res.json(users);
    console.log(`Found ALL users!1!`);
  });
});

// GET one user by id 
router.get('/users/:id', (req, res) => {
  User.findById(req.params.id, (err, user) => {
    // one user
    res.json(user);
    console.log(`found ONE user`);
  });
});

// PUT: Update User profile
router.put('/users/:id', (req, res) => {
  User.findById(req.params.id, (err, user) => {
    user.update(req.body, (err, user) => {
      res.json(user);
      console.log('User has been updated')
    });
  });
});

// GET all photos
router.get('/photos', (req, res) => {
  Photo.find({}, (err, photos) => {
    res.json(photos);
    console.log('Found all photos');
  });
});

// GET A photo
router.get('/photos/:id', (req, res) => {
  Photo.findById(req.params.id, (err, photo) => {
    res.json(photo);
    console.log('You Found One Photo');
  });
});

// POST create a photo
// router.post('/photos', (req, res, next) => {
//   const file = req.files.photo;
//   console.log(file)
//   cloudinary.uploader.upload(req.file.path, function(result) {

// }
// Photo.create(req.body, (err, photo) => {
//   res.json(photo);
//   console.log(err);
//   console.log('Photo created');
// });
// });


// DELETE photo
router.delete('/photos/:id', (req, res) => {
  Photo.findByIdAndDelete(req.params.id, (err, photo) => {
    console.log(err);
    photo.save(photo, (err, photo) => {
      res.json(photo);
      console.log(err);
      console.log('Deleted photo');
    });
  });
});



// GET all photographers
router.get('/photographers', (req, res) => {
  Photographer.find({}, (err, photographers) => {
    res.json(photographers);
    console.log('You found all photographers');
  });
});

// GET a specific photographer
router.get('/photographers/:id', (req, res) => {
  Photographer.findById(req.params.id, (err, photographer) => {
    res.json(photographer);
    console.log('You found A photographer');
  });
});

// Create a photographer
router.post('/photographers', (req, res) => {
  Photographer.create(req.body, (err, photographer) => {
    res.json(photographer);
    console.log(err);
    console.log('photographer created!')
  });
});

// UPDATE a photographer
router.put('/photographers/:id', (req, res) => {
  Photographer.findByIdAndUpdate(req.params.id, (err, photographer) => {
    console.log(err);
    photographer.save(photographer, (err, photographer) => {
      res.json(photographer);
      console.log(err);
      console.log('Updated photographer');
    });
  });
});

// DELETE a photgrapher
router.delete('/photographers/:id', (req, res) => {
  Photographer.findByIdAndDelete(req.params.id, (err, photographer) => {
    photographer.save(photographer, (err, photographer) => {
      res.json(photographer);
      console.log(err);
      console.log('Deleted photographer');
    });
  });
});

// GET all categories
router.get('/categories', (req, res) => {
  Category.find({}, (err, categories) => {
    res.json(categories);
    console.log(err);
    console.log('Found all categories');
  });
});

// POST create a category
router.post('/categories', (req, res) => {
  Category.create(req.body, (err, category) => {
    res.json(category);
    console.log(err);
    console.log('Created a category');
  });
});


module.exports = router;