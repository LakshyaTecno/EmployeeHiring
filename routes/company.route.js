/**
 * This file will contain the REST URIs mapping with the controllers
 */

const { requestValidator } = require("../middlewares");

const companyController = require("../controllers/company.controller");

module.exports = (app) => {
  app.post(
    "/emphiring/api/v1/company",
    [requestValidator.validateCompanyRequest],
    companyController.create
  );

  app.get("/emphiring/api/v1/company", companyController.findAll);

  app.get("/emphiring/api/v1/company/:companyId", companyController.findOne);

  app.put("/emphiring/api/v1/company/:companyId", companyController.update);

  app.delete("/emphiring/api/v1/company/:companyId", companyController.delete);
};
