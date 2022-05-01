module.exports = (sequelize, Sequelize) => {
  const Company = sequelize.define("company", {
    companyId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    companyName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    website: {
      type: Sequelize.STRING,
    },
    empsize: {
      type: Sequelize.INTEGER,
    },
  });
  return Company;
};
