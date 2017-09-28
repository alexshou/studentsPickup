// Include React as a dependency
var React = require("react");

var Status = require("./Status");
var ReqForm = require("./ReqForm");

// Include the Helper (for the saved recall)
var helpers = require("../utils/helpers");

// Create the Driver component
var Passenger = React.createClass({
  render: function() {
    return (
            <div>
              <h1>Welcome Passenger!</h1>
              <Status />
              <ReqForm />              
            </div>          
    );
  }
});

// Export the module back to the route
module.exports = Passenger;