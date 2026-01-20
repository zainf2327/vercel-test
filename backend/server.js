import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const __dirname = path.resolve();

const app = express();
const port = process.env.PORT;

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());


app.get('/api/message', (req, res) => {
    res.json({
        message: 'Hello from Express Backend!',
        timestamp: new Date().toISOString()
    });
});

// For Production
if (process.env.NODE_ENV === "production") {
    // //app.use(express.static(path.join(__dirname, "../frontend/dist")));

    // app.get("/{*any}", (req, res) => {
    //     res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    // })

    // __dirname is the 'backend' folder. 
    // Since 'mv' puts 'dist' inside 'backend', the path is now:
    const distPath = path.join(__dirname, 'dist');

    app.use(express.static(distPath));

    app.get('*', (req, res) => {
        res.sendFile(path.join(distPath, 'index.html'));
    });
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
