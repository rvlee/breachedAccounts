var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var PORT = process.env.PORT || 5000;

var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/breached', (req, res) => {
  const {service, searchText} = req.query;
  request({
    headers: {
      'User-Agent': 'Pwnage-Checker-For-iOS'
    },
    uri: `https://haveibeenpwned.com/api/v2/${service}/${searchText}`,
    method: 'GET'
  }, function(err, req, data) {
    res.json(data)
  })
})

app.get('/breaches', (req, res) => {
  request({
    headers: {
      'User-Agent': 'Pwnage-Checker-For-iOS'
    },
    uri: `https://haveibeenpwned.com/api/v2/breaches`,
    method: 'GET',
  }, function(err, req, data) {res.send(data)})
})


app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}`);
})

