const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Healthcare demo is running');
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Healthcare app running on port 3000');
});
