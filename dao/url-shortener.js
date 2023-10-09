const db = require('../db/db')

class UrlShortenerDAO {
    async createShortUrl(originalUrl, shortUrl, clicks) {
        const [id] = await db('url')
            .insert({
                original_url: originalUrl,
                short_url: shortUrl,
                clicks: clicks
            })
            .returning('id');
        return id;
    };

    async getShortUrls() {
        const shortUrls = await db('url')
        return shortUrls;
    }
};

module.exports = new UrlShortenerDAO();
