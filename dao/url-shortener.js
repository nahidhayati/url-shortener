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
};

module.exports = new UrlShortenerDAO();
