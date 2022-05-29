const model = require("../models");

const Job = model.job;

exports.create = (req, res) => {
  const job = {
    jobId: req.body.jobId,
    companyId: req.body.companyId,
    title: req.body.title,
    description: req.body.description,
    minQualification: req.body.minQualification,
    salary: req.body.salary,
    companyCompanyId: req.body.companyId,
  };
  Job.create(job)
    .then((job) => {
      console.log("JOb is added in the Database with title", job.title);
      res.status(201).send(job);
    })
    .catch((err) => {
      console.log("Error while adding the Job with name ", job.title);
      res.status(500).send({
        message: "Some internal error happened",
      });
    });
};

exports.findAll = (req, res) => {
  const jobTitle = req.query.title;

  var promise;

  if (jobTitle) {
    promise = Job.findAll({
      where: {
        title: jobTitle,
      },
    });
  } else {
    promise = Job.findAll();
  }

  promise
    .then((jobs) => {
      res.status(200).send(jobs);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Some internal error happened",
      });
    });
};

exports.findOne = (req, res) => {
  const jobId = req.params.jobId;
  console.log(jobId);

  Job.findByPk(jobId)
    .then((job) => {
      res.status(200).send(job);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Internal error occured",
      });
    });
};

exports.update = (req, res) => {
  console.log("heere");
  const JOB = {
    jobId: req.body.jobId,
    title: req.body.title,
    description: req.body.description,
    minQualification: req.body.minQualification,
    salary: req.body.salary,
  };

  const jobId = req.params.jobId;

  Job.update(JOB, {
    where: {
      jobId: jobId,
    },
    returning: true,
  })
    .then((updatedJOb) => {
      // TO return the updated category
      Job.findByPk(jobId)
        .then((job) => {
          console.log(job);
          res.status(200).send(job);
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
  const jobId = req.params.jobId;

  Job.destroy({
    where: {
      jobId: jobId,
    },
  })
    .then((result) => {
      res.status(200).send({
        message: "Deleted",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message: "Internal error occured",
      });
    });
};
