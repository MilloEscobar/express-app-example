var express = require('express');
var bodyParser = require('body-parser');
var app = express();

/*
*MY SQL CONNECTION
*/
// var sql = require('mssql');
// var config = {
// 	user: 'books',
// 	password: 'password',
// 	server: 'example.com',//can be localhost instance
// 	database:'Name',
// 	options: {
// 		encrypt: true //windows azure
// 	}
// };

// sql.connect(config, function (err) {
// 	if (err) {
// 		console.log(err);
// 	}else{
// 		console.log('running sql')
// 	}
	
// });

var port = process.env.PORT || 5000;

var nav = [{
			Text:'Home',
			Link:'/' 
		},{
			Text:'Books',
			Link:'/Books' 
		},{	
			Text:'Authors',
			Link:'/Authors'
		}];

var bookRouter = require('./src/routes/bookRoutes')(nav);
var adminRouter = require('./src/routes/adminRoutes')(nav);
var authRouter = require('./src/routes/authRoutes')(nav);


app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.set('views', './src/views');

app.set('view engine', '.ejs');

app.use('/Books', bookRouter);
app.use('/Admin', adminRouter);
app.use('/Auth', authRouter);

app.get('/', function (req, res) {
	res.render('index', { 
		title:'hello from render',
		nav: nav
		});
});

app.listen(port, function (err) {
	console.log('runing server on port: ' + port);
});