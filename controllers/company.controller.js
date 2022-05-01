const model = require("../models");

const Company = model.company;

exports.create = (req, res) => {
  const company = {
    companyId: req.body.companyId,
    companyName: req.body.companyName,
    email: req.body.email,
    website: req.body.website,
    empsize: req.body.empsize,
  };
  Company.create(company)
    .then((company) => {
      console.log(
        "Company is added in the Database with name",
        company.companyName
      );
      res.status(201).send(company);
    })
    .catch((err) => {
      console.log(
        "Error while adding the Company with name ",
        company.companyName
      );
      res.status(500).send({
        message: "Some internal error happened",
      });
    });
};

exports.findAll = (req, res) => {
  const companyName = req.query.name;
  console.log(companyName);

  var promise;

  if (companyName) {
    promise = Company.findAll({
      where: {
        companyName: companyName,
      },
    });
  } else {
    promise = Company.findAll();
  }

  promise
    .then((companies) => {
      res.status(200).send(companies);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Some internal error happened",
      });
    });
};

exports.findOne = (req, res) => {
  const companyId = req.params.companyId;
  console.log(companyId);

  Company.findByPk(companyId)
    .then((company) => {
      res.status(200).send(company);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Internal error occured",
      });
    });
};

exports.update = (req, res) => {
  const company = {
    companyName: req.body.companyName,
    email: req.body.email,
    website: req.body.website,
    empsize: req.body.empsize,
  };

  const companyId = req.params.companyId;

  Company.update(company, {
    returning: true,
    where: {
      companyId: companyId,
    },
  })
    .then((updatedComapany) => {
      Company.findByPk(companyId)
        .then((company) => {
          res.status(200).send(company);
        })
        .catch((err) => {
          res.status(500).send({
            message: "Internal error occured",
          });
        });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Internal error occured",
      });
    });
};

exports.delete = (req, res) => {
  const companyId = req.params.companyId;

  Company.destroy({
    where: {
      companyId: companyId,
    },
  })
    .then((result) => {
      res.status(200).send({
        message: "Deleted",
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Internal error occured",
      });
    });
};
