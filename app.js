var config = require('./config');
var customers = require('./customers')(config);
var express = require('express');


var app = express();
app.use(express.static('public'));


app.get('/', function(req, res) {
  customers.getAllCustomer(function(customer, key) {
    var keycustomer = customers.map((customer) => Object.assign(customer, { id: customer.id || customer[key].id }));
    console.log(keycustomer)
  });
});

app.listen(8080);

console.log('Running on http://localhost:8080/');
