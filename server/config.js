const dotenv = require('dotenv').config();

const YOUR_CLIENT_ID = process.env.PAYOS_CLIENT_ID;
const YOUR_API_KEY = process.env.PAYOS_API_KEY;
const YOUR_CHECKSUM_KEY = process.env.PAYOS_CHECKSUM_KEY;
const YOUR_DOMAIN = 'http://localhost:5173';

module.exports = {
  YOUR_CLIENT_ID,
  YOUR_API_KEY,
  YOUR_CHECKSUM_KEY,
  YOUR_DOMAIN,
};