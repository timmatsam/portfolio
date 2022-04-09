const express = require('express');
const path = require('path');

const app = express();

const port = 3000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Portfolio Website started on Port ${port}`);
});

app.use(express.static('public'));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});
