const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose'); // Install mongoose
const app = express();
const port = 3001; 

// Your MongoDB connection URI


const mongoURI = 'mongodb+srv://iamashish1125:Ashish123@cluster0.ugximo6.mongodb.net/';


// Connect to MongoDB
const connectToDB = () => {
    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

}


// User Schema 
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true }, 
  password: { type: String, required: true },
  gender: {type : String},
  skill: { type: String, required: true }
});
const User = mongoose.model('User', userSchema);

app.use(cors());
app.use(bodyParser.json());

// Create User
app.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send('User created');
  } catch (error) {
    res.status(400).send(error.message); // Handle potential errors
  }
});

// Get All Users (Administrative view)
app.get('/users', async (req, res) => {
    try {
        // Fetch all users from the database
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


// Authentication (Simplified Example)
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user || user.password !== password) { // Compare passwords securely (hashing later)
      return res.status(401).send('Invalid credentials');
    }
    // res.send('Login successful');
    res.status(201).send('Login successfully');
  } catch (error) {
    res.status(500).send('Try Again');
  }
});

app.listen(port, () => {
    connectToDB();
    console.log(`Server listening on port ${port}`);
});