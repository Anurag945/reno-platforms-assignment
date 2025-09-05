import mysql from 'mysql2/promise';
import { createRouter } from 'next-connect';
import multer from 'multer';
import path from 'path';

// --- Database Connection ---
async function getDbConnection() {
    return await mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    });
}

// --- Multer Configuration for Image Upload ---
const storage = multer.diskStorage({
    destination: './public/schoolImages', // The folder to save images
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });

// --- API Router ---
const router = createRouter();

router.use(upload.single('image')); // 'image' is the name of the file input field

// GET handler to fetch all schools
router.get(async (req, res) => {
    let connection;
    try {
        connection = await getDbConnection();
        const [rows] = await connection.execute('SELECT * FROM schools ORDER BY id DESC'); // Fetches from the 'schools' table
        res.status(200).json({ success: true, data: rows });
    } catch (error) {
        console.error('Database Error (GET):', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    } finally {
        if (connection) await connection.end();
    }
});

// POST handler to add a new school
router.post(async (req, res) => {
    let connection;
    try {
        const { name, address, city, state, contact, email_id } = req.body; // Form fields
        const imageName = req.file ? req.file.filename : 'no-image.jpg';

        connection = await getDbConnection();
        const query = 'INSERT INTO schools (name, address, city, state, contact, email_id, image) VALUES (?, ?, ?, ?, ?, ?, ?)'; // Inserts into 'schools' table with all required columns
        const values = [name, address, city, state, contact, email_id, imageName];
        
        await connection.execute(query, values);
        res.status(201).json({ success: true, message: 'School added successfully.' });
    } catch (error) {
        console.error('Database Error (POST):', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    } finally {
        if (connection) await connection.end();
    }
});

// --- Default Handler ---
export default router.handler({
    onError: (err, req, res) => {
        console.error(err.stack);
        res.status(500).end("Something broke!");
    },
    onNoMatch: (req, res) => {
        res.status(404).end("Page is not found");
    },
});

export const config = {
    api: {
        bodyParser: false, // Disabling body parser, multer will handle it
    },
};