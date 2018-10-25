$(document).ready(function () {

  $("#add").on("click", function () {

    event.preventDefault();
    // Wont submit the post if we are missing a body, title, or author

    // Getting a reference to the input field from the user
    var JobTitle = $("#jobtitle");
    var Location = $("#location");
    var Type = $("#type");
    var Duration = $("#duration");
    var Description = $("#description");

    if (!JobTitle.val().trim() || !Location.val().trim() || !Type.val().trim() || !Duration.val().trim() || !Description.val().trim()) {
      alert("Missing fields. Please fill all fields");
      return;
    }

    // Constructing a newPost object to hand to the database
    var jobpostdata = {
      title: JobTitle.val().trim(),
      location: Location.val().trim(),
      type: Type.val().trim(),
      duration: Duration.val().trim(),
      description: Description.val().trim(),
    };

    console.log(jobpostdata);

    $.post("/api/jobposts", jobpostdata, function () {
      window.location.href = "/home";
    });

  });

});