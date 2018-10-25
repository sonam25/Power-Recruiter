$(document).ready(function () {

    $.get("/api/jobposts", function (data) {
        console.log("data", data);
        for (i = 0; i < data.length; i++) {
            var jobpost = "<div class ='card'>" + "<div class = 'card-header' style = 'display:inline'><h2>" + data[i].title + " " + "</h2></div><br>" +
                "<div class='jobpostcard'><h5>" + "Location: " + data[i].location + "</h5>" +
                "<h5>" + "Type: " + data[i].type + "</h5>" +
                "<h5>" + "Duration: " + data[i].duration + "</h5>" +
                "<h5>" + "Description:<br> " + data[i].description + "</h5><br><div class='col-md-4'><button class ='apply btn btn-info' text='Apply' data-value='" + data[i].id + "'>Apply</button></div></div><br>" + "</div><br><br>";
            console.log("datatitle", data[i].title);
            $("#jobposts").append(jobpost);
        }
        
        $(".apply").on("click", function () { 
            var jobpostid = $(this).attr("data-value");
            var url = "/apply/" + jobpostid;
            window.location.href = url;
        });

    });


});