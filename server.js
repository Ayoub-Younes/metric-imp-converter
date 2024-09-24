const express     = require('express');
const bodyParser  = require('body-parser');
require('dotenv').config();
const apiRoutes         = require('./routes/api.js');
const path = require('path');

let app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'src', 'public')));

// Route to serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'views', 'index.html'));
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//Routing for API 
apiRoutes(app);  
    
//404 Not Found Middleware
app.use(function(req, res, next) {
  res.status(404)
    .type('text')
    .send('Not Found');
});

const port = process.env.PORT || 3000;

// listen for requests
const listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
