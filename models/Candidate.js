  module.exports = function (sequelize, DataTypes) {
    var Candidate = sequelize.define("Candidate", {
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      linkedinprofile: DataTypes.TEXT,
      jobpostingid: DataTypes.INTEGER,
      stage: DataTypes.STRING,
    });
    return Candidate;
  };