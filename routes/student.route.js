/**
 * This file will contain the REST URIs mapping with the controllers
 */

const { requestValidator } = require("../middlewares");

const studentController = require("../controllers/student.controller");

module.exports = (app) => {
  app.post(
    "/emphiring/api/v1/student",
    [requestValidator.validateStudentRequest],
    studentController.create
  );

  app.get("/emphiring/api/v1/student", studentController.findAll);

  app.get("/emphiring/api/v1/student/:id", studentController.findOne);

  app.put("/emphiring/api/v1/student/:id", studentController.update);

  app.delete("/emphiring/api/v1/student/:id", studentController.delete);
};
