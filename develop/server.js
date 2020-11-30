//MAKE SURE TO BE IN THE TERMINAL /develop AND THEN TYPE IN node server.js AFTER WILL PROMPT TO MY LOCAL HOST
//MAKE SURE TO HAVE npm install BEFORE RUNNING THE FUNCTION
//YOU CAN CHECK FOR ERRORS BY TYPING IN THE TERMINAL npm run test TO MAKE NO ERRORS
//IN THE FOLDER, SHOULD HAVE DEVELOP, ./db/db/json, PUBLIC, ASSETS WITH (2) HTML, SERVER.JS, AND ALSO NODE_MODULES 
//TO POST TO HERUKU AFTER COMPLETING CHANGES, git push heruku main THAT WILL PUSH IT 
// When the frontend JS sends a POST request to your Express backend to create a note,

//start with dependencies express is the app
const express = require('express');
const app = express(); // app is express 
const PORT = process.env.PORT || 3000; //something for the PORT to listen incoming request 
const fs = require("fs");
var dataBase = require("./db/db.json");// getting the db file to make the changes in the notes
const router = require('express').Router();
console.log(dataBase); //console log whats in the db.json file which is located in the db folder then db.json
let addMore = [];
// //
const {v4 : uuidv4} = require('uuid')

//the app.use is setting up the function for express to handle the data parsing. 
app.use(express.json()); //function to call the inforamtion to the body req. 

app.use(express.static("public")); //using express.static and app.use to pull all the files from the public folder to use mostly from the css styling. 

app.use(express.urlencoded({extended: true})); //using the app to express acess to the body requirements (req) function 

app.get("assets/js/index.js"), function (req, res){
    res.sendFile(path.join(__dirname, "public/assets/js/index.js"))
}; // express reaching out to the index.js to send a file after the response 


//app.get for the notes.html response from the public folder
app.get("/api/notes", function(req, res){
    return res.json(dataBase); // this parses the information the the left side and appends the notes. // if you add dataBase in the () then it will project on the screen under the notes saved. //
}); // API ROUTES interact with notes api database:


//creating a response to the index.html 
// app.get("*", function (req, res){
//     res.sendFile(path.join(__dirname, "./public/index.html"));
// });
// if ( fs.existsSync( file ) ) {
//     file = fs.readFileSync( file );
// }

//creating a function for the post method to appear on the screen after a note is written and saved. an app post method lets you saved notes that you create and also post the notes on the side. 
app.post("/api/notes", function(req, res){
    if(addMore.length>1){
        addMore.push((addMore));
        console.log(req)
    };
    
});

//getting the router to get the notes
app.get("/notes" , (req, res) => {
    fs.readFile("../db/db/json", (err, data) =>{
        if (err){
            console.log(err)
        }
        else {
            addMore = JSON.parse(data)
            res.json(addMore)
        };
    });
});

//starts the server to begin to listen to the PORT from the local host  and then will console log 
app.listen(PORT, function () {
    console.log("server is listening on: http://localhost:" + PORT);
}); //starts the server to begin to listen to the PORT  and then will console log 

//need to create a function to parse the information 
//need to create a function to have another addNote appear after i is created
