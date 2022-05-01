/**
 * This file will contain the REST URIs mapping with the controllers
 */

const companyController = require("../controllers/company.controller");

module.exports = (app) => {
  app.post("/emphiring/api/v1/company", companyController.create);

  app.get("/emphiring/api/v1/company", companyController.findAll);

  app.get("/emphiring/api/v1/company/:companyId", companyController.findOne);

  app.put("/emphiring/api/v1/comapany/:companyId", companyController.update);

  app.delete("/emphiring/api/v1/company/:companyId", companyController.delete);
};
