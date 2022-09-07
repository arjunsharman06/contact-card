const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

//This will work
app.use(express.urlencoded({ extended: true }));
// for using the client folder in server.js
app.use(express.static('../client'));
app.use(express.json());

// Getting the HTML route in server.js
require('./routes/htmlRoutes')(app);

app.listen(PORT, function () {
  console.log(`Listening on the PORT : ${PORT}`);
});
