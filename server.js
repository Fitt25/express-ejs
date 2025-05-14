//include Express
const express = require('express');

//set port
const port = 3000;

const app = express();

app.get

//Create server, deal with requests/responses
app.get('/',(req,res) =>{
	res.send(`
	  <h1>Here's my home page</h1>
    <p>Welcome to Express!</p>
  `);
});

app.get('/about',(req,res) =>{
	res.send(`
	  <h1>Welcome to Linda's Express About Page</h1>
    <p>Welcome to Express!</p>
  `);
});


//Set server to listen for requests
app.listen(port, () => {
  console.log(`Server running at port: ${port}/`);
});
