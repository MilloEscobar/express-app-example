var express = require('express');
var bookRouter = express.Router();
/*
*MY SQL CONNECTION
*/
//var sql = require('mssql');

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

		/*
		*MY SQL CONNECTION
		*/

		// var request = new sql.Request();
		// request.query('select * from books',
		// 				function (err, recordset) {
		// 					console.log(recordset);
		// 					res.render('books', { 
		// 						title:'Books',
		// 						nav: nav,
		// 						books : recordset
		// 					});
		// 				});
		res.render('books', { 
		title:'Books',
		nav: nav,
			books : books
		});
	});

	bookRouter.route('/:id')
	.all(function (req,res,next) {
				var id = req.params.id;
		/*
		*MY SQL CONNECTION
		*/

		// var ps = new sql.PreparedStatement();
		// ps.input('id', sql.Int);
		// ps.prepare('select * from books where id = @id',
		// function(err) {
		// 	ps.execute({id:req.params.id},
		// 		function (err, recordset) {
		// 			if (recordset.length === 0) {
		// 				res.status(404).send('Not found');
		// 				next();
		// 			}else{
		// 				req.book = recordset[0];
		// 				next();
		// 			}
					
		// 		});
		// });
			
		// res.render('book', { 
		// title:'Book',
		// nav: nav,
		// 	book : books[id]
		// });
	})
	.get(function (req, res) {
		res.render('books', { 
			title:'Books',
			nav: nav,
			books : req.book
		});
	});

	return bookRouter;

}


module.exports = router;