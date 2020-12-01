//start with dependencies express is the app
const express = require('express');
const app = express(); // app is express 
const path = require("path");  
const PORT = process.env.PORT || 3000; //something for the PORT to listen incoming request 
const fs = require("fs");
const db = require("./db/db.json");// getting the db file to make the changes in the notes("../develop/db/db.json")
console.log(db); //console log whats in the db.json file which is located in the db folder then db.json
// const router = require('express').Router();
// console.log(router);
let addMore = [];
// //
const {v4 : uuidv4} = require('uuid')

//ALL APP.USE 

//the app.use is setting up the function for express to handle the data parsing. 
app.use(express.json()); //function to call the inforamtion to the body req. 

app.use(express.static(path.join(__dirname, "public"))); //using express.static and app.use to pull all the files from the public folder to use mostly from the css styling. 

app.use(express.urlencoded({extended: true})); //using the app to express acess to the body requirements (req) function 

//APP CALLING THE LISTENING FUNCTION TO THE LOCAL HOST
app.listen(PORT, function () {
    console.log("Click To Check Out: http://localhost:" + PORT);
}); //starts the server to begin to listen to the PORT  and then will console log 


//ALL APP.GET 

app.get("/", function (req, res){
    res.sendFile(path.join(__dirname, "public/assets/js/index.js"));
}); // express reaching out to the index.js to send a file after the response 

//app.get for the notes.html from the public folder
app.get("/notes", function (req,res){
    res.sendFile(path.join(__dirname, "public/notes.html"))
}); // ROUTES interact with public notes html database:

app.get("*", function(req, res) {
    res.json(path.join(__dirname + "public/index.html"));
  });

  //getting the router to get the notes
//   / API ROUTES interact with notes api database:
// this parses the information the the left side and appends the notes. // if you add dataBase in the () then it will project on the screen under the notes saved. //
app.get("/api/notes" , (req, res) => {
    return res.json(db);
});

let dbNotes  = JSON.parse(fs.readFileSync(path.join(__dirname, "/db/db.json"), (error, data) =>{
    if (error){
        throw error;
    }
}));

let addMoreNotes = function (note) {
    fs.writeFileSync(path.join(__dirname, "/db/db.json"), (error, data) =>{
        if (error){
            throw error;
        };
    });
};

//APP.POST FUNCTION

//creating a function for the post method to appear on the screen after a note is written and saved. an app post method lets you saved notes that you create and also post the notes on the side. 
app.post("/api/notes", function(req, res){
    let note = req.body;
    let id = db.length;
    note.id = id;
    db.push(note);
    addMoreNotes(db);
    
});

//DELETE FUNCTION

app.delete('/api/notes/:id', function(req, res){
    const id = req.params.id;
    fs.readFile(db, "utf8", (error, data)=>{
        if(data){
            console.log(error);
        }else{
            addMore = JSON.parse(data);
            const newNotesArray = addMore.filter(notes =>notes.id !==id);
            const newNotesArrayObj = JSON.stringify(newNotesArray);
            fs.writeFile(dataBase, newNotesArrayObj, err => err ? console.log(error) : console.log("update the file"));
            return res.json(true);
        };
    });
});

// app.delete("/api/notes/:id", function (req, res){
//     let id = parseInt(req.params.id);
//     let removeNotes = db.filter(items => items.id !=id);

//     removeNotes.forEach(element => element.id = removeNotes.indexOf(element));

//     fs.writeFileSync("./db/db.json", JSON.stringify(removeNotes));

//     res.json({
//         isError: false,
//         message: "note is deleted",
//         port: PORT,
//         status: 200,
//         success: true
//     });
// });

//------------EXTRA NOTES ------// 

// //app.get for the index.html from the public folder
// app.get("/", function (req, res){
//    res.sendFile(path.join(__dirname, "public/index.html"))
// }); //ROUTES interact with public index html database:


//creating a response to the index.html 
// app.get("*", function (req, res){
//     res.sendFile(path.join(__dirname, "./public/index.html"));
// });
// if ( fs.existsSync( file ) ) {
//     file = fs.readFileSync( file );
// }