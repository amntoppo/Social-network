var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {
  useMongoClient: true
});

var Schema = mongoose.Schema;

var userDataSchema = new Schema({
  username: {type: String, required:true},
  email: {type: String, required: true},
  password: {type: String, requried: true},
  confirmPassword: {type: String, required:true}
}, {collection: 'social-network'});

var userData  = mongoose.model('social-network', userDataSchema);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register', function(req, res, next) {
  var data = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.pass,
    confirmPassword: req.body.confirmpass
  };
  var addingData = new userData(data);
  addingData.save();
  console.log(addingData.username);
  res.redirect('/');
});

module.exports = router;
