const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

let root = path.join(__dirname, '../', 'build/')
app.use(express.static(root))

app.use(function(req, res, next) {
  if (req.method === 'GET' && req.accepts('html') && !req.is('json') && !req.path.includes('.')) {
    res.sendFile('index.html', { root })
  } else next()
});

app.listen(4000, function(){
	console.log('Server is running on 4000 port')
});