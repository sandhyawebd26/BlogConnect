const { User } = require("../../Models/user");
const bcrypt = require("bcryptjs");
const generateAuthToken = require("../../Shared/generateAuthToken.js");

const postRegister = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(409).send("Email already exists");
    }

    if (password !== confirmPassword) {
      return res.status(400).send("Passwords do not match");
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email: email.toLowerCase(),
      password: encryptedPassword,
      confirmPassword: encryptedPassword
    });

    const token = generateAuthToken(user);

    res.status(201).json({ success: true, user, token });
  } catch (err) {
    console.log("ERROR =>", err);
    res.status(500).send(`${err}, user not created`);
  }
};




module.exports = postRegister;


