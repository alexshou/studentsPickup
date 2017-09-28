// Include React as a dependency
var React = require("react");

// Include the Helper (for the saved recall)
var helpers = require("../utils/helpers");

// Create the Driver component
var Status = React.createClass({
  render: function() {
    return (
            <div>
              <h1>I'll show you the status of your request if you're nice to me.</h1>
            </div>          
    );
  }
});

// Export the module back to the route
module.exports = Status;
