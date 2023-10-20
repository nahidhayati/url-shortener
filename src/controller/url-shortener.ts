import { Request, Response } from 'express';
import * as urlShortenerService from '../service/url-shortener.js';
import { getShortUrl } from '../utils/url-shortener.js';

export const createShortUrl = async (req: Request, res: Response) => {
  try {
    await urlShortenerService.createShortUrl(req.body.originalUrl);

    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

export const loadShortUrl = async (req: Request, res: Response) => {
  try {
    const urlInfo = await urlShortenerService.getUrl(req.params.token);

    if (!urlInfo) {
      return res.sendStatus(404);
    }

    await urlShortenerService.update(req.params.token, urlInfo.clicks);

    res.redirect(urlInfo.originalUrl);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

export const getUrls = async (req: Request, res: Response) => {
  try {
    const urls = await urlShortenerService.getUrls();

    const data = urls.map((url) => ({
      clicks: url.clicks,
      originalUrl: url.originalUrl,
      shortUrl: getShortUrl(req, url),
    }));

    res.render('index', { urls: data });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};
