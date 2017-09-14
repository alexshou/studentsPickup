// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var TravelerSchema = new Schema({
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
  },
  hometown: {
    type: String,
  },
  country: {
    type: String,

  },
  language: {
    type: String,

  },
  alumniSchool: {
    type: String
  },
  areaOfStudy: {
    type: String,

  },

  arrivalDate: {
    type: Date,

  },

  flight: {
    type: String,

  },
  airport: {
    type: String,

  },
  university: {
    type: String,
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

// Create the Article model with the TravelerSchema
var Traveler = mongoose.model("Traveler", TravelerSchema);

// Export the model
module.exports = Traveler;