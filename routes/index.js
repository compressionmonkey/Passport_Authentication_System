const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Welcome'));
// request and response objects are being received
module.exports = router;