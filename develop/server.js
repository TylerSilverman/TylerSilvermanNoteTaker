//make sure to have npm install before running the function also make sure no errors are found. 
// When the frontend JS sends a POST request to your Express backend to create a note,

//start with dependencies express is the app
const express = require('express');
const app = express();
var path = require("path"); // 
const PORT = process.env.PORT || 3000; //something for the PORT to listen incoming request 








//sets up for the Express app to handle data parsing

app.get("/", function(req, res){

   res.sendFile(path.join(__dirname, "public/index.html"))
}); //ROUTES interact with public index html database:

app.get("/notes", function(req,res){

    res.sendFile(path.join(__dirname, "public/notes.html"))
}); // ROUTES interact with public notes html database:

app.get("/api/notes", function(req, res){
    return res.json();
}); // API ROUTES interact with notes api database:

app.use(express.static("public")); //using express.static and app.use to pull all the files from the public folder to use for the css styling. 




// require("apiLinks")(app);
// require("htmlJsLinks")(app);


//the route files- gives the server a "map" of how to respond when users visits or request data from various URLs

// require("./routes/apiRoute")(app);
// require("./routes/htmlRoute")(app);

//starts the server to begin to listen to the PORT  and then will console log 
app.listen(PORT, function () {
    console.log("server is listening on: http://localhost:" + PORT);
}); //starts the server to begin to listen to the PORT  and then will console log 
