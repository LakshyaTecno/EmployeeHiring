const bodyParser = require("body-parser");
const express = require("express");
const serverConfig = require("./configs/server.config");

const app = express();

const db = require("./models");

const Role = db.role;
const Company = db.company;

//Company.hasMany(Role);

db.sequelize
  .sync({ force: true })
  .then(() => {
    console.log("table dropped and recreated");
    //init();
  })
  .catch((err) => {
    console.log(err.message);
  });

function init() {
  Role.create({
    id: 1,
    name: "admin",
  });

  Role.create({
    id: 2,
    name: "student",
  });

  Role.create({
    id: 3,
    name: "company",
  });
}

app.use(bodyParser.json());

require("./routes/job.route")(app);

require("./routes/company.route")(app);

app.listen(serverConfig.PORT, () => {
  console.log("Application started on port no :", serverConfig.PORT);
});
