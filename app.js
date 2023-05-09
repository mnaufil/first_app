const express = require('express');
const { array } = require('joi');
const app = express();

const customer = array[
    {id: 1, name: naufil},
    {id: 2, name: abdul},
    {id: 3, name: sufiyan},
    {id: 4, name: adnan}
];


app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('/masters/customer', (req, res) => {
    res.send('its working');
});

app.get('/masters/customer/:id', (req, res) => {
    res.send(req.params.id);
    res.send(req.query);//for query string paramter
});

app.listen(3000, () => console.log('listening on port 3000'));



// app.post();
// app.put();
// app.delete();
 