// var db = require("../models");

// module.exports = function(app) {

//   // Post a new comment
//   app.post("/api/comment", function(req, res) {
//     db.Comment.create(req.body).then(function(result) {
//       //return result
//       res.json(result);
//     })
//       .catch(function(err) {
//       //catch errors
//         res.json(err);
//       });
//   });

//   // Delete a comment
//   app.delete("/api/comment/:id", function(req, res) {
//     db.Comment.destroy({
//       where: {
//         id: req.params.id
//       }
//     })
//       .then(function(result) {
//         //return result
//         res.json(result);
//       })
//       .catch(function(err) {
//         //catch errors
//         res.json(err);
//       });
//   });


// };