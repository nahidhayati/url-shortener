import * as urlShortenerDAO from '../dao/url-shortener.js';
import shortId from 'shortid';

export const createShortUrl = (originalUrl) => {
  return urlShortenerDAO.createShortUrl(originalUrl, shortId.generate(), 0);
};

export const getUrl = (token) => {
  return urlShortenerDAO.getUrl(token);
};

export const update = (token, clicks) => {
  return urlShortenerDAO.update(token, clicks + 1);
};

export const getUrls = () => {
  return urlShortenerDAO.getUrls();
};

