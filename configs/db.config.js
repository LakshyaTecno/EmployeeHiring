module.exports = {
    HOST : "localhost",
    USER : "root",
    PASSWORD : "L@kshya06",
    DB : "emp_hiring",
    dialect : "mysql",
    pool : {
        max : 5,  // Maximum connection possible at any time =5 at peak load
        min : 0,  // 
        acquire : 30000,  // in ms - wait for 30000 ms before aborting a connection request
        idle : 1000
    }
 }