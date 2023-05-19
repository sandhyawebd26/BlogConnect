const jwt = require("jsonwebtoken");
const SECRETKEY = 'ASDFGHJKLMNBVCXZ'

function generateAuthToken(user) {
  const token = jwt.sign(

    {
      _id: user._id.toString(),
      name: `${user.name}`,
    },
    SECRETKEY,
    {
      expiresIn: "7d",
    }
  );
  return token;
}

module.exports = generateAuthToken;
