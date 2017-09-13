$(document).on("click", "#saveTravelerInfo", function() {
  // Grab the id associated with the article from the submit button
  //var thisId = $(this).attr("data-id");

  // Run a POST request to change the note, using what's entered in the inputs
  $.ajax({
    method: "POST",
    url: "/travelerSignup",
    data: {
      name: $("#firstnameInput").val(),
      email: $("#emailInput").val(),
      phone:$("#phoneInput").val(),
      password:$("#passwordInput").val(), 
    }
  }).done(function(data) {
      console.log(data);
  });
});
