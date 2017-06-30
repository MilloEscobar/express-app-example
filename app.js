var express = require('express');

var app = express();

var port = process.env.PORT || 5000;

app.use(express.static('public'));
app.set('views', './src/views');

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



app.set('view engine', '.ejs');


app.use('/Books', bookRouter);

app.get('/', function (req, res) {
	res.render('index', { 
		title:'hello from render',
		nav: nav
		});
});

app.listen(port, function (err) {
	console.log('runing server on port: ' + port);
});