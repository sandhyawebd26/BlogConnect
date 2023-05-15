const Admin = require('../Models/admin');
const bcrypt = require("bcryptjs")
const generateAuthToken = require("../Shared/generateAuthToken");

const postAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await Admin.findOne({ email: email.toLowerCase() });

        if (user && (await bcrypt.compare(password, user.password))) {
            const token = generateAuthToken(user);
            return res.status(200).send({ user, token });
        }
        return res.status(400).send("Invalid credential! Please try again");
    } catch (err) {
        return res.status(500).send(err);
    }
};

module.exports = postAdmin;