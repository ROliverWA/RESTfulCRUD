const express = require('express');
const app = express();
const bodyParser = require('express');
const path = require('path');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "/angular-app/dist/angular-app")));
app.set('views', __dirname + '/views');


require('./routes')(app);

app.listen(1337, ()=> console.log("Listening on port 1337"));