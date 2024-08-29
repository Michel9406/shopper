import express from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5002;


const genAI = new GoogleGenerativeAI(process.env.API_KEY);


app.get('/api/generate', async (req, res) => {
  try {
    const response = await genAI.generate({ prompt: 'Hello, world!' });
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to generate text' });
  }
});

// Iniciar projeto
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});