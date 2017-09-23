$(document).on("click", "#saveDriverProfile", function() {
  // Run a POST request to change the note, using what's entered in the inputs
  $.ajax({
    method: "POST",
    url: "/driverProfile",
    data: {
      makeOfCar: $("#carMakeInput").val(),
      colorOfCar: $("#carColorInput").val(),
      hometown: $("#hometownInput").val(),
      homeCountry: $("#homeCountryInput").val(),
      language: $("#languageInput").val(),
      areaOfStudy: $("#areaOfStudyInput").val(), 
      university: $("#universityInput").val(),
      alumniSchool: $("#alumniSchoolInput").val(),
      numberSeats: $("#numberSeatsInput").val(),
      gender: $("#genderInput").val(),
      note: $("#driverNoteInput").val()}
  }).done(function(data) {
      console.log(data);
      window.location.href = "/driverPage.html";  
  });
});
