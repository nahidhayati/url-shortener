const urlShortenerService = require('../service/url-shortener')

class UrlShortenerController {
    async createShortUrl(req, res) {
        try {
            await urlShortenerService.createShortUrl(req.body.originalUrl);
            res.redirect('/');
        } catch (err) {
            console.error(err);
        }
    };
};

module.exports = new UrlShortenerController();