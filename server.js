'use strict';

const express = require('express');

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  console.log('Got request', JSON.stringify(req.connection.remoteAddress, null, 2));
  res.send('Hello world 12345\n' + process.env.PARAMTEST + ' - ' + process.env.PARAMTEST1 + '\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
