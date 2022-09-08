const path = require('path');

module.exports = function (app) {
  app.get('/', function (req, res) {
    // res.sendFile(path.join(__dirname, '../../client/index.html'));
    //  serving up the index.html from the dist directory.
    res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
  });
};
