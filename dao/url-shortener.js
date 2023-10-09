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

    async getShortUrls() {
        const shortUrls = await db('url');
        return shortUrls;
    }
};

module.exports = new UrlShortenerDAO();
