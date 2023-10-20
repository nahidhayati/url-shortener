import db from '../db.js';
import { Url } from '../types.js';

export const insert = (
  originalUrl: string,
  shortUrlToken: string,
  clicks: number
): Promise<number[]> => {
  return db<Url>('url').insert({
    originalUrl: originalUrl,
    shortUrlToken: shortUrlToken,
    clicks: clicks,
  });
};

export const update = (token: string, clicks: number): Promise<number> => {
  return db<Url>('url')
    .where({ shortUrlToken: token })
    .update({ clicks: clicks });
};

export const getUrl = (token: string): Promise<Url | undefined> => {
  return db<Url>('url').where({ shortUrlToken: token }).first();
};

export const getUrls = (): Promise<Url[]> => {
  return db<Url>('url');
};
