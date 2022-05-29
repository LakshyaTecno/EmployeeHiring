const model = require("../models");

const Student = model.student;

exports.create = (req, res) => {
  const student = {
    id: req.body.id,
    name: req.body.name,
    email: req.body.email,
    qualification: req.body.qualification,
  };

  Student.create(student)
    .then((student) => {
      console.log("Student is added in the Database with name", student.name);
      res.status(201).send(student);
    })
    .catch((err) => {
      console.log(err);
      console.log("Error while adding the Company with name ", student.name);
      res.status(500).send({
        message: "Some internal error happened",
      });
    });
};

exports.findAll = (req, res) => {
  const name = req.query.name;
  console.log(name);

  var promise;

  if (name) {
    promise = Student.findAll({
      where: {
        name: name,
      },
    });
  } else {
    promise = Student.findAll();
  }

  promise
    .then((students) => {
      res.status(200).send(students);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Some internal error happened",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Student.findByPk(id)
    .then((student) => {
      res.status(200).send(student);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Internal error occured",
      });
    });
};

exports.update = (req, res) => {
  const student = {
    name: req.body.name,
    email: req.body.email,
    qualification: req.body.qualification,
  };

  const id = req.params.id;

  Student.update(student, {
    where: {
      id: id,
    },
    returning: true,
  })
    .then((updatedStudent) => {
      // TO return the updated category
      Student.findByPk(id)
        .then((student) => {
          console.log(student);
          res.status(200).send(student);
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
  const id = req.params.id;

  Student.destroy({
    where: {
      id: id,
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
