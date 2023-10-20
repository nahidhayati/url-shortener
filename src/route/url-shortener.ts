import express from 'express';
import * as urlShortenerController from '../controller/url-shortener.js';

const router = express.Router();

router.post('/', urlShortenerController.createShortUrl);
router.get('/:token', urlShortenerController.loadShortUrl);
router.get('/', urlShortenerController.getUrls);

export default router;
