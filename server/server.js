const express = require('express');
const cors = require('cors');
const { createPaymentLink } = require('./payment');
const config = require('./config');

const app = express();

const corsOption = {
  origin: ['http://localhost:5173'],
};

app.use(cors(corsOption));
app.use(express.json());


app.get('/api', (req, res) => {
  res.json({ hello: 'Hello Tenno. Welcome to Warframe!' });
});

app.post('/create-payment-link', async (req, res) => {
  const body = {
    orderCode: Number(String(Date.now()).slice(-6)),
    amount: 180000,
    description: 'Thanh toan don hang',
    items: [
      {
        name: 'GIRL PSYCHO 100 ZINE',
        quantity: 1,
        price: 10000,
      },
      {
        name: '[Addon]MACHIN3tools',
        quantity: 1,
        price: 50000,
      },
      {
        name: 'BagaPie Modifier',
        quantity: 1,
        price: 20000,
      },
      {
        name: 'Learn how to CREATE a CUTE KITCHEN',
        quantity: 1,
        price: 100000,
      },
    ],
    returnUrl: `${config.YOUR_DOMAIN}/`,
    cancelUrl: `${config.YOUR_DOMAIN}/`,
};

  try {
    const paymentLinkResponse = await createPaymentLink(body);
    res.redirect(paymentLinkResponse.checkoutUrl);
  } catch (error) {
    console.error('Failed to create payment link:', error);
    res.status(500).send('Something went wrong');
  }
});

app.listen(3030, function () {
  console.log(`Server is listening on port 3030`);
});