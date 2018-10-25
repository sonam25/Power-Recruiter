var db = require("../models");

module.exports = function (app) {


  // Candidate creation and application to a job post
  app.post("/api/jobposts/apply", function (req, res) {
    req.body.stage = "applied";
    db.Candidate.create(req.body).then(function (result) {
      //return result
      res.json(result);
    }).catch(function (err) {
      //catch errors
      res.json(err);
    });
  });


  // Get all Candidates by Job Posting and Stage
  app.get("/api/candidates/:jobpostid/:stage", function (req, res) {
    db.Candidate.findAll({
      where: {
        jobpostingid: req.params.jobpostid,
        stage: req.params.stage,
      }
    }).then(function (result) {
      //return results
      res.json(result);

    }).catch(function (err) {
      //catch errors
      res.json(err);
    });
  });


  // Update a candidate application 
  app.put("/api/candidate/:id/:stagetomove", function (req, res) {
    db.Candidate.update({
        stage: req.params.stagetomove
      }, {
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

};