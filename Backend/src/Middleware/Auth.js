const JWT = require("jsonwebtoken");
const { User } = require("../Model/User.Model");
// ,{expiresIn:"1m"}
const generateAuthToken = async (data) => {
  const { _id } = data
  console.log(data, "datas");
  let token = JWT.sign({ id: _id, }, "secret");
console.log(token,"generate")
  return token;
};

const verifyAuthToken = async (req, res, next) => {
  try {
    let headers = req.headers;
    
    // Ensure the Authorization header exists
    if (!headers.authorization) {
      return res.status(401).send({ message: "Missing Authorization header" });
    }
    
    let bearer = headers.authorization.split(" ");
    let token = bearer[1];

    // Check if token is missing or invalid
    if (!token) {
      return res.status(401).send({ message: "Invalid Token" });
    }

    // Verify the JWT token
    let payload = await JWT.verify(token, "secret");
    console.log(payload,"payload");

    // Check if the payload has a valid user ID
    if (!payload.id) {
      return res.status(401).send({ message: "Invalid Token" });
    }

    let userId = payload.id;
    
    // Find the user by the user ID
    let findUserId = await User.findById(userId);

    // Check if the user exists
    if (!findUserId) {
      return res.status(401).send({ message: "Invalid User" });
    }

    // Check if the user is active
    if (!findUserId.active) {
      return res.status(400).send({ message: "User Disabled" });
    }

    // Assign the user ID to the request object
    req.userId = userId;

    // Call the next middleware
    next();
  } catch (error) {
    // Pass any caught error to the error handling middleware
    next(error);
  }
};

module.exports = verifyAuthToken;


module.exports = verifyAuthToken;



// const verifyAuthToken = async (req, res, next) => {
//   try {
//     let headers = req.headers;
//     let bearer = headers.authorization.split(" ");
//     let token = bearer[1];

//     if (!token) {
//       return res.status(401).send({ message: "Invalid Token" });
//     }

//     let payload = JWT.verify(token, "secret");
//     console.log(payload.id,"pau")
//     if (!payload.id) {
//       return res.status(401).send({ message: "Invalid Token pay" });
//     }

//     let userId = payload.id;
//     let findUserId = await User.findById(userId);

//     if (!findUserId) {
//       return res.status(401).send({ message: "Invalid User" });
//     }

//     if (findUserId.active !== true) {
//       return res.status(400).send({ message: "User Disabled" });
//     }

//     req.userId = userId;
//     next();
//   } catch (error) {
//     next(error); // Pass error to the next middleware or error handler
//   }
// };



module.exports = {verifyAuthToken,
  generateAuthToken,
};
