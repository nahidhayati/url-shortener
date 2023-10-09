const db = require('../db/db');

const createShortUrl = (originalUrl, shortUrl, clicks) => {
  return db('url').insert({
    original_url: originalUrl,
    short_url: shortUrl,
    clicks: clicks,
  });
};

const update = (token, clicks) => {
  return db('url').where({ short_url: token }).update({ clicks: clicks });
};

const getUrl = (token) => {
  return db('url').where({ short_url: token }).first();
};

const getUrls = () => {
  return db('url');
};

module.exports = {
  createShortUrl,
  update,
  getUrl,
  getUrls,
};
