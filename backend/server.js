import express from "express";
import cors from "cors";

import pacientesRoutes from "./rutas/pacientes.js";
import citasRoutes from "./rutas/citas.js";
import medicosRoutes from "./rutas/medicos.js";

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use("/pacientes", pacientesRoutes);
app.use("/pacientes", citasRoutes);
app.use("/medicos", medicosRoutes);

app.listen(3000, () => {
  console.log("🚀 Servidor corriendo en http://localhost:3000");
});
