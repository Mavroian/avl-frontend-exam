const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const { createServer } = require('http');
const cors = require('cors');
const path = require('path');

const PORT = process.env.PORT || 5000

const app = express();
app.use(cors())

const dev = app.get('env') !== 'production';

if (!dev) {

  app.use(compression());
  app.use(morgan('common'));

  app.use(express.static(path.resolve(__dirname, 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}

if (dev) {
  app.use(morgan('dev'));
}

const server = createServer(app);

server.listen(PORT, error => {
  if (error) throw error;
  console.log(`Server started on port: ${ PORT }`);
})