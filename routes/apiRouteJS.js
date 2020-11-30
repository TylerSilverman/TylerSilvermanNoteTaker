//dependency to have all modules use the app function
const fs = require("fs");
const path = require("path");  

//able to create package for unique ID's
const {v4 : uuidv4} = require('uuid')

//added array to be able to push notes created to be saved to the JSON files
let arrayMoreNotes = [];

const dataBase = require("../develop/db/db.json");// getting the db file to make the changes in the notes
console.log(dataBase); //console log whats in the db.json file which is located in the db folder then db.json


