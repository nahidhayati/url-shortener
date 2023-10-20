import '../env.js';
import express from 'express';
import router from './route/url-shortener.js';

const port = process.env.PORT;
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
