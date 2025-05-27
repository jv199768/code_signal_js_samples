const express = require('express');
const app = express();

app.get('/api/about', (req, res) => {
    res.send('About page');
});

app.get('/api/items', (req, res) => {
    res.json({ item1: 'Shirt', item2: 'Pants' });
});
