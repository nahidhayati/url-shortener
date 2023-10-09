const e = require('express');
const path = require('path');
const urlShortenerService = require('../service/url-shortener')

class UrlShortenerController {

    async createShortUrl(req, res) {
        try {
            await urlShortenerService.createShortUrl(req.body.originalUrl);
            res.redirect('/');
        } catch (err) {
            console.error(err);
        };
    };

    async loadShortUrl(req, res) {
        try {
            const urlInfo = await urlShortenerService.getUrl(req.params.token)

            if (urlInfo) {
                await urlShortenerService.update(req.params.token, urlInfo.clicks)
                res.redirect(urlInfo.original_url)
            } else {
                res.sendStatus(404);
            }

        } catch (err) {
            console.error(err);
        };
    };

    async getShortUrls(req, res) {
        try {
            const shortUrls = await urlShortenerService.getShortUrls();
            shortUrls.forEach(url => url.short_url = `${req.protocol}://${path.join(req.headers.host, url.short_url)}`);
            res.render('index', { shortUrls: shortUrls });
        } catch (err) {
            console.error(err);
        };
    };
};

module.exports = new UrlShortenerController();