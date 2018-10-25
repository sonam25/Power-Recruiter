  module.exports = function (sequelize, DataTypes) {
    var Comment = sequelize.define("Comment", {
      comment: DataTypes.TEXT,
      stage: DataTypes.STRING,
      candidateid: DataTypes.INTEGER
    });
    return Comment;
  };