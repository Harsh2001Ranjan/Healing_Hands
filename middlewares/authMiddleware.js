const User = require("../models/userModels");

const jwt = require("jsonwebtoken");

// module.exports = async (req, res, next) => {
//   try {
//     const token = req.headers["authorization"].split(" ")[1];
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
//       message: "Auth-Failed",
//       success: false,
//     });
//   }
// };

//Changed code here................................

// const JWT = require("jsonwebtoken");

// module.exports = async (req, res, next) => {
//   try {
//     const authorizationHeader = req.headers.Authorization;
//     console.log(authorizationHeader);
//     if (!authorizationHeader) {
//       return res.status(401).send({
//         message: "Auth Failed",
//         success: false,
//       });
//     }
//     console.log(authorizationHeader);
//     // const token = authorizationHeader.split(" ")[1];
//     token = authorizationHeader;
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

module.exports = async (req, res, next) => {
  try {
    const authorizationHeader = req.headers["authorization"];
    if (!authorizationHeader) {
      return res.status(401).send({
        message: "Auth Failed",
        success: false,
      });
    }

    const token = authorizationHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");
    req.userId = user._id;
    next();
    // JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
    //   if (err) {
    //     return res.status(401).send({
    //       message: "Auth Failed",
    //       success: false,
    //     });
    //   } else {
    //     req.userID = decode.id;
    //     next();
    //   }
    // });
  } catch (error) {
    console.log(error);
    res.status(401).send({
      message: "Auth Failed",
      success: false,
    });
  }
};
