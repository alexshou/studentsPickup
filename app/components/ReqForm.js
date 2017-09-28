// Include React as a dependency
var React = require("react");

// Include the Helper (for the saved recall)
var helpers = require("../utils/helpers");

// Create the ReqForm component
var ReqForm = React.createClass({
  

  render: function() {
    return (
       <div className="container">
        <div className="jumbotron my-4">
            <h1>Welcome Passenger!</h1>
            <h2> Schedule Pickup Request </h2>
            <form>
                <div className="form-group row">
                    <label for="ArrivalDateInput" className="col-sm-2 col-form-label">Arrival Date</label>
                    <div className="col-auto">
                        <input type="date" className="form-control" id="arrivalDateInput" placeholder="Arrival Date"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="ArrivalTimeInput" className="col-sm-2 col-form-label">Arrival Time</label>
                    <div className="col-auto">
                        <input type="time" className="form-control" id="arrivalTimeInput" placeholder="Arrival Time"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="FlightNumberInput" className="col-sm-2 col-form-label">Airline</label>
                    <div className="col-auto">
                        <input type="text" className="form-control" id="airlineInput" placeholder="Airline"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="FlightNumberInput" className="col-sm-2 col-form-label">Flight Number</label>
                    <div className="col-auto">
                        <input type="text" className="form-control" id="flightNumberInput" placeholder="Flight Number"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label for="AirportInput" className="col-sm-2 col-form-label">Airport</label>
                    <div class="col-auto">
                        <input type="text" className="form-control" id="airportInput" placeholder="Airport"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="UniversityInput" className="col-sm-2 col-form-label">University</label>
                    <div class="col-auto">
                        <input type="text" className="form-control" id="universityInput" placeholder="University"/>
                    </div>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Additional Instructions</label>
                    <textarea className="form-control" id="addtionalInstructionInput" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-success btn" id="savePickupRequest"><span className="glyphicon glyphicon-off"></span>Submit Request</button>
                <button type="submit" className="btn btn-info"><span className="glyphicon glyphicon-off"></span>Update Request</button>
            </form>
        </div>
       </div>
          
    );
  }
});

// Export the module back to the route
module.exports = ReqForm;
