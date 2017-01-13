var express = require('express');
var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017/db');

var News = require('./models/news');
var Numbers = require('./models/numbers');
var Roster = require('./models/roster');



var router = express.Router();

router.use(function(req, res, next) {
	// do logging
  //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');
  res.setHeader('Access-Control-Allow-Origin', 'http://104.131.167.44');
	console.log('Something is happening.');
	next();
});

router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });
});


// on routes that end in /bears 
// ----------------------------------------------------
router.route('/news')

	.post(function(req, res) {

		var news = new News();

    news.id = req.body.id;
    news.title = req.body.title;
    news.date = req.body.date;
    news.name = req.body.name;
		news.article = req.body.article;

		news.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'News Article Created!' });
		});


	})

	.get(function(req, res) {
		News.find(function(err, news) {
			if (err)
				res.send(err);

			res.json(news);
		});
	});


  //Test for react thunk
router.route('/count')
  .get(function(req, res) {
		Numbers.find(function(err, n) {
			if (err)
				res.send(err);

			res.json(n);
		});
	})
  .post(function(req, res) {

		var number = new Numbers();

    number.count = req.body.count;

		number.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'Number Saved :D' });
		});


	});



  router.route('/roster')
    .get(function(req, res) {
  		Roster.find(function(err, n) {
  			if (err)
  				res.send(err);

  			res.json(n);
  		});
  	})
    .post(function(req, res) {

  		var player = new Roster();

      player.id = req.body.id;
      player.age = req.body.age;
      player.name = req.body.name;
      player.country = req.body.country;
      player.bio = req.body.bio;
      player.pic = req.body.pic;
      player.game = req.body.game;



  		player.save(function(err) {
  			if (err)
  				res.send(err);

  			res.json({ message: 'Player Saved :D' });
  		});


  	});



module.exports = router;
