const poolPromise = require("../config/database");

const getAllUsers = async () => {
  const pool = await poolPromise;
  const result = await pool.request().query("SELECT * FROM Clientes");
  return result.recordset;
};

module.exports = { getAllUsers };
