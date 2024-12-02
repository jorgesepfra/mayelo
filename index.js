require("dotenv").config(); // Carga variables de entorno
const express = require("express");
const app = express();
const routes = require("./routes");

app.use(express.json());
// app.use("/api", userRoutes);
app.use(routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
