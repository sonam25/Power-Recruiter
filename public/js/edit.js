$(document).ready(function () {

    url = window.location.href.split('/');

    $.get("/api/jobposting/" + url[5], function (data) {
        $('#jobtitle').attr('value', data.title);
        $('#location').attr('value', data.location);
        $('#duration').attr('value', data.duration);
        $('#type').attr('value', data.type);
        $('#description').text(data.description);

        $(".editjob").on("click", function () {
            event.preventDefault();
            // Getting a reference to the input field from the user
            var JobID = data.id;
            var JobTitle = $("#jobtitle");
            var Location = $("#location");
            var Type = $("#type");
            var Duration = $("#duration");
            var Description = $("#description");

            if (!JobTitle.val().trim() || !Location.val().trim() || !Type.val().trim() || !Duration.val().trim() || !Description.val().trim()) {
                return;
            }

            // Constructing a newPost object to hand to the database
            var jobpostdata = {
                id: JobID,
                title: JobTitle.val().trim(),
                location: Location.val().trim(),
                type: Type.val().trim(),
                duration: Duration.val().trim(),
                description: Description.val().trim(),
            };

            $.ajax({
                method: 'PUT',
                url: "/api/jobposts/" + JobID,
                data: jobpostdata,
                complete: function () {
                    alert("Job Post Saved!");
                }
            });

        });

    });

});