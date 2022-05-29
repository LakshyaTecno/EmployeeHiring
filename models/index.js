const Sequelize = require("sequelize");
const config = require("../configs/db.config");

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});

var db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model")(sequelize, Sequelize);
db.company = require("./company.model")(sequelize, Sequelize);
db.job = require("./job.model")(sequelize, Sequelize);
db.role = require("./role.model")(sequelize, Sequelize);
db.student = require("./student.model")(sequelize, Sequelize);

db.company.hasMany(db.job); // 1 to many relatioship b/w company and Job

// After this line job table added the forgien key in job table as companyCaompanyID
// After this relationship set up user can not add companyID which is not in the table yet

// db.job.belongsToMany(db.student, {
//   through: "student_jobs",
//   foreignKey: "job_id",
//   otherKey: "student_id",
// });

// db.student.belongsToMany(db.job, {
//   through: "student_jobs",
//   foreignKey: "student_id",
//   otherKey: "job_id",
// });

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "role_id",
  otherKey: "user_id",
});

db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "user_id",
  otherKey: "role_id",
});

module.exports = db;
