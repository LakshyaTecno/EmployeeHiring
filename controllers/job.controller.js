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

exports.delete = (req, res) => {
  const id = req.param.id;
  console.log(id);

  Job.destroy({
    where: {
      jobId: id,
    },
  })
    .then((result) => {
      res.status(200).send({
        message: "Job Deleted",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message: "Internal error occured",
      });
    });
};
