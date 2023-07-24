const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./User'); 
const bcrypt = require('bcryptjs');



const app = express();

app.use(cors());

// Connection to MongoDB

mongoose.connect('mongodb+srv://admin:Vw1CeaPGCaLrvOIc@cluster0.ayed85h.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));


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
