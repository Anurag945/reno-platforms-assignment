// /pages/api/schools.js
import mysql from 'mysql2/promise';

async function getDbConnection() {
    return await mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    });
}

export default async function handler(req, res) {
    const { method } = req;
    let connection;
    try {
        connection = await getDbConnection();
        switch (method) {
            case 'GET':
                const [rows] = await connection.execute('SELECT * FROM schools ORDER BY id DESC');
                res.status(200).json({ success: true, data: rows });
                break;
            case 'POST':
                const { name, address, city, state, contact, email_id, image } = req.body;
                const query = 'INSERT INTO schools (name, address, city, state, contact, email_id, image) VALUES (?, ?, ?, ?, ?, ?, ?)';
                const values = [name, address, city, state, contact, email_id, image];
                await connection.execute(query, values);
                res.status(201).json({ success: true, message: 'School added successfully.' });
                break;
            default:
                res.setHeader('Allow', ['GET', 'POST']);
                res.status(405).end(`Method ${method} Not Allowed`);
        }
    } catch (error) {
        console.error('Database Error:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    } finally {
        if (connection) await connection.end();
    }
}