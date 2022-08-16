const stripe = require('stripe')('sk_test_51LAAAoD0z8tAHUlRKaOTHtuzoTrKlkVr6mO29qpxCqvwbeUE6s1c2wBCdIpgxTjsnFdil27CbguG06w91ccN9PIw00F8o34NQn');

const session = await stripe.checkout.sessions.create({
  success_url: 'https://example.com/success',
  cancel_url: 'https://example.com/cancel',
  line_items: [
    {price: 'price_1LLTWWD0z8tAHUlR5A50eXLW', quantity: 2},
  ],
  mode: 'payment',
});
