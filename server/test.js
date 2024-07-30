const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { connectToDatabase } = require('./database');
const { createPaymentLink } = require('./payment');
const config = require('./config');

const app = express();

const corsOption = {
  origin: ['http://localhost:5173'],
};

app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Database connection
connectToDatabase();

// User Schema and Model
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  userId: String
});

const User = mongoose.model('User', userSchema);

// Login Route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({ message: 'Email and password are required' });
  }

  const user = await User.findOne({ email: email });

  if (!user) {
    return res.status(401).send({ message: 'Invalid email or password' });
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    return res.status(401).send({ message: 'Invalid email or password' });
  }

  const token = jwt.sign({ userId: user.userId }, config.JWT_SECRET, { expiresIn: '1h' });

  res.send({ token, message: 'Login successful' });
});


app.get('/api', (req, res) => {
  res.json({ hello: 'Hello Tenno. Welcome to Warframe!' });
});

app.post('/create-payment-link', async (req, res) => {
  const body = {
    orderCode: Number(String(Date.now()).slice(-6)),
    amount: 2000,
    description: 'Thanh toan don hang',
    items: [
      {
        name: 'Mì tôm Hảo Hảo ly',
        quantity: 1,
        price: 2000,
      },
    ],
    returnUrl: `${config.YOUR_DOMAIN}?success=true`,
    cancelUrl: `${config.YOUR_DOMAIN}?canceled=true`,
  };

  try {
    const paymentLinkResponse = await createPaymentLink(body);
    res.redirect(paymentLinkResponse.checkoutUrl);
  } catch (error) {
    console.error('Failed to create payment link:', error);
    res.status(500).send('Something went wrong');
  }
});

app.listen(8080, function () {
  console.log(`Server is listening on port 8080`);
});