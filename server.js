const bodyParser = require("body-parser");
const express = require("express");
const serverConfig = require("./configs/server.config");
const { job } = require("./models");

const app = express();

const db = require("./models");

const Company = db.company;
const JOb = db.job;
const Student = db.student;

db.sequelize
  .sync({ force: true })
  .then(() => {
    console.log("table dropped and recreated");
    init();
  })
  .catch((err) => {
    console.log(err.message);
  });

function init() {
  var students = [
    {
      id: "1",
      name: "Lakshya",
      email: "Lakshya@gmail.com",
      qualification: "Btech",
    },
    {
      id: "2",
      name: "vasu",
      email: "vasu@gmail.com",
      qualification: "Btech",
    },
  ];
  var companies = [
    {
      companyId: 101,
      companyName: "Relevel",
      email: "Relevel@gmail.com",
      website: "www.relevel.com",
      empsize: 100,
    },
    {
      companyId: 102,
      companyName: "TCS",
      email: "Tcs@gmail.com",
      website: "www.tcs.com",
      empsize: 1100,
    },
    {
      companyId: 103,
      companyName: "wipro",
      email: "wipro@gmail.com",
      website: "www.wipro.com",
      empsize: 1200,
    },
    {
      companyId: 104,
      companyName: "Amazon",
      email: "Amazon@gmail.com",
      website: "www.Amazon.com",
      empsize: 500,
    },
  ];
  Company.bulkCreate(companies)
    .then(() => {
      console.log("Companies are added to the table ");
    })
    .catch((err) => {
      console.log("Error While adding compnies to the table", err.message);
    });
  Student.bulkCreate(students)
    .then(() => {
      console.log("students are added to the table ");
    })
    .catch((err) => {
      console.log("Error While adding compnies to the table", err.message);
    });
}

app.use(bodyParser.json());

require("./routes/job.route")(app);

require("./routes/student.route")(app);
require("./routes/company.route")(app);

app.listen(serverConfig.PORT, () => {
  console.log("Application started on port no :", serverConfig.PORT);
});
