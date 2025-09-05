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

// --- Multer Configuration ---
const isVercel = process.env.VERCEL === '1';

// Use memory storage on Vercel (read-only filesystem), and disk storage locally
const storage = isVercel
  ? multer.memoryStorage()
  : multer.diskStorage({
      destination: './public/schoolImages',
      filename: (req, file, cb) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
          cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
      },
    });

const upload = multer({ storage: storage });

// --- API Router ---
const router = createRouter();

// Always apply the multer middleware to parse the form data.
router.use(upload.single('image'));

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
        const { name, address, city, state, contact, email_id } = req.body;
        
        // Use the generated filename locally, or a placeholder on Vercel
        const imageName = req.file && !isVercel
            ? req.file.filename
            : 'placeholder-deployed.jpg';

        connection = await getDbConnection();
        const query = 'INSERT INTO schools (name, address, city, state, contact, email_id, image) VALUES (?, ?, ?, ?, ?, ?, ?)';
        const values = [name, address, city, state, contact, email_id, imageName];
        
        await connection.execute(query, values);
        res.status(201).json({ success: true, message: 'School added successfully.' });
    } catch (error) {
        console.error('API POST Error:', error);
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

// THIS IS THE FIX: The config is now static, which resolves the build error.
// We always disable bodyParser because multer is now handling all environments.
export const config = {
    api: {
        bodyParser: false,
    },
};

