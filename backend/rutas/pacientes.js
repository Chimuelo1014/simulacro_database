import { Router } from 'express';
import db from '../db.js';

const router = Router();

router.get('/pacientes', (req, res) => {
  db.query('SELECT * FROM pacientes', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

router.post('/pacientes', (req, res) => {
  const { nombre, correo } = req.body;
  db.query('INSERT INTO pacientes (nombre_paciente, correo_paciente) VALUES (?, ?)', [nombre, correo], err => {
    if (err) return res.status(500).send(err);
    res.send('🟢 paciente creado');
  });
});

router.put('/pacientes/:id', (req, res) => {
  const { nombre, correo } = req.body;
  db.query('UPDATE pacientes SET nombre_paciente = ?, correo_paciente = ? WHERE id = ?', [nombre, correo, req.params.id], err => {
    if (err) return res.status(500).send(err);
    res.send('🟡 paciente actualizado');
  });
});

router.delete('/pacientes/:id', (req, res) => {
  db.query('DELETE FROM pacientes WHERE id = ?', [req.params.id], err => {
    if (err) return res.status(500).send(err);
    res.send('🔴 paciente eliminado');
  });
});

export default router;
