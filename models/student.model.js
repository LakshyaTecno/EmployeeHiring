module.exports = (sequelize, Sequelize) =>{
    const Student = sequelize.define("student" , {
        id :{
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        name : {
            type : Sequelize.STRING,
            allowNull : false
        },
        email : {
            type : Sequelize.STRING,
            allowNull : false
        },
        qualification: {
            type : Sequelize.STRING  
        },
        password : {
            type : Sequelize.STRING,
            allowNull : false
        }
    });
    return Student;

}