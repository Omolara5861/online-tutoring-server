/**
 * Create a connection function for mongoDB
    Start a local mongoDB server connection

    Initialize Express
    Initialize Express Middleware
    create a simple get request route
    Inject route
    Listen to app
 */
const mongoose = require('mongoose');
require('dotenv').config();
const {MONGO_URI} = process.env;

// Connection function
const connectDB = () => {
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('MongoDB Connected...')
        // Seed Data
    })
    .catch(err => {
        console.log(err.messsage);

        // Exist with failure
        process.exit(1);
    });
}