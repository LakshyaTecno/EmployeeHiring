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

// db.user = require('./user.model')( sequelize, Sequelize);
// db.role = require('./role.model')( sequelize, Sequelize);
db.company = require("./company.model")(sequelize, Sequelize);
db.job = require("./job.model")(sequelize, Sequelize);
//db.student=require("./student.model")(sequelize,Sequelize);

// db.role.belongsToMany(db.user, {
//     through : "user_roles",
//     foreignKey : "role_id",
//     otherKey : "user_id"

//  });

//  db.user.belongsToMany(db.role, {
//      through : "user_roles",
//      foreignKey : "user_id",
//      otherKey : "role_id"
//  })

//  db.ROLES = ["admin", "student", "company"];

module.exports = db;
