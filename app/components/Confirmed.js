// Include React as a dependency
var React = require("react");

// Include the Helper (for the saved recall)
var helpers = require("../utils/helpers");

// Create the Driver component
var Confirmed = React.createClass({
  render: function() {
    return (
            <div>
              <h1>Here are the pickups you confirmed to make!</h1>
              <form>
         <table className="table table-bordered table-inverse">
  <thead>
    <tr>
    <h1> Your confirmed pick ups</h1>
    <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Date</th>
      <th>Time</th>
      <th>Flight</th>
      <th>Confirm Pickup</th>
      <th>Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>12/16/2017</td>
      <td>12:00pm</td>
      <td>United</td>
      <td><div className="form-check">
  <label className="form-check-label">
    <input className="form-check-input" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."/>
  </label>
</div> </td>
<td> bad back need wheel chair</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>John</td>
      <td>Dough</td>
      <td>12/16/2017</td>
      <td>12:00pm</td>
      <td>United</td>
      <td> <div className="form-check">
  <label className="form-check-label">
    <input className="form-check-input" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."/>
  </label>
</div></td>
      
    </tr>
  </tbody>
</table>
<button type="submit" className="btn btn-success btn"><span className="glyphicon glyphicon-off"></span>Confirm Pickup</button>
</form>
            </div>          
    );
  }
});

// Export the module back to the route
module.exports = Confirmed;
