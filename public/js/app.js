$("#add-btn").on("click",function(){
    event.preventDefault();
    var JobTitle = $("#jobtitle").val().trim();
    var Location = $("#location").val().trim();
    var Type= $("#type").val().trim();
    var Duration= $("#duration").val().trim();
    var DOP = $("#date").val().trim();
    var Description = $("#description").val().trim();
  
    var jobpostdata = {
        JobTitle : JobTitle,
        Location: Location,
        Type: Type,
        Duration:Duration,
        DOP:DOP,
        Description:Description
    };
  console.log(jobpostdata);
    $("#data").append(jobpostdata);
  });