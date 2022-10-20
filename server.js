const express = require('express');
// import mongoose
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('./routes'));

// This tells mongoose which database we want to connect to
// MongoDB will find and connect to the database if it exists or create the database if it doesn't.
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/pizza-hunt', {
    // configuration options
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
