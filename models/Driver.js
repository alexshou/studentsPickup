// Require mongoose
var mongoose = require("mongoose");
// Create a schema class
var Schema = mongoose.Schema;

// Create the Note schema
var DriverSchema = new Schema({
    // Just a string
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String
    },
    // Just a string
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    makeOfCar: {
        type: String
    },
    colorOfCar: {
        type: String
    },
    hometown: {
        type: String
    },
    homeCountry: {
        type: String
    },
    language: {
        type: String
    },
    areaOfStudy: {
        type: String
    },
    university: {
        type: String
    },
    alumniSchool: {
        type: String
    },
    numberSeats: {
        type: Number
    },
    note: {
        type: String
    }
});

// Remember, Mongoose will automatically save the ObjectIds of the notes
// These ids are referred to in the Student model

// Create the Driver model with the DriverSchema
var Driver = mongoose.model("Driver", DriverSchema);

// Export the Driver model
module.exports = Driver;