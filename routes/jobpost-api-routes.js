var db = require("../models");
var path = require("path");

module.exports = function (app) {

  // Login Authentication
  app.post("/auth/login", function (req, res) {
    // Authenticate
    var username = req.body.username;
    var password = req.body.password;

    if (username == "recruiter" && password == "logmein") {
      //return true;
      res.send(true);
    } else {
      res.send(false);
    }
  });




  // Get all job posts
  app.get("/api/jobposts", function (req, res) {
    // Find all job posts
    db.JobPosting.findAll({}).then(function (result) {
      res.json(result);
    }).catch(function (err) {
      //catch errors
      res.json(err);
    });
  });


  // View job post 
  app.get("/api/jobposting/:id", function (req, res) {
    // Find one job posting with id
    db.JobPosting.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (result) {
      res.json(result);
    }).catch(function (err) {
      //catch errors
      res.json(err);
    });
  });



  // Post new job posting
  app.post("/api/jobposts", function (req, res) {
    db.JobPosting.create(req.body).then(function (result) {
      //return result
      res.json(result);
    }).catch(function (err) {
      //catch errors
      res.json(err);
    });
  });

  app.put("/api/jobposts/:id", function (req, res) {
    db.JobPosting.update(req.body, {
        where: {
          id: req.params.id
        }
      }).then(function (result) {
        //return result
        res.json(result);
      })
      .catch(function (err) {
        //catch errors
        res.json(err);
      });
  });

  // // Update a job post
  // app.put("/api/jobposts/:id", function (req, res) {
  
  //   // Using destroy and create because update was giving 500 internal server error.

  //   db.JobPosting.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //   .then(function () {

  //     db.JobPosting.create(req.body).then(function (result) {

  //     }).then(function(result) {
  //       res.json(result);
  //     })

  //   })

  //   // db.JostPosting.update(req.body, {
  //   //   where: {
  //   //     id: req.body.id
  //   //   }
  //   // }).then(function (result) {
  //   //   //return result
  //   //   res.json(result);
  //   // })
  //   // .catch(function (err) {
  //   //   //catch errors
  //   //   res.json(err);
  //   // });

    

  // });

  // Delete a job posting
  app.delete("/api/jobposts/:id", function (req, res) {
    db.JobPosting.destroy({
        where: {
          id: req.params.id
        }
      })
      .then(function (result) {
        //return result
        res.json(result);
      })
      .catch(function (err) {
        //catch errors
        res.json(err);
      });
  });





};