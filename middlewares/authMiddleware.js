const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(401).send({
          message: "Auth Failed",
          success: false,
        });
      } else {
        req.body.userID = decode.id;
        next();
      }
    });
  } catch (error) {
    console.log(error);
    res.status(200).send({
      message: "Auth-Failed",
      success: false,
    });
  }
};

//Changed code here................................

// const JWT = require("jsonwebtoken");

// module.exports = async (req, res, next) => {
//   try {
//     const authorizationHeader = req.headers["authorization"];
//     if (!authorizationHeader) {
//       return res.status(401).send({
//         message: "Auth Failed",
//         success: false,
//       });
//     }

//     const token = authorizationHeader.split(" ")[1];
//     JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
//       if (err) {
//         return res.status(401).send({
//           message: "Auth Failed",
//           success: false,
//         });
//       } else {
//         req.body.userID = decode.id;
//         next();
//       }
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(401).send({
//       message: "Auth Failed",
//       success: false,
//     });
//   }
// };
