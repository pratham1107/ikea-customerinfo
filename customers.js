var url = require('url');
module.exports = function(config) {

  var gcloud = require('google-cloud');

  var datastore = gcloud.datastore({
    projectId: config.projectId,
    keyFilename: config.keyFilename
  });


  function getAllCustomer(callback) {
    var query = datastore.createQuery(['CUSTOMERIKEA']);
    datastore.runQuery(query, (err, customer) => callback(err, customer, datastore.KEY));
  }

  
  

  return {
    getAllCustomer: getAllCustomer
  };
};
