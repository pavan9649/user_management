const expressJwt = require("express-jwt");
const dotenv=require('dotenv')
dotenv.config({ path: './config.env'})
const api = process.env.API_URL;

function authJwt() {
  const secret = process.env.secret;

  return expressJwt({
    secret,
    algorithms: ["HS256"],
  }).unless({
    path: [
      `${api}/users/login`,
      `${api}/users/signup`,
    ],
  });
}

module.exports = authJwt;