const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./User'); 
const bcrypt = require('bcryptjs');
const Place = require('./Place');
const jwt = require('jsonwebtoken');



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

app.get('/places', async (req, res) => {
  try {
    const places = await Place.find();
    res.json(places);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server error!');
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Check if user exists
  let user = await User.findOne({ email });
  if (!user) {
    return res.status(400).send({ error: 'Invalid email or password!' });
  }

  // Check if password matches
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).send({ error: 'Invalid email or password!' });
  }

  // At this point, the user is authenticated. 
  // Generate a token with the user's id
  const token = jwt.sign({ userId: user._id }, 'yourSecretKey', { expiresIn: '1h' });

  res.send({ message: 'User authenticated successfully!', token });
});

app.post('/saveLocation', async (req, res) => {
  const { location } = req.body;
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, 'yourSecretKey');
  const userId = decodedToken.userId;

  let user = await User.findById(userId);
  if (!user) {
      return res.status(400).send({ error: 'User not found!' });
  }

  if (user.locations && user.locations.includes(location)) {
      return res.status(400).send({ error: 'Location already saved!' });
  }

  user.locations.push(location);
  try {
      await user.save();
      res.status(201).send({ message: 'Location saved successfully!' });
  } catch (err) {
      res.status(500).send({ error: 'Server error!' });
  }
});

app.get('/getLocations', async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, 'yourSecretKey');
  const userId = decodedToken.userId;

  let user = await User.findById(userId);
  if (!user) {
      return res.status(400).send({ error: 'User not found!' });
  }

  res.status(200).send({ locations: user.locations });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
