$(document).ready(function () {

    $.get("/api/jobposts", function (data) {
        console.log("data", data);
        for (i = 0; i < data.length; i++) {
            var jobpost = "<div class ='card'>" + "<div class = 'card-header' style = 'display:inline'><a href = '/jobcandidates/" + data[i].id + "'><h2>" + data[i].title + " " + "</h2></a></div><br>" +
                "<div class='jobpostcard'><h5>" + "Location: " + data[i].location + "</h5>" +
                "<h5>" + "Type: " + data[i].type + "</h5>" +
                "<h5>" + "Duration: " + data[i].duration + "</h5>" +
                "<h5>" + "Description:<br> " + data[i].description + "</h5><br><div class='col-md-4'><button class ='edit btn btn-info' text='Edit' data-value='" + data[i].id + " '>Edit</button> &nbsp;&nbsp; <button class='delete btn btn-danger' text = 'Delete' data-value='" + data[i].id + " '>Delete</button></div></div><br>" + "</div><br><br>";
            console.log("datatitle", data[i].title);
            $("#jobposts").append(jobpost);
        }
        
        $(".edit").on("click", function () { 
            var jobpostid = $(this).attr("data-value");
            var url = "/jobposts/edit/" + jobpostid;
            window.location.href = url;
        });


        $(".delete").on("click", function () { 
            var jobpostid = $(this).attr("data-value");
            $.ajax({
                url: "/api/jobposts/" + jobpostid,
                type: 'DELETE',
                success: function(result) {
                    window.location.href = "/home";
                }
            });

        });
    });


});