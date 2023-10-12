const express = require('express');
const router = require('./src/routes');
require('dotenv').config();

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.use(router);

const port = process.env.PORT || 8081;

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
