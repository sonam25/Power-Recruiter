$(document).ready(function () {

    $("#UserLogIn").submit(LogIn);
   
    function LogIn(event) {
        event.preventDefault();
        console.log(event, $("#UserLogIn").serialize());
        $.ajax({
                method: "POST",
                url: "/auth/login",
                data: $("#UserLogIn").serialize()
            })
            .then(function (response) {
                if (response)
                    window.location.href = "/home";
                else
                    alert("INCORRECT LOGINID/PASSWORD. PLEASE TRY AGAIN.")

            });
    }
});