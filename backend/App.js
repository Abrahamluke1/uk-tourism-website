const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User'); // Assuming the user model file is in the same directory
const bcrypt = require('bcryptjs');

const app = express();

// Connection to MongoDB
mongoose.connect('mongodb+srv://abrahamluke90:nHwLw52oDad1E6MJ@cluster0.3nmgyqv.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
.then(() => console.log('Connected to MongoDB successfully!'))
.catch(err => console.error('Could not connect to MongoDB.', err));

app.use(express.json()); // for parsing application/json

app.post('/signup', async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  // Check if password and confirmPassword match
  if (password !== confirmPassword) {
    return res.status(400).send({ error: 'Passwords do not match!' });
  }

  // Check if user already exists
  let user = await User.findOne({ email });
  if (user) {
    return res.status(400).send({ error: 'User already exists!' });
  }

  // Create a new user
  user = new User({
    email,
    password,
  });

  try {
    await user.save();
    res.status(201).send({ message: 'User registered successfully!' });
  } catch (err) {
    res.status(500).send({ error: 'Server error!' });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
