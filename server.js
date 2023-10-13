import express from 'express';
import dotenv from 'dotenv';
import router from './src/routes/index.js';

dotenv.config();

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.use(router);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
