//include Express
const express = require('express');

//set port
const port = 3000;

const app = express();

//ejs is templating engine
app.set('view engine','ejs');

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));

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


//Set server to listen for requests
app.listen(port, () => {
  console.log(`Server running at port: ${port}/`);
});
