const router = require('express').Router();
let Book = require('../models/book.model');

router.route('/').get((req, res) => {
    Book.find()
        .then(book => res.json(book))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const shelf = req.body.shelf;
    const author = req.body.author;
    const cover = req.body.cover;
    const description = req.body.description;
    const rating = req.body.rating;
    const newBook = new Book({
        title,
        shelf,
        author,
        cover,
        description,
        rating
    });

    newBook.save()
        .then(()=> res.json('Book added!'))
        .catch((err)=> res.status(400).json('Error: ' + err))
})

router.route('/:id').get((req, res) => {
    Book.findById(req.params.id)
        .then(book => res.json(book))
        .catch(err=> res.status(400).json('Error: ' + err))
});

router.route('/update/:id').post((req, res) => {
    Book.findById(req.params.id)
        .then(b => {
            b.title = req.body.title;
            b.shelf = req.body.shelf;
            b.author = req.body.author;
            b.cover = req.body.cover;
            b.description = req.body.description;
            b.rating = req.body.rating;
            
            b.save()
                .then(()=> res.json('Book updated!'))
                .catch((err)=> res.status(400).json('Error: ' + err))
        })
        .catch(err=> res.status(400).json('Error: ' + err))
});

module.exports = router;