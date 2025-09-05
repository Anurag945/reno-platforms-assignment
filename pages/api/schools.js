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
    destination: './public/schoolImages',
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });

// --- API Router ---
const router = createRouter();

// This middleware will only run on non-Vercel environments to handle file uploads.
// It populates req.body and req.file for the POST handler.
if (process.env.VERCEL !== '1') {
  router.use(upload.single('image'));
}

// GET handler to fetch all schools
router.get(async (req, res) => {
    let connection;
    try {
        connection = await getDbConnection();
        const [rows] = await connection.execute('SELECT * FROM schools ORDER BY id DESC');
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
        // The middleware has already processed the form data.
        // On Vercel, Next.js's body parser runs. Locally, multer runs.
        const { name, address, city, state, contact, email_id } = req.body;
        
        // Use a placeholder on Vercel or if no file is uploaded.
        // Otherwise, use the real filename from multer.
        const imageName = req.file ? req.file.filename : 'placeholder-deployed.jpg';

        connection = await getDbConnection();
        const query = 'INSERT INTO schools (name, address, city, state, contact, email_id, image) VALUES (?, ?, ?, ?, ?, ?, ?)';
        const values = [name, address, city, state, contact, email_id, imageName];
        
        await connection.execute(query, values);
        res.status(201).json({ success: true, message: 'School added successfully.' });
    } catch (error) {
        // Add more detailed logging for debugging
        console.error('API POST Error:', error);
        console.error('Request Body:', req.body);
        console.error('Request File:', req.file);
        res.status(500).json({ success: false, message: 'Internal Server Error', error: error.message });
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

// Let Vercel handle the body parsing on deployment, but disable it locally so multer can.
export const config = {
    api: {
        bodyParser: process.env.VERCEL === '1',
    },
};

