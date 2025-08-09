// backend/server.js
import express from "express";
import cors from "cors";

// Conexión a base de datos
import db from "./db.js";

// Rutas
// import pacientesRoutes from "./rutas/pacientes.js";
// import citasRoutes from "./rutas/citas.js";
import medicosRoutes from "./rutas/medicos.js";
//aqui irira el import del upload csv
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Conexión a la base de datos
try {
  await db.authenticate();
  console.log("✅ Conexión a la base de datos establecida correctamente.");
} catch (error) {
  console.error("❌ Error al conectar a la base de datos:", error);
}

// Rutas principales
// app.use("/pacientes", pacientesRoutes);
// app.use("/citas", citasRoutes);
app.use("/medicos", medicosRoutes);

// Servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
