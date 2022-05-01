const jwt = require("jsonwebtoken");
const config = require("../configs/secret.config");


const db = require("../models");
const User = db.user;


verifyToken = (req, res, next) => {

    var token = req.headers['x-access-token'];  


    if (!token) {
        return res.status(403).send({
            message: "No token provided"
        });
        
    }

    jwt.verify(token, config.secret, (err, decodedToken) => {
        if (err) {
            res.status(401).send({
                message: "Uauthorized"
            });
            return;
        }

        req.userId = decodedToken.id; 
        next();
    })
}

isAdmin = (req, res , next)=>{

    User.findByPk(req.userId).then(user =>{
        user.getRoles().then(roles=>{
            for(let i=0;i<roles.length;i++){
                if(roles[i].name =='admin'){
                    next();
                    return;
                    
                }
            }

            res.status(403).send({
                "message" : "Requires ADMIN role"
            });
            return;
        })
    })
}


isCompany = (req, res , next)=>{

    User.findByPk(req.userId).then(user =>{
        user.getRoles().then(role=>{
                if(role.name =='company'){
                    next();
                    return;
                    
                }
            

            res.status(403).send({
                "message" : "Requires company role"
            });
            return;
        })
    })
}


isStudent = (req, res , next)=>{

    User.findByPk(req.userId).then(user =>{
        user.getRoles().then(role=>{
                if(role[i].name =='student'){
                    next();
                    return;
                    
                }
            

            res.status(403).send({
                "message" : "Requires STUDENT role"
            });
            return;
        })
    })
}



const authJwt = {
    verifyToken : verifyToken,
    isAdmin : isAdmin,
    isStudent:isStudent,
    isCompany:isCompany
}
module.exports= authJwt;