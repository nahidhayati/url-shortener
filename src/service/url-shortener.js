import * as urlShortenerRepository from '../db/repository/url-shortener.js';
import shortId from 'shortid';

export const createShortUrl = (originalUrl) => {
  return urlShortenerRepository.createShortUrl(originalUrl, shortId.generate(), 0);
};

export const getUrl = (token) => {
  return urlShortenerRepository.getUrl(token);
};

export const update = (token, clicks) => {
  return urlShortenerRepository.update(token, clicks + 1);
};

export const getUrls = () => {
  return urlShortenerRepository.getUrls();
};

