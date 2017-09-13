// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var StudentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  password: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  hometown: {
    type: String,
  },
  country: {
    type: String,
    required: true
  },
  language: {
    type: String,
    required: true
  },
  alumniSchool: {
    type: String
  },
  areaOfStudy: {
    type: String,
    required: true
  },

  arrivalDate: {
    type: Date,
    required: true
  },

  flight: {
    type: String,
    required: true
  },
  airport: {
    type: String,
    required: true
  },
  university: {
    type: String,
    required: true
  },

  note: {
    type: String
  },
  pickupStatus: {
    type: Boolean
  },
  // This only saves one note's ObjectId, ref refers to the Note model
  driver_id: {
    type: String
  }
});

// Create the Article model with the StudentSchema
var Student = mongoose.model("Student", StudentSchema);

// Export the model
module.exports = Student;