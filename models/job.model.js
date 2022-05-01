module.exports = (sequelize, Sequelize) => {
  const Job = sequelize.define("job", {
    jobId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    minQualification: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    salary: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });
  return Job;
};
