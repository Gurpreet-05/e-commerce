const Razorpay = require('razorpay');
const crypto = require('crypto');
const dotenv = require('dotenv');

dotenv.config();

const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

exports.createOrder = async (amount) => {
  const options = {
    amount: amount * 100, // amount in the smallest currency unit
    currency: "INR",
    receipt: crypto.randomBytes(10).toString('hex'),
  };

  try {
    const order = await razorpayInstance.orders.create(options);
    return order;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.verifyPayment = (razorpayPaymentId, razorpayOrderId, razorpaySignature) => {
  const body = razorpayOrderId + "|" + razorpayPaymentId;
  const expectedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(body.toString())
    .digest('hex');

  if (expectedSignature === razorpaySignature) {
    return true;
  } else {
    throw new Error('Invalid signature');
  }
};