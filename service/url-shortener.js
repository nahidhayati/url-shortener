const urlShortenerDAO = require('../dao/url-shortener');
const shortId = require('shortid');

class UrlShortenerService {
    createShortUrl(originalUrl) {
        return urlShortenerDAO.createShortUrl(originalUrl, shortId.generate(), 0);
    };

    getShortUrls() {
        return urlShortenerDAO.getShortUrls();
    };
};

module.exports = new UrlShortenerService();