var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var PORT = 3000;

var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/breached', (req, res) => {
  const {service, email} = req.query;
  request({
    headers: {
      'User-Agent': 'Pwnage-Checker-For-iOS'
    },
    uri: `https://haveibeenpwned.com/api/v2/${service}/${email}`,
    method: 'GET'
  }, function(err, req, data) {
    if(service === "breachedaccount" || data === ''){
      res.send(data)
    } else {
      res.send([JSON.parse(data)])
    }
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

