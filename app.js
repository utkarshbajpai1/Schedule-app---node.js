var express        = require('express');
var todoController = require('./controllers/todoController');

var app            = express();

app.set('view engine', 'ejs');

//app.use('/public', express.static('./public'));
app.use(express.static('./public')); //study deeply

todoController(app);

app.listen(3000);

console.log('we are listening to the port');
