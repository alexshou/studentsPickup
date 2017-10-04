$(document).on("click", "#savePassengerProfile", function() {
    // Run a POST request to change the note, using what's entered in the inputs
    $.ajax({
        method: "POST",
        url: "/travelerProfile",
        data: {
            hometown: $("#hometownInput").val(),
            homeCountry: $("#homeCountryInput").val(),
            language: $("#languageInput").val(),
            areaOfStudy: $("#areaOfStudyInput").val(),
            university: $("#universityInput").val(),
            alumniSchool: $("#alumniSchoolInput").val(),
            gender: $("#genderInput").val(),
            note: $("#travelerNoteInput").val()
        }
    }).done(function(data) {
        console.log(data);
        window.location.href = "/passengerPage.html";
    });
});

$.getJSON("/passengerInformation", function(data) {
    var name = data[0].name;
    $("#passengerNameDisplay").html(name);
});
