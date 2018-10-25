$(document).ready(function () {

  var url = window.location.href.split('/');
  var jobpostid = url[4];

  $("#apply").on("click", function () {

    event.preventDefault();


    // Getting a reference to the input field from the user
    var FirstName = $("#firstname");
    var LastName = $("#lastname");
    var Email = $("#email");
    var Phone = $("#phone");
    var LinkedIn = $("#linkedinprofile");

    if (!FirstName.val().trim() || !LastName.val().trim() || !Email.val().trim() || !Phone.val().trim() || !LinkedIn.val().trim()) {
      alert("Missing fields. Please fill all fields");
      return;
    }

    // Constructing a newPost object to hand to the database
    var candidatedata = {
      firstname: FirstName.val().trim(),
      lastname: LastName.val().trim(),
      email: Email.val().trim(),
      phone: Phone.val().trim(),
      linkedinprofile: LinkedIn.val().trim(),
      jobpostingid: jobpostid
    };

    console.log(candidatedata);

    $.post("/api/jobposts/apply/", candidatedata, function () {
      alert("Application Submitted");
      window.location.href = "/";
    });

  });

});