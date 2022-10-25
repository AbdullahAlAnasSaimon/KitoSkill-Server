const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('kito skill data running');
})

app.listen(port, () => {
  console.log('Kito Skill Running on port: ', port);
})