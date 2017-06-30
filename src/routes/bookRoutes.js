var express = require('express');

var bookRouter = express.Router();

var router = function (nav) {
var books = [{
				title:'War',
				genre:'Fiction',
				author: 'author2',
				read: false
			},{
				title:'War2',
				genre:'Comedy',
				author: 'author3',
				read: false
			},{
				title:'War3',
				genre:'Drama',
				author: 'author4',
				read: false
			},{
				title:'War4',
				genre:'History',
				author: 'author5',
				read: false
			},{
				title:'War5',
				genre:'Biography',
				author: 'author6',
				read: false
			},{
				title:'War6',
				genre:'Documentary',
				author: 'author7',
				read: false
			}];

bookRouter.route('/')
	.get(function (req, res) {
		res.render('books', { 
		title:'Books',
		nav: nav,
			books : books
		});
	});

bookRouter.route('/:id')
	.get(function (req, res) {
		var id = req.params.id;
		res.render('book', { 
		title:'Book',
		nav: nav,
			book : books[id]
		});
	});

	return bookRouter;

}


module.exports = router;