//make sure to have npm install before running the function also make sure no errors are found. 
// When the frontend JS sends a POST request to your Express backend to create a note,

//start with dependencies express is the app
const express = require('express');

//have const value for  Express -- Express is the app and is the main function that is used in this server.js tab. 

const app = express();

//have something for the PORT to listen for incoming request 
const PORT = process.env.PORT || 3000;

//sets up for the Express app to handle data parsing
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// app.use(express.static("public"))
// require("apiLinks")(app);
// require("htmlJsLinks")(app);


//the route files- gives the server a "map" of how to respond when users visits or request data from various URLs

require("./routes/apiRoute")(app);
require("./routes/htmlRoute")(app);

//starts the server to begin to listen to the PORT  and then will console log 
app.listen(PORT, function () {
    console.log("line 26 server is listening on: http://localhost" + PORT);
})
