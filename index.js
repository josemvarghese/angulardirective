var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

// var configDB = require('./config/database.js');
// mongoose.connect(configDB.url); // connect to our database

// var index = require('./routes/login');
// var tasks = require('./routes/tasks');
// var login = require('./routes/login');
// // required for passport
// app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
// app.use(passport.initialize());
// app.use(passport.session()); // persistent login sessions
// app.use(flash()); // use connect-flash for flash messages stored in session


var port = 3000;
var app = express();

// mongodb://<jose>:<jose>@ds147052.mlab.com:47052/nodesession
// view engine
// app.set('views',path.join(__dirname,'views'));
// app.set('view engine','ejs');
// app.engine('html',require('ejs').renderFile);



// Set static folder

app.use(express.static(path.join(__dirname,'client')));



// Body parser middileware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));




// app.use('/',index);
// app.use('/api',login);
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/index.html'));
});
// app.get('/signup', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client/login/signup.html'));
// });
// app.get('/signin', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client/login/signin.html'));
// });

// app.use('/',index);

app.listen(port, function() {
	console.log('server running '+port);
});




