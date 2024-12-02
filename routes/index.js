const express = require("express");
const router = express.Router();
const clientesRoutes = require("./userRoutes");

// Ruta de ejemplo
// router.get("/", (req, res) => {
//   res.send("¡Hola desde las rutas!");
// });

router.use("/clientes", clientesRoutes);

module.exports = router;
