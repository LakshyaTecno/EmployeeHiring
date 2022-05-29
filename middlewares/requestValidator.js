/**
 * This file will consists of middlewares for validating the request body
 */

const { company } = require("../models");

/**
 *
 * const xyz = require("../models");
 *
 * Category = xyz.category
 */

/**
 *
 * const db =  require("../models");
 *
 * category = db.category
 */

const validateStudentRequest = (req, res, next) => {
  /**
   * check for name
   */
  if (!req.body.name) {
    res.status(400).send({
      message: "Name of the student is not provided",
    });
    return;
  }

  /**
   * Check for the description
   */
  if (!req.body.email) {
    res.status(400).send({
      message: "Email of the student is not provided",
    });
    return;
  }

  //Go to the controller
  next();
};

/**
 * Validate the request body for categories
 */

const validateCompanyRequest = (req, res, next) => {
  /**
   * check for name
   */
  if (!req.body.companyName) {
    res.status(400).send({
      message: "Name of the company is not provided",
    });
    return;
  }

  /**
   * Check for the description
   */
  if (!req.body.email) {
    res.status(400).send({
      message: "Email of the category is not provided",
    });
    return;
  }

  //Go to the controller
  next();
};

/**
 * Validator for the Products request body
 */

const validateJobRequest = (req, res, next) => {
  /**
   * check for name
   */
  if (!req.body.title) {
    res.status(400).send({
      message: "Title of the provided is not provided",
    });
    return;
  }

  /**
   * Check for the description
   */
  if (!req.body.description) {
    res.status(400).send({
      message: "Description of the product is not provided",
    });
    return;
  }

  /**
   * Check for the code
   */

  if (!req.body.salary || req.body.salary <= 0) {
    res.status(400).send({
      message: "Salary doesn't seem to be in place",
    });
    return;
  }

  /**
   * Validation for the category id
   */

  if (req.body.companyId) {
    console.log("Inside the if");
    //Check if it's valid value
    company.findByPk(req.body.companyId).then((company) => {
      if (!company) {
        res.status(400).send({
          message: "Company Id is not valid",
        });
        return;
      }
      next();
    });
  } else {
    res.status(400).send({
      message: "company Id is not provided",
    });
    return;
  }
};

module.exports = {
  validateCompanyRequest: validateCompanyRequest,
  validateJobRequest: validateJobRequest,
  validateStudentRequest: validateStudentRequest,
};
