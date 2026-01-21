import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT||3000;

app.use(cors());
 
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from MessageApi on Vercel!' });
});
app.get('/', (req, res) => {
  res.json({ message: 'Hello from Express on Vercel!' });
});
 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});