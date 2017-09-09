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
  // Just a string
  email: {
    type: String,
    required: true
  },
  phone: {
  	type: String,
  	required: true
  },
  university: {
  	type: String,
  	required: true
  },
  numberSeats: {
  	type: Number,
  	required: true
  }
});

// Remember, Mongoose will automatically save the ObjectIds of the notes
// These ids are referred to in the Student model

// Create the Driver model with the DriverSchema
var Driver = mongoose.model("Driver", DriverSchema);

// Export the Driver model
module.exports = Driver;
