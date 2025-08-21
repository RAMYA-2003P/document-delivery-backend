const express = require('express');
const cors = require('cors');
// const connectDB = require('./config/db');

const connectDB = require('./config/db');
const env = require('./config/env');
const authRoutes = require('./routes/authRoutes');
const requestRoutes = require('./routes/requestRoutes');
//const adminarticleRequests= require('./routes/adminRoutes');
const adminrequestRoutes = require('./routes/adminRoutes');


// Initialize Express
const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);


app.use('/api/requests', requestRoutes);

app.use('/api/article-requests', adminrequestRoutes);
//app.use('/api/admin', adminRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

module.exports = app;