// require('dotenv').config();

// const cors = require('cors');

// const bodyParser  =  require ( 'body-parser' )

// const express = require('express');

// const router = require('../src/router');

// const port = process.env.PORT || 8000;

// const app = express();

// app.use ( bodyParser . urlencoded ( {  extended : false  } ) )

// app.use(cors('*'));


// app.use(express.json());

// app.use(router);

// app.listen(port, () => {
//   console.log(`Server listening on port=${port}`);
// });

const app = require('express')();
const { v4 } = require('uuid');

app.get('/api', (req, res) => {
  const path = `/api/item/${v4()}`;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.send(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.get('/api/item/:slug', (req, res) => {
  const { slug } = req.params;
  res.send(`Item: ${slug}`);
});

module.exports = app;