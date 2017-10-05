$(document).on("click", "#savePickupRequest", function() {
    // Run a POST request to change the note, using what's entered in the inputs
    $.ajax({
        method: "POST",
        url: "/pickupRequest",
        data: {
            arrivalDate: $("#arrivalDateInput").val(),
            arrivalTime: $("#arrivalTimeInput").val(),
            airline: $("#airlineInput").val(),
            flightNumber: $("#flightNumberInput").val(),
            airport: $("#airportInput").val(),
            university: $("#universityInput").val(),
            addtionalInstruction: $("#addtionalInstructionInput").val(),
            pickupStatus: false
        }
    }).done(function(data) {
        console.log(data);
    });
});

var loadConfirmedDriver = function(data){
    //console.log(data);
    var driverId;
    var driverName;
    var driverEmail;
    var driverPhone;
    var driverGender;
    var driverMakeOfCar;
    var driverTypeOfCar;
    var driverColorOfCar;


    var driverTr = $("<tr>");
    var driverNameTd = $("<td>");
    var driverEmailTd = $("<td>");
    var driverPhoneTd = $("<td>");
    var driverGenderTd = $("<td>");
    var driverMakeOfCarTd = $("<td>");
    var driverTypeOfCarTd = $("<td>");
    var driverColorOfCarTd = $("<td>");

    driverId = data[0]._id;
    driverName = data[0].name;
    driverEmail = data[0].email;
    driverPhone = data[0].mobile;
    driverGender = data[0].gender;
    driverMakeOfCar = data[0].makeOfCar;
    driverTypeOfCar = data[0].typeOfCar;
    driverColorOfCar = data[0].colorOfCar;

    driverTr.append(driverNameTd);
    driverTr.append(driverEmailTd);
    driverTr.append(driverPhoneTd);
    driverTr.append(driverGenderTd);
    driverTr.append(driverMakeOfCarTd);
    driverTr.append(driverTypeOfCarTd);
    driverTr.append(driverColorOfCarTd);

    $("#displayDriverInfo").append(driverTr);

    driverNameTd.html(driverName);
    driverEmailTd.html(driverEmail);
    driverPhoneTd.html(driverPhone);
    driverGenderTd.html(driverGender);
    driverMakeOfCarTd.html(driverMakeOfCar);
    driverTypeOfCarTd.html(driverTypeOfCar);
    driverColorOfCarTd.html(driverColorOfCar);

};



$.getJSON("/ConfirmedDriver", function(data) {
    if (data == false) {
        $("#isPassengerPicked").html("No one claimed to pick you yet");
    }
    else {
        $("#isPassengerPicked").html("The driver below will pick you up!");
        loadConfirmedDriver(data);
    }
    
});
$.getJSON("/passengerInformation", function(data) {
    var name = data[0].name;
    $("#passengerNameDisplay").html(name);
});


