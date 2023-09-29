const jwt = require('jsonwebtoken');
const HttpStatus = require("../utils/httpStatus.utils.js");
const Response = require("../utils/response.utils.js");
require("dotenv").config();
 
module.exports = (req, res, next) => {
   try {
       const token = req.headers.authorization.split(' ')[1];
       const decodedToken = jwt.verify(token, process.env.SECRET,);
       const userId = decodedToken.userId;
       req.auth = {
           userId: userId
       };
	next();
   } catch(error) {
       res.status(HttpStatus.UNAUTHORIZED.code).send(
        new Response(
            HttpStatus.UNAUTHORIZED.code,
            HttpStatus.BAD_REQUEST.message,
            `You don't have permission to go there.`
        )
    );
   }
};