//include Express
const express = require('express');

//set port
const port = 3000;

const app = express();

//ejs is templating engine
app.set('view engine','ejs');

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));

//reference test json file of users
var data = require('./test.json');

//Create server, deal with requests/responses

//home URL
app.get('/',(req,res) =>{
  let title = "Home Page: Horses";
	res.render('pages/index', {'title': title});
});

//about URL
app.get('/about',(req,res) =>{
  let title = "About Page: Dolphins";
	res.render('pages/about', {'title': title});
});

//users route
app.get('/users',(req,res)=>{
    let title = "Users Page";
    res.render('users/index',{
      'title': title,
      'users': data
    });
});

app.get('/users/view/:id', function(req, res) {
 let title = 'User Page';
 let id = req.params.id;
 res.render('users/view', {
     title: title,
     user: data[--id]
 });
});

//Set server to listen for requests
app.listen(port, () => {
  console.log(`Server running at port: ${port}/`);
  console.log(data);
});
