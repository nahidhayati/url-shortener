const express = require('express');
const urlShortenerController = require('../controller/url-shortener');


const router = express.Router();
router.post('/', urlShortenerController.createShortUrl);
router.get('/', urlShortenerController.getShortUrls);

module.exports = router;