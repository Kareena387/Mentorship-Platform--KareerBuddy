require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors if used
const connectDB = require('./database');
const authRoutes = require('./routes/authRoutes');
<<<<<<< HEAD
const cors = require("cors");

=======
>>>>>>> 2f908fbd4ea2fe66a71dd6209d608480b6913929

const app = express();

// Middleware
app.use(cors()); // Apply cors middleware
app.use(bodyParser.json());
<<<<<<< HEAD
app.use(cors());

app.use('/api/auth', authRoutes);

// Connect to the database and log a success message
=======

// Routes
app.use('/api/auth', authRoutes);

// Database connection and server start
>>>>>>> 2f908fbd4ea2fe66a71dd6209d608480b6913929
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
