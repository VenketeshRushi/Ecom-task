const mongoose = require("mongoose");

const reqString = { type: String };
const reqNumber = { type: Number };
const reqArray = { type: Array };

const orderSchema = new mongoose.Schema(
  {
    ordersummry: {
      total: reqNumber,
      quantity: reqNumber,
    },
    cartItems: [
      {
        _id: reqString,
        title: reqString,
        gender: reqString,
        description: reqString,
        category: reqString,
        price: reqNumber,
        size: reqArray,
        color: reqString,
        rating: reqNumber,
        img: reqArray,
        quantity: reqNumber,
      },
    ],
    shippingdata: {
      name: reqString,
      addressLine: reqString,
      locality: reqString,
      state: reqString,
      country: reqString,
      email: reqString,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const order = mongoose.model("ordertask", orderSchema);

module.exports = order;
