/**
 * Create an express server
    Connect to mongoDB
    Initialize Express
    Initialize Express Middleware
    create a simple get request route
    Inject route
    Listen to app
 */

    const express = require('express');
    const connectDB = ('./db');
    require('dotenv').config();
    const {PORT} = process.env;


    // Connect to database
    connectDB();

    // Initialize Express
    const app = express();

    // Initialize Express Middleware
    app.use(express.json({extended: false}));

    const port = process.env.PORT || PORT;

    app.get('/', (req, res) => {
       res.json({msg: `Hello Express Server`});
    });
    app.listen(port, () => console.log(`listening on http://localhost:${port}`));