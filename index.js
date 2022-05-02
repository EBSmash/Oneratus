const cors = require('cors');
const express = require('express');
const app = express();
const port = 8008;

app.use(cors());

app.get('/', (req, res) => {
    res.type('text/plain');
    res.send('Oneratus');
})

app.get('/version', (req, res) => {
    res.type('text/plain');
    res.send(require('./package.json').version);
})

app.get('/api/1/client/jar', (req, res) => {
    res.status(403)
    res.type('text/plain');
    res.send("Who Is This For Again?")
})

app.get('/api/1/client/jar/:username', (req, res) => {
    const name = req.params.username;
    const hwid = req.query.hwid;

    if (name && hwid == null){
        res.status(403)
        res.type('text/plain');
        res.send("Hold on did your computer not tell us who it is?")
    }else{
        const file = `${__dirname}/api/1/client.jar`;
        res.download(file);
    }
})

app.get('/api/1/installer/jar', (req, res) => {
    res.status(403)
    res.type('text/plain');
    res.send("Who Is This For Again?")
})

app.get('/api/1/client/installer/:username', (req, res) => {
    const name = req.params.username;

    if (name == null){
        res.status(403)
        res.type('text/plain');
        res.send("Who Is This For Again?")
    }else{
        const file = `${__dirname}/api/1/installer.jar`;
        res.download(file);
    }
})

app.listen(port, () => {
    console.log(`Webserver listening on ::${port}`)
});