const jobController = require("../controllers/job.controller");

module.exports = (app) => {
  app.post("/emphiring/api/v1/jobs", jobController.create);

  app.get("/emphiring/api/v1/jobs", jobController.findAll);

  app.delete("/emphiring/api/v1/jobs/:id", jobController.delete);
};
