const User = require("../models/user");

exports.registerUser = async (req, res) => {
  try {
    const { firstname, lastname, middlename, email, phone } = req.body;
    const profile_picture = req.file ? req.file.filename : "";
    
    const newUser = await User.create({ firstname, lastname, middlename, email, phone, profile_picture });
    res.status(201).json({ message: "Congratulations, you have successfully registered for an account!", user: newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};