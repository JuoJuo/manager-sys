const express = require('express');
const fallback = require('express-history-api-fallback');
const path = require("path");
const compression = require('compression');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
app.use(compression());
const dir = path.resolve(__dirname, './dist');

const config = {
  target: 'http://localhost:3024',
  changeOrigin: true
};
app.use('/api', createProxyMiddleware(config));
app.use('/pic', createProxyMiddleware(config));

app.use(express.static(dir));
app.use(fallback('index.html', { root: dir }));

app.listen(8090, () => {
  console.log('http://localhost:8090/login');
});
