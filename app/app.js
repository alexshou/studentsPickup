// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// Grabs the Routes
// var routes = require("./config/routes");
// Reference the high-level components
var Main = require("./components/Main");

// Displays the contents in the div app of index.html
// Note how ReactDOM takes in two parameters (the contents and the location)
ReactDOM.render(
  // Try changing to isLoggedIn={true}:
  <Main isPassenger={false} />,
  document.getElementById('app')
);