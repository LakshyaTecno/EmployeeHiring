module.exports = ( sequelize, Sequelize ) =>{
    
    const User = sequelize.define("user",{
        id :{
            type : Sequelize.STRING,
            primaryKey : true,
            autoIncrement : true
        },
        name :{
            type : Sequelize.STRING
        },
        email : {
            type : Sequelize.STRING,
            allowNull : false
        },
        password : {
            type : Sequelize.STRING,
            allowNull : false
        }
    });

    return User ;
}