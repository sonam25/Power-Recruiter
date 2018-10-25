$(document).ready(function () {

    url = window.location.href.split('/');

    $.get("/api/candidates/" + url[4] + "/applied", function (data) {

        for (i = 0; i < data.length; i++) {


            var nextBtn = $("<button>");
            nextBtn.addClass("btn btn-success btn-sm btnapplied").attr("data-value", data[i].id).text("Next");
            var appliedcand = "<li class=\"list-group-item\"><a target='_new' href='" + data[i].linkedinprofile + "'>" + data[i].firstname + " " + data[i].lastname + "</a><br>" + data[i].phone + "<br><a href='mailto:"+ data[i].email + "'>" + data[i].email + "</a></li>";
            $("#applied").append(appliedcand).append(nextBtn);
        }

        $(".btnapplied").click(function () {
            var btnvalue = $(this).attr("data-value");

            $.ajax({
                method: 'PUT',
                url: "/api/candidate/" + btnvalue + "/telephone",
                success: function (data) {
                    alert('Moved to Phone Interview!');
                    location.reload();
                }
            });

        });


        $.get("/api/candidates/" + url[4] + "/telephone", function (data) {

            for (i = 0; i < data.length; i++) {

                var nextBtn = $("<button>");
                nextBtn.addClass("btn btn-success btn-sm btnphone").attr("data-value", data[i].id).text("Next");
                var appliedcand = "<li class=\"list-group-item\"><a target='_new' href='" + data[i].linkedinprofile + "'>" + data[i].firstname + " " + data[i].lastname + "</a><br>" + data[i].phone + "<br><a href='mailto:"+ data[i].email + "'>" + data[i].email + "</a></li>";
                $("#telephone").append(appliedcand).append(nextBtn);
            }

            $(".btnphone").click(function () {
                var btnvalue = $(this).attr("data-value");

                $.ajax({
                    method: 'PUT',
                    url: "/api/candidate/" + btnvalue + "/inperson",
                    success: function (data) {
                        alert('Moved to In Person!');
                        location.reload();
                    }
                });

            });


        });

        $.get("/api/candidates/" + url[4] + "/inperson", function (data) {

            for (i = 0; i < data.length; i++) {

                var nextBtn = $("<button>");
                nextBtn.addClass("btn btn-success btn-sm inperson").attr("data-value", data[i].id).text("Next");
                var appliedcand = "<li class=\"list-group-item\"><a target='_new' href='" + data[i].linkedinprofile + "'>" + data[i].firstname + " " + data[i].lastname + "</a><br>" + data[i].phone + "<br><a href='mailto:"+ data[i].email + "'>" + data[i].email + "</a></li>";
                $("#inperson").append(appliedcand).append(nextBtn);
            }

            $(".inperson").click(function () {
                var btnvalue = $(this).attr("data-value");

                $.ajax({
                    method: 'PUT',
                    url: "/api/candidate/" + btnvalue + "/hired",
                    success: function (data) {
                        alert('HIRED!');
                        location.reload();
                    }
                });

            });

        });

        $.get("/api/candidates/" + url[4] + "/hired", function (data) {

            for (i = 0; i < data.length; i++) {
                var appliedcand = "<li class=\"list-group-item\"><a target='_new' href='" + data[i].linkedinprofile + "'>" + data[i].firstname + " " + data[i].lastname + "</a><br>" + data[i].phone + "<br><a href='mailto:"+ data[i].email + "'>" + data[i].email + "</a></li>";
                $("#hired").append(appliedcand);
            }

        });

    });
});