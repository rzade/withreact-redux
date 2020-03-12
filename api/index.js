const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(bodyParser.json({limit: '500mb'}));
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }));

let root = path.join(__dirname, '../', 'build/');
app.use(express.static(root));
app.use(function(req, res, next) {
  if (req.method === 'GET' && req.accepts('html') && !req.is('json') && !req.path.includes('.')) {
    res.sendFile('index.html', { root })
  } else next()
});

app.listen(4000, function(){
	console.log('Server is running on 4000 port')
});