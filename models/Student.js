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
  gender: {
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
  hometown: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  undergraduteCollege: {
    type: String
  },
  university: {
    type: String,
    required: true
  }
  department: {
    type: String
  },
  language: {
    type: String,
    required: true
  },
  flight: {
    type: String,
    required: true
  },
  arrivalDate: {
    type: Date,
    required: true
  },
  luggage: {
    type: Number,
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
