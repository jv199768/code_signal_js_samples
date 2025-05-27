const express = require('express'); // importing Express.js
const app = express(); // Instantiating Express.js app server instance
const port = 5000; // The server will be listening on port 5000

app.get('/api', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
