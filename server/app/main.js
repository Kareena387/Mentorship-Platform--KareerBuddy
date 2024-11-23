require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./database');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
