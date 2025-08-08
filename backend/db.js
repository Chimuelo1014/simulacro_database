import mysql from 'mysql2';

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',       // tu usuario de MySQL
    password: 'Quintero.qwe*123',       // tu contraseña de MySQL
    database: 'CrudClinic'
});

db.connect(err => {
    if (err) {
        console.error('Error de conexión a MySQL:', err);
        return;
    }
    console.log('✅ Conectado a MySQL');
});

export default db;


