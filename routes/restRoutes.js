module.exports = function(app) {
    var restController = require('../controllers/restController');
  
    app.route('/api/uploadData').post(restController.uploadData);

};
