const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/register').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const newUser = new User({username, password});

    newUser.save()
        .then(()=> res.json('User added!'))
        .catch((err)=> res.status(400).json('Error: ' + err))
})

router.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    User.findOne({ username, password })
        .then((user) => {
            if (user) {
                res.json({ message: 'User found', user });
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        })
        .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/user/:id').get((req, res) => {
    User.findById(req.params.id)
            .then(user => res.json(user))
            .catch(err=> res.status(400).json('Error: ' + err))
});


module.exports = router;