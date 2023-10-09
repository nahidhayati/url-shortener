const express = require('express');
const router = require('./routes')

const app = express();
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.get('/ping', (req, res) => {
    res.send('pong')
})

app.use(router);

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
})
