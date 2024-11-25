require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./database');
const authRoutes = require('./routes/authRoutes');
<<<<<<< HEAD
=======
const cors = require("cors");

>>>>>>> 38adc6d5eed44e57b237a02d8df3e95c25ccc280

const app = express();

app.use(bodyParser.json());
<<<<<<< HEAD

app.use('/api/auth', authRoutes);

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
=======
app.use(cors());

app.use('/api/auth', authRoutes);

// Connect to the database and log a success message
connectDB()
    .then(() => {
        console.log('Database connected successfully.');

        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => {
        console.error('Database connection failed:', err.message);
        process.exit(1);
    });
>>>>>>> 38adc6d5eed44e57b237a02d8df3e95c25ccc280
