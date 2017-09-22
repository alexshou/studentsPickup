$(document).on("click", "#saveupInfo", function() {
  var preference =  $("#preferenceId").val();
  console.log(preference); 
  if(preference === "driverSignup") {
      signupUrl = "/driverSignup";
  }
  if(preference === "travelerSignup") {
      signupUrl = "/travelerSignup";
  }
  // Run a POST request to change the note, using what's entered in the inputs
  $.ajax({
    method: "POST",
    url: signupUrl,
    data: {
      name: $("#firstNameInput").val() + $("#lastNameInput").val(),
      email: $("#emailInput").val(),
      mobile: $("#mobileInput").val(),
      password: $("#passwordInput").val(), 
    }
  }).done(function(data) {
      console.log(data);
      if (preference === "driverSignup") {
          window.location.href = "/dProfile";
      }
      if (preference === "travelerSignup") {
          window.location.href = "/pProfile";
      }
   
  });
});

// $(document).on("click", "#saveDriveProfile", function() {
//   // Grab the id associated with the article from the submit button
//   //var thisId = $(this).attr("data-id");
//   var thisId = $(this).attr("id");
//   // Run a POST request to change the note, using what's entered in the inputs
//   $.ajax({
//     method: "POST",
//     url: "/driverProfile/" + thisId,
//     data: {
//       name: $("makeInput").val(),
//       email: $("#emailInput").val(),
//       mobile: $("#mobileInput").val(),
//       password: $("#passwordInput").val(), 
//     }
//   }).done(function(data) {
//       console.log(data);
//   });
// });

