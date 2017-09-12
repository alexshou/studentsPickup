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
    type: String,
    required: true
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
    type: String,
    required: true
  },
  colorOfCar: {
    type: String,
    required: true
  },
  hometown: {
    type: String,
    required: true
  },
  homeCountry: {
    type: String,
    required: true
  }
  language: {
    type: String,
    required: true
  },
  areaOfStudy: {
  	type: String,
  	required: true
  },
  university: {
    type: String,
    required: true
  }
  alumniSchool: {
    type: String
    required: true
  },
  numberSeats: {
  	type: Number,
  	required: true
  },
  note: {
    type: String,
    required: true
  }
});

// Remember, Mongoose will automatically save the ObjectIds of the notes
// These ids are referred to in the Student model

// Create the Driver model with the DriverSchema
var Driver = mongoose.model("Driver", DriverSchema);

// Export the Driver model
module.exports = Driver;
