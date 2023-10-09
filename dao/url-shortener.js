const db = require('../db/db')

class UrlShortenerDAO {
    async createShortUrl(originalUrl, shortUrl, clicks) {
        await db('url')
            .insert({
                original_url: originalUrl,
                short_url: shortUrl,
                clicks: clicks
            });
    };

    async update(token, clicks) {
        await db('url')
            .where({ short_url: token })
            .update({ clicks: clicks });
    };

    async getUrl(token) {
        const url = await db('url')
            .where({ short_url: token })
            .first();
        return url
    };

    async getUrls() {
        return await db('url');
    };
};

module.exports = new UrlShortenerDAO();
