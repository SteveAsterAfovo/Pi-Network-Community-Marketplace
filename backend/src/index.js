// src/index.js

const express = require('express');
const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const itemRoutes = require('./routes/itemRoutes');
const transactionRoutes = require('./routes/transactionRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/items', itemRoutes);
app.use('/api/transactions', transactionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
