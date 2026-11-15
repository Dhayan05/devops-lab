const express = require('express');
const app = express();

const version = process.env.APP_VERSION || 'blue-1';

app.get('/', (req, res) => {
    res.send(`Hello from ${version}`);
});

app.listen(3000, '0.0.0.0', () => {
    console.log(`Server running: ${version}`);
});
