/* eslint-disable */
const functions = require("firebase-functions");
const express = require("express");
const stripe = require("stripe")(
  "sk_test_51MekSYGsGIWBR0R5AACYg6uJsuwN6vaavwRKM5bih36rvcr5W94CPSgd3abGZGSl63iRaT8HhiuyaPCQMftrh84j0008i2yJnc"
);

const app = express();
// const baseUrl = "http://127.0.0.1:5001/clone-bonialiko/us-central1/api"
// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("Hello World"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// -Listen command
exports.api = functions.https.onRequest(app);
