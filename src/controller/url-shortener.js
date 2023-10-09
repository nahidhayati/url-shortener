const e = require('express');
const path = require('path');
const urlShortenerService = require('../service/url-shortener');

const createShortUrl = async (req, res) => {
  try {
    await urlShortenerService.createShortUrl(req.body.originalUrl);
    res.redirect('/');
  } catch (err) {
    console.error(err);
  }
};

const loadShortUrl = async (req, res) => {
  try {
    const urlInfo = await urlShortenerService.getUrl(req.params.token);

    if (!urlInfo) {
      return res.sendStatus(404);
    }

    await urlShortenerService.update(req.params.token, urlInfo.clicks);
    res.redirect(urlInfo.original_url);
  } catch (err) {
    console.error(err);
  }
};

const getUrls = async (req, res) => {
  try {
    const urls = await urlShortenerService.getUrls();
    urls.forEach(
      (url) =>
        (url.short_url = `${req.protocol}://${path.join(
          req.headers.host,
          url.short_url
        )}`)
    );
    res.render('index', { urls: urls });
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  createShortUrl,
  loadShortUrl,
  getUrls,
};
