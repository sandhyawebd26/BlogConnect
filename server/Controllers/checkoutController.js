// controllers/checkoutController.js
require("dotenv").config(); 

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); 
const Product = require('../Models/Product');

async function createCheckoutSession(req, res) {
  const { product } = req.body;
console.log("pay=>",stripe)
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'inr',
            product_data: {
              name: product.name,
            },
            unit_amount: product.price * 100,
          },
          quantity: product.quantity,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:4000/success',
      cancel_url: 'http://localhost:4000/cancel',
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating the checkout session.' });
  }
}

module.exports = {
  createCheckoutSession,
};
