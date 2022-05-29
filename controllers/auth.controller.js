//  const bcrypt = require('bcryptjs');

//  const db = require('../models');

//  const User = db.user;
//  const Role = db.role;
//  const Company=db.company;

//  const Student=db.student

//  const Op = db.Sequelize.Op;

//  const jwt = require('jsonwebtoken');

//  const secretKey = require('../configs/secret.config');

//  /**
//   * Handler for signup
//   */
//  exports.signup = (req, res) => {

//      const userObj = {
//          id:req.body.id,
//          name: req.body.name,
//          email: req.body.email,
//          password: bcrypt.hashSync(req.body.password, 8),  // need to encrypt this
//          usertype:req.body.usertype
//     }
//     const { role } = req.params;

//      User.create(userObj).then(user => {

//         const isEmailExistInAdmins = await Admin.findOne( userObj.email );
//         const isEmailExistInCompanies = await Company.findOne( userObj.email );
//         const isEmailExistInStudents = await Student.findOne( userObj.email );

//         if (isEmailExistInAdmins || isEmailExistInCompanies || isEmailExistInStudents)
//         return res.status(400).send({
//           message: 'The email address is already in use by another account.'
//         });
//          console.log("user created");
//          if (role) {
//              Role.findAll({
//                  where: {
//                      name: role // array of roles
//                  }
//              }).then(role => {
//                  console.log("role", role);
//                  //Set these roles with user
//                  user.setRoles(roles).then(() => {
//                      console.log("registration completed");
//                      res.status(201).send({
//                          message: "User successfully registed"
//                      })
//                  })

//              })

//             if (role === COMPANY) {

//                 const companyObj={
//                     id:req.body.id,
//                     name: req.body.name,
//                     email: req.body.email,
//                     description:req.body.description,
//                     password: bcrypt.hashSync(req.body.password, 8),
//                 }

//                 Company.create(companyObj).then(company=>{
//                     console.log("Company added in the database with name ", company.name);
//                     res.status(201).send(company);
//                 }).catch(err=>{
//                     console.log("Error while adding the Company with name ", company.name);
//                     res.status(500).send({
//                         message: "Some internal error happened"
//                     })
//                 })

//             } else if (role === STUDENT) {

//                 const studentObj={
//                     id:req.body.id,
//                     name: req.body.name,
//                     email: req.body.email,
//                     age:req.body.age,
//                     password: bcrypt.hashSync(req.body.password, 8),
//                 }

//                 Student.create(studentObj).then(student=>{
//                     console.log("Student added in the database with name ", student.name);
//                     res.status(201).send(student);
//                 }).catch(err=>{
//                     console.log("Error while adding the student with name ", student.name);
//                     res.status(500).send({
//                         message: "Some internal error happened"
//                     })
//                 })

//             }
//          }
//      }).catch(err=>{
//          console.log("Error while creating user", err.message);
//          res.status(500).send({
//              message : "Some Internal error"
//          })
//      })

//  }

//  exports.signin = (req,res)=>{

//      User.findOne({
//          where : {
//              email : req.body.email
//          }
//      }).then(user =>{
//          if(!user){
//              res.status(404).send({
//                  message : "User Not found"
//              })
//              return;
//          }

//          //verify the password
//          var passwordIsValid = bcrypt.compareSync(
//              req.body.password,
//              user.password
//          );

//          if(!passwordIsValid){
//              res.status(401).send({
//                  message : "Invalid Password"
//              })
//          }

//          /**
//           * Need to generate the access token
//           */
//          var token = jwt.sign({id: user.id} ,secretKey.secret,{
//              expiresIn : 300 // This again we could have kept in the config file
//          });

//          user.getRoles().then(roles=>{

//              let authority="ROLE_"+roles[i].name.toUpperCase();
//              res.status(200).send({
//                  id : user.id,
//                  username : user.username,
//                  email : user.email,
//                  roles : authority,
//                  accessToken : token
//              });

//          });

//      }).catch(err=>{
//          res.status(500).send({
//              message : "Internal error while signin"
//          })
//      })
//  }
