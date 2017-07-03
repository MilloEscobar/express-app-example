var express = require('express');
var bookRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var router = function (nav) {


	bookRouter.route('/')
		.get(function (req, res) {
			var url = 'mongodb://localhost:27017/libraryApp';

			mongodb.connect(url, function (err, db) {
				var collection = db.collection('books');
				collection.find({}).toArray(
					function (err, results) {
						res.render('books', { 
							title:'Books',
							nav: nav,
							books : results
						});
						db.close();
					}
				);
			});	
		});

bookRouter.route('/:id')
	.all(function (req, res, next) {
		var id = new ObjectID(req.params.id);
		var url = 'mongodb://localhost:27017/libraryApp';

		mongodb.connect(url, function (err, db) {
			var collection = db.collection('books');
			collection.findOne({_id: id},
				function (err, results) {
					req.book = results;
					next();
				}
			);		
		});	
	})
	.get(function (req, res) {
		res.render('book', { 
			title:'Book',
			nav: nav,
			book : req.book
		});
	});

	return bookRouter;

};


module.exports = router;