const jobController = require("../controllers/job.controller");
const { requestValidator } = require("../middlewares");
module.exports = (app) => {
  app.post(
    "/emphiring/api/v1/jobs",
    [requestValidator.validateJobRequest],
    jobController.create
  );

  app.get("/emphiring/api/v1/jobs", jobController.findAll);

  app.get("/emphiring/api/v1/jobs/:jobId", jobController.findOne);

  app.put("/emphiring/api/v1/jobs/:jobId", jobController.update);

  app.delete("/emphiring/api/v1/jobs/:jobId", jobController.delete);
};
