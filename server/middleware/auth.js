const jwt = require("jsonwebtoken");
const { User } = require("../Models/user.js");
const SECRET_KEY = "ASDFGHJKLMNBVCXZ";

const auth = async (req, res, next) => {
  try {
    console.log("Authorization", req.header("Authorization"));
    const token = (req.header("Authorization").replace("Bearer", "")).trim();
    console.log("token=>" + token + "-");

    const decoded = jwt.verify(token, SECRET_KEY);
    console.log("decoded=>", decoded);

    console.log("user=>", decoded);
    const user = await User.findById(decoded._id);

    if (!user) {
      throw new Error();
    }
    req.user = user;
    req.token = token;
    console.log("user=>", req.user);
    next();
  } catch (e) {
    console.log("error=>", e);

    res.status(401).json({ success: false, error: "Please authenticate!" });
  }
};

module.exports = auth;
