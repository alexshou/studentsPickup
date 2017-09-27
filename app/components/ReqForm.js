// Include React as a dependency
var React = require("react");

// Include the Helper (for the saved recall)
var helpers = require("../utils/helpers");

// Create the Driver component
var ReqForm = React.createClass({
  render: function() {
    return (
            <div>
              <h1>I'm going to be your form to make pick up requests.</h1>
            </div>          
    );
  }
});

// Export the module back to the route
module.exports = ReqForm;
