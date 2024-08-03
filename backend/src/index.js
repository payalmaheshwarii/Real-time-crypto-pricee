const express = require('express');
const mongoose = require('mongoose');
const priceRoutes = require('./routes/cryptoRoutes');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();

dotenv.config(); 

// Connect to MongoDB
mongoose.connect('mongodb+srv://payalmaheshwari:payalmaheshwari@cluster0.jsz17tt.mongodb.net/crypto', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


app.use(cors());
// Middleware (if any)
app.use(express.json()); // For parsing JSON request bodies

// Routes
app.use('/api', priceRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});