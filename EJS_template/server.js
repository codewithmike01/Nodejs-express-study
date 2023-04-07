const express = require('express');

app = express();

app.get('/', (req, res) => {
  res.send('Welcome');
});

app.listen(9000, () => console.log('Server Connected'));
