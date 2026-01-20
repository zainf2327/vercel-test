import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();


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


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
