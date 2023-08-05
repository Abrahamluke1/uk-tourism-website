const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./User'); 
const bcrypt = require('bcryptjs');
const Place = require('./Place');
const jwt = require('jsonwebtoken');
const Comment = require('./comment');


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
  console.log('Received save location request'); // Debug: log when a request is received

  const { location } = req.body;

  console.log('Location:', location); // Debug: log the location

  if (!req.headers.authorization) {
    return res.status(401).send({ error: 'Authorization header is missing' });
  }
  
  const token = req.headers.authorization.split(" ")[1];
  
  console.log('Token:', token); // Debug: log the token

  try {
    const decodedToken = jwt.verify(token, 'yourSecretKey');
    const userId = decodedToken.userId;

    console.log('Decoded user ID:', userId); // Debug: log the user ID

    let user = await User.findById(userId);
    if (!user) {
      return res.status(400).send({ error: 'User not found!' });
    }

    if (user.locations && user.locations.includes(location)) {
      return res.status(400).send({ error: 'Location already saved!' });
    }

    user.locations.push(location);
    await user.save();
    res.status(201).send({ message: 'Location saved successfully!' });
  } catch (err) {
    console.error('Error:', err); // Debug: log the entire error

    res.status(500).send({ error: 'Server error!' });
  }
});



app.get('/getLocations', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).send({ error: 'Authorization header missing' });
    }

    const tokenParts = authHeader.split(" ");
    if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
      return res.status(401).send({ error: 'Invalid authorization header format' });
    }

    const token = tokenParts[1];
    const decodedToken = jwt.decode(token); // changed this line
    const userId = decodedToken.userId;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).send({ error: 'User not found!' });
    }

    res.status(200).send({ locations: user.locations });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Server error' });
  }
});


app.delete('/deleteLocation/:location', async (req, res) => {
  const { location } = req.params;
  const token = req.headers.authorization.split(" ")[1];

  try {
    const decodedToken = jwt.verify(token, 'yourSecretKey');
    const userId = decodedToken.userId;

    console.log(`Location: ${location}, User ID: ${userId}`);  // <-- Debugging line here

    let user = await User.findById(userId);
    if (!user) {
        return res.status(400).send({ error: 'User not found!' });
    }

    const index = user.locations.indexOf(location);

    console.log('Before deletion:', user.locations);  // <-- Debugging line here

    if (index !== -1) {
      user.locations.splice(index, 1);

      console.log('After deletion:', user.locations);  // <-- Debugging line here

      await user.save();
      res.status(200).send({ message: 'Location deleted successfully!' });
    } else {
      res.status(400).send({ error: 'Location not found!' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Server error!' });
  }
});

app.post('/comments', async (req, res) => {
  const { rating, comment, place } = req.body;  // Extract 'place' from the request body


  console.log("Received request: ", req.body); // Log received request body

  if (!req.headers.authorization) {
    return res.status(401).send({ error: 'Authorization header is missing' });
  }

  const token = req.headers.authorization.split(" ")[1];

  try {
    // decode the token
    const decodedToken = jwt.decode(token);
    console.log("Decoded token: ", decodedToken); // Log decoded token

    const userId = decodedToken.userId;

    console.log("Extracted userId: ", userId); // Log userId

    const newComment = new Comment({
      rating,
      comment,
      place: place,
      user: userId, // use the userId here
    });

    console.log("New Comment: ", newComment); // Log newComment

    const savedComment = await newComment.save();
    console.log("Saved comment: ", savedComment); // Log saved comment

    res.status(201).json(savedComment);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Server error!' });
  }
});



app.get('/comments', async (req, res) => {
  const { place } = req.query;

  if (!req.headers.authorization) {
    return res.status(401).send({ error: 'Authorization header is missing' });
  }

  const token = req.headers.authorization.split(" ")[1];

  try {
    // decode the token
    const decodedToken = jwt.decode(token);

    // No need to filter by user anymore, but you might still want to filter by place if provided
    const query = { place: place };
    const comments = await Comment.find(query).populate('user');
    console.log(comments)

    res.status(200).json(comments);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Server error!' });
  }
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});




const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
