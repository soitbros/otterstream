var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var loadUser = require('./middleware/loadUser');


require('dotenv').load();

var app = express();

app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/otterstream');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(loadUser);


var indexRouter = require('./routes/index');
var ottersRouter = require('./routes/api/otters');
var usersRouter = require('./routes/api/users');


app.use('/', indexRouter);
app.use('/api/otters', ottersRouter);
app.use('/api/users', usersRouter);



app.listen(3000, function(){
  console.log('...listening on 3000');
})
