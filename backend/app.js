import express from 'express';
import cors from 'cors';
import pacientes from './rutas/pacientes.js';
import db from './db.js';
// import uploadCSV from './uploadCSV.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/pacientes', pacientes);
app.use('/upload-csv', uploadCSV);

app.listen(3000, () => {
  console.log("🚀 Servidor en http://localhost:3000");
});
