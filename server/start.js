// Transpile ES6 to ES5
require('babel/register');

var chalk = require('chalk');

// Returns a promise from ./db/index.js
var port = (process.env.PORT || 4545);
var app = require('./app');
  
// Start the server

(new Promise(function(resolve, reject) {
  app.listen(port, function() {
    console.log('The server is listening on port', chalk.green.bold(port), 'and loves you very much.');
    return resolve();
  });
}))    
.catch(function(err) {
  console.log('Problem starting up!', chalk.red(err.message));
  console.log('I\'m out!');
  process.kill(1);
});
