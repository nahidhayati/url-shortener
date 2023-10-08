const express = require('express');

const app = express();
app.set('view engine', 'ejs')

app.get('/ping', (req, res) => {
    res.send('pong')
})

app.get('/', (req, res) => {
    res.render('index')
})

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
})
