import './env.js'
import express from 'express';
import router from './src/route/url-shortener.js';

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.use(router);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
