const urlShortenerDAO = require('../dao/url-shortener');
const shortId = require('shortid');

class UrlShortenerService {
    createShortUrl(originalUrl) {
        return urlShortenerDAO.createShortUrl(originalUrl, shortId.generate(), 0);
    };

    getUrl(token) {
        return urlShortenerDAO.getUrl(token)
    }

    update(token, clicks) {
        return urlShortenerDAO.update(token, clicks + 1)
    }

    getShortUrls() {
        return urlShortenerDAO.getShortUrls();
    };
};

module.exports = new UrlShortenerService();