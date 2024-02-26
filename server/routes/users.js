const router = require('express').Router();
let User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const bcrypt = require('bcrypt');

const secretKey = crypto.randomBytes(32).toString('hex');

router.route('/').get((req, res) => {
    User.find()
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/register').post(async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({ username, password: hashedPassword });

        await newUser.save();
        res.json('User added!');
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
})

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    try {
        const user = await User.findOne({ username });

        if (user) {
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (isPasswordValid) {
                const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '2h' });
                res.json({ message: 'User found', user, token });
            } else {
                res.status(401).json({ message: 'Invalid username or password' });
            }
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

router.get('/allUsers/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json('User not found');
        }
      
        const books = user.books || [];
      
        const users = await User.find({ 
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

router.route('/update/:id').post(async (req, res) => {
    const userId = req.params.id;
    const { action, bookId, bookInfo } = req.body;
    
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json('User not found');
        }

        switch (action) {
            case 'add':
                try {
                    user.books.push(bookInfo);
                } catch(error) {
                    console.log(error)
                }
                break;
            case 'delete':
                try {
                    user.books = user.books.filter(book => book._id !== bookId);
                } catch(error) {
                    console.log(error)
                }
                
                break;
            case 'update':
                try {
                    const index = user.books.findIndex(book => book._id === bookId);
                    if (index !== -1) {
                        user.books[index] = { ...user.books[index], ...bookInfo };
                    }
                } catch(error) {
                    console.log(error)
                }
                
                break;
            default:
                return res.status(400).json('Invalid action');
        }

        await user.save();
        res.json('User updated successfully');
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