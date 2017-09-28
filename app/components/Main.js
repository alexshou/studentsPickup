// Include React as a dependency
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#link
// var Link = require("react-router").Link

var Driver = require("../components/Driver");
var Passenger = require("../components/Passenger");

// function Driver(props) {
//   return <h1>Welcome Driver!</h1>;
// }

// function Passenger(props) {
//   return <h1>Welcome Passenger.</h1>;
// }
// We'll create a Greeting component that displays either of these components depending on whether a user is logged in:

// var Main = React.createClass({
function Main(props) {
  const isPassenger = props.isPassenger;
  if (isPassenger) {
    return <Passenger />;
  }
    return <Driver />;
}

// Export the module back to the route
module.exports = Main;

// var Confirmed = require("../components/Confirmed");
// var Pending = require("../components/Pending");
// var Status = require("../components/Status");
// var PassReq = require("../components/PassReq");

// Create the Main component
// var Main = React.createClass({

//   render: function() {

//     return (
//       // We can only render a single div. So we need to group everything inside of this main-container one
//       <div className="main-container">
//         <div className="container">
//           {/* Navbar */}
//           <nav className="navbar navbar-default" role="navigation">
//             <div className="container-fluid">
//               <div className="navbar-header">
//                 <button
//                   type="button"
//                   className="navbar-toggle"
//                   data-toggle="collapse"
//                   data-target=".navbar-ex1-collapse"
//                 >
//                   <span className="sr-only">Toggle navigation</span>
//                   <span className="icon-bar"></span>
//                   <span className="icon-bar"></span>
//                   <span className="icon-bar"></span>
//                 </button>
//                 <Link className="navbar-brand" to="/">ISP</Link>
//               </div>

//               <div className="collapse navbar-collapse navbar-ex1-collapse">
//                 <ul className="nav navbar-nav navbar-right">
//                   {/* Using <Link> in place of <a> and "to" in place of "href" */}
//                   <li><Link to="/search">Search</Link></li>
//                   <li><Link to="/saved">Saved Articles</Link></li>
//                 </ul>
//               </div>
//             </div>
//           </nav>

//           {/* Jumbotron */}
//           <div className="jumbotron">
//             <h2 className="text-center"><strong>(ReactJS) New York Times Article Scrubber</strong></h2>
//             <h3 className="text-center">Search for and save articles of interest.</h3>
//           </div>


//           {/* Here we will deploy the sub components (Search or Saved */}
//           {/* These sub-components are getting passed as this.props.children */}
//           {this.props.children}

//           <footer>
//             <hr />
//             <p className="pull-right">
//               <i className="fa fa-github" aria-hidden="true"></i>
//               Proudly built using React.js
//             </p>
//           </footer>
//         </div>
//       </div>
//     );
//   }
// });

// Export the module back to the route
module.exports = Main;
