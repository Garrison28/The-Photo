const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Photo = require('../models/photo');
const Category = require('../models/category');
const Photographer = require('../models/photographer');
const cloudinary = require('cloudinary');

// GET all photos
router.get('/photos', (req, res) => {
  Photo.find({}, (err, photos) => {
    res.json(photos);
    console.log('Found all photos');
  });
});

// router.get('/showPhoto', (req, res) => {
//   let imgurl = cloudinary.url('photo1kj', {
//     width: 150, 
//     height: 150,
//     responsive: true,
//     crop: 'fill',
//     gravity: 'face',
//     radius: 'max'
//   })
//   res.render('showPhoto', { imgurl })
// })

// GET A photo
router.get('/photos/:id', (req, res) => {
  Photo.findById(req.params.id, (err, photo) => {
    res.json(photo);
    console.log('You Found One Photo');
  });
});

// POST create a photo
router.post('/photos', (req, res) => {
  Photo.create(req.body, (err, photo) => {
    res.json(photo);
    console.log(err);
    console.log('Photo created');
  });
});

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