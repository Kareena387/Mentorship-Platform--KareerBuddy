require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors if used
const connectDB = require('./database');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware
app.use(cors()); // Apply cors middleware
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);

// Database connection and server start
connectDB()
    .then(() => {
        console.log('Database connected successfully.');

        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => {
        console.error('Database connection failed:', err.message);
        process.exit(1); // Exit process if DB connection fails
    });
