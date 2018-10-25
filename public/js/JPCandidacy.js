$(document).ready(function () {

    $.get("/api/candidate/:jobpost", function (data) {

        for (i = 0; i < data.length; i++) {
            var jobpost = "<tr><td>" + data[i].title + "</td></tr>";
            $(".FirstSet").append(jobpost);
        }

    });



   




});





// function DisplayPost(post) {
//     $.ajax({
//             method: "PUT",
//             url: "/api/jobposts",
//             data: post
//         })
//         .then(function () {
//             window.location.href = "/main";
//         });
// }