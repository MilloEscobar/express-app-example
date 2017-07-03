var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var router = function (nav) {

	adminRouter.route('/addBooks')
	.get(function (req, res) {
		var url = 'mongodb://localhost:27017/libraryApp';
		var book = {
						title:'War1',
						genre:'Fiction',
						author: 'author2',
						read: false
					};
		mongodb.connect(url, function (err, db) {
			var collection = db.collection('books');
			collection.insertOne(book, function (err, results) {
				res.send(results);
				db.close();
			});
		});
		//res.send('inserting books');
	});

	return adminRouter;

};


module.exports = router;