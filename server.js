// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
// Requiring our Driver and Student models
var Driver = require("./models/Driver.js");
var Traveler = require("./models/Traveler.js");
// Our scraping tools
var request = require("request");
var cheerio = require("cheerio");
// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;


// Initialize Express
var app = express();

// Use morgan and body parser with our app
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
    extended: false
}));

// Make public a static dir
app.use(express.static("public"));


// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// Database configuration with mongoose
mongoose.connect("mongodb://localhost/studentsPickup3");
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
    console.log("Mongoose connection successful.");
});


// Routes
// ======

// This will get the drivers listed
app.get("/drivers", function(req, res) {
    // Grab every doc in the Students array
    Driver.find({}, function(error, doc) {
        // Log any errors
        if (error) {
            console.log(error);
        }
        // Or send the doc to the browser as a json object
        else {
            res.json(doc);
        }
    });
});

// This will get the drivers listed
app.get("/travelers", function(req, res) {
    // Grab every doc in the Students array
    Traveler.find({}, function(error, doc) {
        // Log any errors
        if (error) {
            console.log(error);
        }
        // Or send the doc to the browser as a json object
        else {
            res.json(doc);
        }
    });
});
app.post("/travelerSignup", function(req, res) {
    // Create a new note and pass the req.body to the entry
    var newTraveler = new Traveler(req.body);

    // And save the new note the db
    newTraveler.save(function(error, doc) {
        // Log any errors
        if (error) {
            console.log(error);
        }
        // Otherwise
        else {
            
        }res.redirect("/pProfile");
    });
});

app.get("/pProfile", function(req, res) {
    res.sendFile("passengerProfile.html", { root: __dirname + '/public' });
});

app.post("/driverSignup", function(req, res) {
    // Create a new note and pass the req.body to the entry
    var newDriver = new Driver(req.body);

    // And save the new note the db
    newDriver.save(function(error, doc) {
        // Log any errors
        if (error) {
            console.log(error);
        }
        // Otherwise
        else {
            res.redirect("/dProfile");;
        }
    });
});

app.get("/dProfile", function(req, res) {
    res.sendFile("driverProfile.html", { root: __dirname + '/public' });
});
// Listen on port 3000
app.listen(3000, function() {
    console.log("App running on port 3000!");
});


// db.col.update({'id':'driver1'},{$set:{'title':'MongoDB'}})
// db.col.update({'id':'driver1'},{$set:driver1Profile})