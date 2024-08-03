const express = require('express');
const cryptoController = require('../controllers/cryptoController');
const router = express.Router();

router.get('/crypto', cryptoController.getDetails);
router.get('/crypto/:name', cryptoController.getDetailsById);

module.exports = router;
