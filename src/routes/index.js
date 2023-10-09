const express = require('express');
const urlShortenerController = require('../controller/url-shortener');

const router = express.Router();
router.post('/', urlShortenerController.createShortUrl);
router.get('/:token', urlShortenerController.loadShortUrl);
router.get('/', urlShortenerController.getUrls);

module.exports = router;
