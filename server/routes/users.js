const router = require('express').Router();
let User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const secretKey = crypto.randomBytes(32).toString('hex');

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
                const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '2h' });
                res.json({ message: 'User found', user, token });
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        })
        .catch((err) => res.status(400).json('Error: ' + err));
});

router.get('/allUsers/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json('User not found');
        }
      
        const books = user.books || [];
      
        const users = await Pangolin.find({ 
            _id: { 
                $ne: user._id,         // Exclude the current user
                $nin: books.map(book => book._id)  // Exclude users in friends list
            } 
        });
      
        res.json(users);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

router.route('/user/:id').get((req, res) => {
    User.findById(req.params.id)
            .then(user => res.json(user))
            .catch(err=> res.status(400).json('Error: ' + err))
});


module.exports = router;