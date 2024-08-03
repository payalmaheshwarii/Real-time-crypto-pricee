const cryptoService = require('../services/cryptoService');

const getDetails = async (_, res) => {
  try {
    const cryptos = await cryptoService.getDetails();
    res.json(cryptos);
  } catch (error) {
    console.error('Error fetching cryptos:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getDetailsById = async (req, res) => {
  try {
    const { name } = req.params;
    const cryptos = await cryptoService.getDetailsById(name);
    const first20Stocks = cryptos.slice(0, 20);
    res.json(first20Stocks);
  } catch (error) {
    console.error('Error fetching cryptos:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getDetails,
  getDetailsById
};
