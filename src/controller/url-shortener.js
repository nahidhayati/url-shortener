import path from 'path';
import * as urlShortenerService from '../service/url-shortener.js';

export const createShortUrl = async (req, res) => {
  try {
    await urlShortenerService.createShortUrl(req.body.originalUrl);
    res.redirect('/');
  } catch (err) {
    console.error(err);
  }
};

export const loadShortUrl = async (req, res) => {
  try {
    const urlInfo = await urlShortenerService.getUrl(req.params.token);

    if (!urlInfo) {
      return res.sendStatus(404);
    }

    await urlShortenerService.update(req.params.token, urlInfo.clicks);
    res.redirect(urlInfo.originalUrl);
  } catch (err) {
    console.error(err);
  }
};

export const getUrls = async (req, res) => {
  try {
    const urls = await urlShortenerService.getUrls();
    console.log(urls)
    urls.forEach(
      (url) =>
        (url.shortUrl = `${req.protocol}://${path.join(
          req.headers.host,
          url.shortUrlToken
        )}`)
    );
    res.render('index', { urls: urls });
  } catch (err) {
    console.error(err);
  }
};
