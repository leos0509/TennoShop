const PayOS = require('@payos/node');
const { YOUR_CLIENT_ID, YOUR_API_KEY, YOUR_CHECKSUM_KEY } = require('./config');

const payOS = new PayOS(YOUR_CLIENT_ID, YOUR_API_KEY, YOUR_CHECKSUM_KEY);

async function createPaymentLink(body) {
  try {
    const paymentLinkResponse = await payOS.createPaymentLink(body);
    return paymentLinkResponse;
  } catch (error) {
    console.error('Failed to create payment link:', error);
    throw error;
  }
}

module.exports = {
  createPaymentLink,
};