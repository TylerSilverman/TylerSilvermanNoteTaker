//MAKE SURE TO BE IN THE TERMINAL /develop AND THEN TYPE IN node server.js AFTER WILL PROMPT TO MY LOCAL HOST
//MAKE SURE TO HAVE npm install BEFORE RUNNING THE FUNCTION
//YOU CAN CHECK FOR ERRORS BY TYPING IN THE TERMINAL npm run test TO MAKE NO ERRORS
//IN THE FOLDER, SHOULD HAVE DEVELOP, ./db/db/json, PUBLIC, ASSETS WITH (2) HTML, SERVER.JS, AND ALSO NODE_MODULES 
//TO POST TO HERUKU AFTER COMPLETING CHANGES, git push heruku main THAT WILL PUSH IT 
// When the frontend JS sends a POST request to your Express backend to create a note,

//start with dependencies express is the app
const express = require('express');
const app = express(); // app is express 
const path = require("path");  
const PORT = process.env.PORT || 3000; //something for the PORT to listen incoming request 
const fs = require("fs");
const dataBase = require("../develop/db/db.json");// getting the db file to make the changes in the notes
console.log(dataBase); //console log whats in the db.json file which is located in the db folder then db.json
const router = require('express').Router();
console.log(router);
let addMore = [];
// //
const {v4 : uuidv4} = require('uuid')

//starts the server to begin to listen to the PORT from the local host  and then will console log 
app.listen(PORT, function () {
    console.log("server is listening on: http://localhost:" + PORT);
}); //starts the server to begin to listen to the PORT  and then will console log 

//ALL APP.USE 

//the app.use is setting up the function for express to handle the data parsing. 
app.use(express.json()); //function to call the inforamtion to the body req. 

app.use(express.static("public")); //using express.static and app.use to pull all the files from the public folder to use mostly from the css styling. 

app.use(express.urlencoded({extended: true})); //using the app to express acess to the body requirements (req) function 


//ALL APP.GET 

app.get("assets/js/index.js"), function (req, res){
    res.sendFile(path.join(__dirname, "public/assets/js/index.js"))
}; // express reaching out to the index.js to send a file after the response 

//app.get for the index.html from the public folder
app.get("/", function(req, res){
   res.sendFile(path.join(__dirname, "public/index.html"))
}); //ROUTES interact with public index html database:

//app.get for the notes.html from the public folder
app.get("/notes", function(req,res){
    res.sendFile(path.join(__dirname, "public/notes.html"))
}); // ROUTES interact with public notes html database:

app.get("/", function(req, res) {
    res.json(path.join(__dirname, "public/index.html"));
  });

  //getting the router to get the notes
//   / API ROUTES interact with notes api database:
// this parses the information the the left side and appends the notes. // if you add dataBase in the () then it will project on the screen under the notes saved. //
app.get("/api/notes" , (req, res) => {
    fs.readFile("../db/db/json", (err, data) =>{
        if (err){
            console.log(err)
        }
        else {
            addMore = JSON.parse(data)
            res.json(addMore)
        };
    });
    return res.json(dataBase);
});

//creating a response to the index.html 
// app.get("*", function (req, res){
//     res.sendFile(path.join(__dirname, "./public/index.html"));
// });
// if ( fs.existsSync( file ) ) {
//     file = fs.readFileSync( file );
// }

//APP.POST FUNCTION

//creating a function for the post method to appear on the screen after a note is written and saved. an app post method lets you saved notes that you create and also post the notes on the side. 
app.post("/api/notes", function(req, res){
    if(addMore.length>1){
        addMore.push((addMore));
        console.log(req)
    };
    
});

//DELETE FUNCTION

app.delete('/api/notes/:id', function(req, res){
    const id = req.params.id;
    fs.readFile(dataBase, "utf8", (error, data)=>{
        if(error){
            console.log(error);
        }else{
            addMore = JSON.parse(data);
            const newNotesArray = addMore.filter(notes =>notes.id !==id);
            const newNotesArrayObj = JSON.stringify(newNotesArray);
            fs.writeFile(dataBase, newNotesArrayObj, err => err ? console.log(error) : console.log("update the file"));
            return res.json(true);
        };
    });
    })


