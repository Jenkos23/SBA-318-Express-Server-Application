// middleware/customHeader.js

function customHeader(req, res, next) {
    res.setHeader('X-Custom-Header', 'MyCustomValue'); // Set a custom header
    next(); // Pass control to the next middleware
  }
  
  module.exports = customHeader; 