//make sure to have npm install before running the function also make sure no errors are found. 
// When the frontend JS sends a POST request to your Express backend to create a note,

//start with dependencies express is the app
const express = require('express');
const app = express(); // app is express 
var path = require("path");  
const PORT = process.env.PORT || 3000; //something for the PORT to listen incoming request 
const fs = require("fs");
app.use(express.json()); 
const addNotes = require("db.json"); // getting the db file to make the changes in the notes


app.use(express.static("public")); //using express.static and app.use to pull all the files from the public folder to use mostly from the css styling. 

app.use(express.urlencoded({extended: true})); //using the app to express acess to the body requirements (req) function 

app.get("assets/js/index.js"), function (req, res){
    res.sendFile(path.join(__dirname, "public/assets/js/index.js"))
}; // express reaching out to the index.js to send a file after the response 

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



// require("apiLinks")(app);
// require("htmlJsLinks")(app);

//starts the server to begin to listen to the PORT  and then will console log 
app.listen(PORT, function () {
    console.log("server is listening on: http://localhost:" + PORT);
}); //starts the server to begin to listen to the PORT  and then will console log 

// ------------------------------------------------------------------------------------------/
//need to create a function to parse the information 




//need to create a function to have another addNote appear after i is created



//creating a function for the post method to appear on the screen after a note is written and saved. an app post method lets you saved notes that you create and also post the notes on the side. 

app.post("/api/notes", function(req, res){

})

