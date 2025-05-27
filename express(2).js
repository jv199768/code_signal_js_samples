const express = require('express');
const app = express();

// Middlewares
app.use(function (req, res, next) {
  console.log('Time of request:', Date.now()); 
  next();   // go to the next middleware
});
app.use(function (req, res, next) {
  console.log('Request method:', req.method);
  next();   // go to the next middleware
});

// Routes
app.get('/api/star/:id', (req, res) => {
  const starId = req.params.id;  // retrieving a path parameter
  const data = starData[starId] || {}; 
  res.json(data); // respond with the information of the star with the specified ID
});
app.get('/api/stars', function (req, res) {
  const starType = req.query.type || ''; // retrieving a query parameter
  const data = starData.filter(star => star.type === starType)[0] || {}; // finding the star by its type
  res.json(data); // respond with the information of the stars with a particular type
});

app.listen(5000);   // Our server listening on port 5000
