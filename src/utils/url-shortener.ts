import path from 'path';
import { Request } from 'express';
import { Url } from '../db/types.js';

export const getShortUrl = (req: Request, url: Url) => {
  return `${req.protocol}://${path.join(
    req.headers.host || '',
    url.shortUrlToken
  )}`;
};
