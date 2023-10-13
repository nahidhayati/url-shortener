import db from '../db/db.js';

export const createShortUrl = (originalUrl, shortUrl, clicks) => {
  return db('url').insert({
    original_url: originalUrl,
    short_url: shortUrl,
    clicks: clicks,
  });
};

export const update = (token, clicks) => {
  return db('url').where({ short_url: token }).update({ clicks: clicks });
};

export const getUrl = (token) => {
  return db('url').where({ short_url: token }).first();
};

export const getUrls = () => {
  return db('url');
};
