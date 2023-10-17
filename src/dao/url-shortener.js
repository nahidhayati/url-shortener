import db from '../db/db.js';

export const createShortUrl = (originalUrl, shortUrlToken, clicks) => {
  return db('url').insert({
    originalUrl: originalUrl,
    shortUrlToken: shortUrlToken,
    clicks: clicks,
  });
};

export const update = (token, clicks) => {
  return db('url').where({ shortUrlToken: token }).update({ clicks: clicks });
};

export const getUrl = (token) => {
  return db('url').where({ shortUrlToken: token }).first();
};

export const getUrls = () => {
  return db('url');
};
