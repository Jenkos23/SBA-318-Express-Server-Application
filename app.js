const express = require("express");
const bodyParser = require("body-parser");
const path = require("path"); //handle file path




//Import routes
const users = require("./routes/users");
const posts = require("./routes/posts");
const comments = require("./routes/comment");
const messages = require("./routes/messages");


const error = require("./utilities/error"); //Import error handling midware utilities

const customHeader = require("./middleware/customerHeader"); //Import custom header midware
const logger = require("./middleware/logger"); //Import logger midware




const app = express();
const port = 3000;


//Set the view engine to pug
app.set('view engine', 'pug');

//Set the directory for view
app.set('views', path.join(__dirname, 'views'));

//Serve static files from the 'style' directory
app.use(express.static(path.join(__dirname, 'style')));

//Parsing Middleware using  exp.bodyparsing built middleware
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));


//Use logger middleware
app.use(logger);
//Use customHeader middleware
app.use(customHeader);



//Use Routes
app.use("/api/users", users);
app.use("/messages", messages);






// 404 Middleware
app.use((req, res, next) => {
    next(error(404, "Resource Not Found"));
  });


// Error handling middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ error: err.message });
  });

  


app.listen(port, () => {
    console.log(`Server listening on port: ${port}.`);
});
