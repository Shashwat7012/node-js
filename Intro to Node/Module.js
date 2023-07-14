// Consider modules to be the same as JavaScript libraries.

// A set of functions you want to include in your application.
// Node.js has a set of built-in modules which you can use without any further installation.

// Look at our Built-in Modules Reference for a complete list of modules.

// To include a module, use the require() function with the name of the module:
// var http = require('http');
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('Shashwat');
//   }).listen(8080);

  //We can create our own module:-
//   Use the exports keyword to make properties and methods available outside the module file.
exports.myDateTime = function(){
    return Date();
};