module.exports = function (sequelize, DataTypes) {
  var JobPosting = sequelize.define("JobPosting", {
    title: DataTypes.STRING,
    location: DataTypes.STRING,
    type: DataTypes.STRING,
    duration: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return JobPosting;
};