const express = require('express');
const app = express();
const pool = require('./utils/db');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log('這裡是 404');
  res.send('404 not found');
});

app.listen(3001, () => {
  console.log('Server running at port 3001');
});
