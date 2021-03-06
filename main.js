const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(3000);

console.log('servidor corriendo en puerto: 3000');