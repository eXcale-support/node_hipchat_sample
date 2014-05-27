var express = require('express');
var router = express.Router();
var Hipchat = require('node-hipchat');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
  if (req['headers']['x-forwarded-for']) {
    var hipchat = new Hipchat('your api key');    // API KEY を設定
    var params = {
      room: 'your room id',                       // Room ID を設定
      from: 'Express',
      message: '@all Accessed by ' + req['headers']['x-forwarded-for'],
      message_format: 'text',
      notify: true,
      color: 'red'
    };
    hipchat.postMessage(params, function(data){});
  }
});

module.exports = router;
