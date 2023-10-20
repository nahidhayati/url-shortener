import * as urlShortenerRepository from '../db/repository/url-shortener.js';
import shortId from 'shortid';

export const createShortUrl = (originalUrl: string) => {
  return urlShortenerRepository.insert(originalUrl, shortId.generate(), 0);
};

export const getUrl = (token: string) => {
  return urlShortenerRepository.getUrl(token);
};

export const update = (token: string, clicks: number) => {
  return urlShortenerRepository.update(token, clicks + 1);
};

export const getUrls = () => {
  return urlShortenerRepository.getUrls();
};
