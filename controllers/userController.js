const UserModel = require("../models/userModel");

const getUsers = async (req, res) => {
  try {
    const users = await UserModel.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).send("Error al obtener usuarios");
  }
};

module.exports = { getUsers };
