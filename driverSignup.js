$(document).on("click", "#signupInfo", function() {
  // Grab the id associated with the article from the submit button

  // Run a POST request to change the note, using what's entered in the inputs
  $.ajax({
    method: "POST",
    url: "/driverSignup",
    data: {
      name: $("#firstNameInput").val() + $("#lastNameInput").val(),
      email: $("#emailInput").val(),
      mobile: $("#mobileInput").val(),
      password: $("#passwordInput").val(), 
      preference: $("#preferenceId").val(),

    }
  }).done(function(data) {
      console.log(data);
  });
});