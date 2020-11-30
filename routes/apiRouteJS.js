//dependency to have all modules use the app function
const fs = require("fs");
const path = require("path"); 
const app = express(); // app is express 

//able to create package for unique ID's
const {v4 : uuidv4} = require('uuid')

//added array to be able to push notes created to be saved to the JSON files
let addMore = [];

const dataBase = require("../develop/db/db.json");// getting the db file to make the changes in the notes
console.log(dataBase); //console log whats in the db.json file which is located in the db folder then db.json

module.exports = app => {
    //getting the router to get the notes
    //getting infromation from db.json file
    app.get("/api/notes", (req, res) => {
        fs.readFile(dataBase, "utf8", (error, data) => {
            if (error){
                console.log(error);
            } else{
                //parsing information the the db.json file and then able to create an addMore array.
                addMore = JSON.parse(data);
                res.json(addMore);
            }
        });
    });
    //post the route information 
    //creating a function for the post method to appear on the screen after a note is written and saved. 
    app.post("/api/notes", function(req, res){
        const addMore = req.body; 
        //creating an array for the unique Id
        const id = uuidv4();
        newNotesArray.id = id;
        //creating the file to read db.json
        fs.readFile(dataBase, "utf8", (error, data) => {
            if (error){
                console.log(error);
            }else{
                addMore = JSON.parse(data);
                addMore.push(newNotesArray);
                const newNotesArrayObj = JSON.stringify(addMore);
                fs.writeFile(dataBase, newNotesArrayObj, error => error ? console.log(error) : console.log("Notes Saved"));
            }
        })
        //giving the user the notes requested and then able to go back to the beginning
        res.json(addMore);
    });
    //delete the post route


}


