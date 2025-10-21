const express = require('express');
const cors = require('cors');
const aiRoutes = require('./src/routes/ai.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World from Code Review Backend 🚀');
});

app.use('/ai', aiRoutes);

module.exports = app;
