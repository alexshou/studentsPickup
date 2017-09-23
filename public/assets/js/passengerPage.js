$(document).on("click", "#savePickupRequest", function() {
    // Run a POST request to change the note, using what's entered in the inputs
    $.ajax({
        method: "POST",
        url: "/pickupRequest",
        data: {
            arrivalDate: $("#arrivalDateInput").val(),
            arrivalTime: $("#arrivalTimeInput").val(),
            flightNumber: $("#flightNumberInput").val(),
            airport: $("#airportInput").val(),
            addtionalInstruction: $("#addtionalInstructionInput").val()
        }
    }).done(function(data) {
        console.log(data);
        window.location.href = "/index.html";
    });
});