const verifySignUp = require("./verifySignUp");
const authJwt = require("./authjwt");
const requestValidator = require("./requestValidator");

/**
 * This is returning the object
 */
module.exports = {
  verifySignUp,
  authJwt,
  requestValidator,
};
