const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');

const adminRoutes =  require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

// Parsing the body for incoming requests.
app.use(bodyParser.urlencoded({ extended: false }));

// Giving access to Public folder to serve the CSS files.
app.use(express.static(path.join(__dirname, 'public')));

// Admin routes (Add product and products page) will be of type /admin/add-product.
app.use('/admin', adminRoutes);

// User Route. What user will see.
app.use(shopRoutes);

// Catch all middleware Route. Here status is set to 404 before sending response
app.use((req, res, send) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// Creating a server and listening to the requests.
app.listen(3000);