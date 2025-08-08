import { Router } from 'express';
import db from '../db.js';

const router = Router();

router.get('/medicos', (req, res) => {
  db.query('SELECT * FROM medicos', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

router.post('/medicos', (req, res) => {
  const { nombre } = req.body;
  db.query('INSERT INTO medicos (nombre_medico) VALUES (?)', [nombre], err => {
    if (err) return res.status(500).send(err);
    res.send('🟢 medico creado');
  });
});

router.put('/medicos/:id', (req, res) => {
  const { nombre } = req.body;
  db.query('UPDATE medicos SET nombre_medico = ? WHERE id = ?', [nombre, req.params.id], err => {
    if (err) return res.status(500).send(err);
    res.send('🟡 medico actualizado');
  });
});

router.delete('/medicos/:id', (req, res) => {
  db.query('DELETE FROM medicos WHERE id = ?', [req.params.id], err => {
    if (err) return res.status(500).send(err);
    res.send('🔴 medico eliminado');
  });
});

export default router;
