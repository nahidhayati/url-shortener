import dotenv from 'dotenv';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const appDir = dirname(fileURLToPath(import.meta.url));

dotenv.config({ path: `${appDir}/.env` });
