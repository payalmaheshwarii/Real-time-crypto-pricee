const axios = require('axios');
const Crypto = require('../models/cryptoModel'); 
const cron = require('node-cron');

const fetchAndStoreData = async () => {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin,dogecoin,binancecoin&vs_currencies=usd');
    const data = response.data;

    console.log({data})

    const crypto = Object.entries(data).map(([symbol, price]) => ({
      symbol,
      price: price.usd,
      timestamp: new Date(),
    }));

    await Crypto.insertMany(crypto);
  } catch (error) {
    console.error('Error fetching and storing data:', error);
  }
};


const job = cron.schedule('*/10 * * * * *', fetchAndStoreData);
job.start();

const getDetails = async () => {
  try {
    const cryptos = await Crypto.find().sort({ timestamp: -1 });
    return cryptos;
  } catch (error) {
    console.error('Error fetching prices:', error);
    throw error; 
  }
};


const getDetailsById = async (symbol) => {
  try {
    const cryptoPrices = await Crypto.find({ symbol }).sort({ timestamp: -1 });
    if (!cryptoPrices) {
      throw new Error('Price not found');
    }
    return cryptoPrices;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getDetails,
  getDetailsById
};
