const Connection = require("tedious").Connection;

const config = {
  server: "LAPTOP-AOQ3HB46",
  authentication: {
    type: "default",
    options: {
      userName: "sa",
      password: "@Jorge2022",
    },
  },
  options: {
    port: 1433,
    database: "PuntoDeVentaEquipo2",
    trustServerVerification: true,
  },
};

const connection = new Connection(config);
connection.connect();

connection.on("connect", (err) => {
  if (err) {
    console.log("Error al conectarse a la base de datos");
  }
  executeStatement();
});

function executeStatement() {
  console.log("Conectado a la base de datos");
}

// const sql = require("mssql");

// const config = {
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   server: process.env.DB_SERVER,
//   database: process.env.DB_NAME,
//   options: {
//     port: 1433,
//     encrypt: true,
//     trustServerCertificate: true,
//   },
// };

// const poolPromise = new sql.ConnectionPool(config)
//   .connect()
//   .then((pool) => {
//     console.log("Conexión a la base de datos establecida");
//     return pool;
//   })
//   .catch((err) =>
//     console.error("Error en la conexión a la base de datos:", err)
//   );

// module.exports = poolPromise;
