const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, "/angular-app/dist/angular-app")));



require('./routes')(app);

app.listen(1337, ()=> console.log("Listening on port 1337"));