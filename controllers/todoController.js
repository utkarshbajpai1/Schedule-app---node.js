var bodyParser       = require('body-parser');

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://gamwebdev:gamwebdev@ds041841.mlab.com:41841/gamwebdevster123', { useMongoClient: true })


var todoSchema = new mongoose.Schema(function(){
  item: String
});

var Todo = mongoose.model('Todo', todoSchema);

/*
var itemOne = Todo({item: "water flowers"}).save(function(err){
  if (err) throw err;
  console.log('item saved');
});
*/

/*
localhost
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/testaroo', { useMongoClient: true });

mongoose.connection.once('open', function(){
  console.log('connection has been established');
}).on('error', function(error){
  console.log('connection has been terminated');
});
*/

/*
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://gamwebdev:gamwebdev@ds041841.mlab.com:41841/gamwebdevster123', { useMongoClient: true })


var todoSchema = new mongoose.Schema(function(){
  item: String
});

var Todo = mongoose.model('Todo', todoSchema);

var itemOne = Todo({item: "water flowers"}).save(function(err){
  if (err) throw err;
  console.log('item saved');
});
*/


var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app){

  app.get('/todo', function(req, res){
    Todo.find({}, function(err, data){
      if (err) throw err;
      res.render('todo', { todos:data });
    });

  });

  app.post('/todo', urlencodedParser, function(req, res){
    var newTodo = Todo(req.body).save(function(err, data){
      if (err) throw err;
      res.json(data);
    });
  });

  app.delete('/todo/:item', function(req, res){
    Todo.find({item: req.params.item.relace(/\-/g, " ")}).remove(function(err, data){
      if (err) throw err;
      res.json(data);
    });
  });

};
