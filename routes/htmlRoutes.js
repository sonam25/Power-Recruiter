var db = require("../models");
var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {

  app.get("/", function (req, res) {
    res.render("index");
  });

  app.get("/apply/:id", function (req, res) {
    res.render("apply");
  });

  app.get("/login", function (req, res) {
    res.render("login");
  });

  app.get("/home", function (req, res) {
    res.render("home");
  });

  app.get("/addJP", function (req, res) {
    res.render("addjp");
  });

  app.get("/jobposts/edit/:id", function (req, res) {
    res.render("editjp");
  });

  app.get("/jobcandidates/:jobpostid", function (req, res) {
    res.render("jobcandidates");
  });

  //app.get("/jobcandidates", function(req, res) {
  //res.render("jobcandidates");
  //});

};
