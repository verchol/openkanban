var userCtrl = require('../controllers/userCtrl.js');


module.exports = function (app) {

    app.get('/user/login/:username/:password', userCtrl.login);
   app.get('/', function(req , res){
   	  var d = new Date();
   	  res.json(d);
   });


}