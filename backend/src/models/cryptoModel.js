const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
  symbol: String,
  price: Number,
  timestamp: Date,
});

const Crypto = mongoose.model('Crypto', cryptoSchema);

module.exports = Crypto;