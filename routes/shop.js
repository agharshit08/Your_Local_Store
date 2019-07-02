// This is the Route what user will see.
const path = require('path');
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// Home Page. Listen only for GET requests.
router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;