const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const { request, response } = require('express');
const stripe = require('stripe')('sk_test_51HQYYvKuYGNAUx1HA110cbok9CDkECjK8vzFkWAgItDuyGSJhoXiCkpi3suWfvBzk6yMUs3Px4B0uZ9Jk6j9FEPO00IrX2zZij');

// - api


// - app config

const app = express();


// - middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - api root

app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create',async (request, response) => {
    const total = request.query.total;
    console.log('payment request recicved', total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,//subunits of the currency
        currency: 'used',
    });

    response.status(201).send({
        clientSecret : paymentIntent.client_secret,
    });
});


// - listen command
exports.api = functions.https.onRequest(app);

//example endpoint
//http://localhost:5001/clone-2b1ea/us-central1/api
