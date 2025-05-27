const express = require('express');
const app = express();

app.get('/api/endpoint', (req, res) => {
    console.log(req.url); // prints: '/api/endpoint'
    console.log(req.headers['user-agent']); // prints: axios/0.19.2
    // Note: this is just potential User-Agent output, the actual output depends on your request
    res.send('Hello World!');
});

app.listen(5000);
