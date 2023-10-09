const urlShortenerDAO = require('../dao/url-shortener');
const shortId = require('shortid');

const createShortUrl = (originalUrl) => {
  return urlShortenerDAO.createShortUrl(originalUrl, shortId.generate(), 0);
};

const getUrl = (token) => {
  return urlShortenerDAO.getUrl(token);
};

const update = (token, clicks) => {
  return urlShortenerDAO.update(token, clicks + 1);
};

const getUrls = () => {
  return urlShortenerDAO.getUrls();
};

module.exports = {
  createShortUrl,
  getUrl,
  update,
  getUrls,
};
