'use strict';

const express = require('express');

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  console.log('Got request', JSON.stringify(req.connection.remoteAddress, null, 2));
  res.send('Hello world 1234 martin\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
