import db from '../db/db.js';

export const createShortUrl = (originalUrl, shortUrl, clicks) => {
  return db('url').insert({
    originalUrl: originalUrl,
    shortUrl: shortUrl,
    clicks: clicks,
  });
};

export const update = (token, clicks) => {
  return db('url').where({ shortUrl: token }).update({ clicks: clicks });
};

export const getUrl = (token) => {
  return db('url').where({ shortUrl: token }).first();
};

export const getUrls = () => {
  return db('url');
};
