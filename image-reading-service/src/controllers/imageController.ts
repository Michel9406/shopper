import { Request, Response } from 'express';
import axios from 'axios';

const GOOGLE_GEMINI_API_URL = process.env.GOOGLE_GEMINI_API_URL || '';

export const analyzeImage = async (req: Request, res: Response) => {
  try {
    const { imageUrl } = req.body;
    const response = await axios.post(`${GOOGLE_GEMINI_API_URL}/analyze`, { imageUrl });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error analyzing image', error });
  }
};

export const getImageInfo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`${GOOGLE_GEMINI_API_URL}/images/${id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching image info', error });
  }
};

export const processImage = async (req: Request, res: Response) => {
  try {
    const { imageUrl, operations } = req.body;
    const response = await axios.post(`${GOOGLE_GEMINI_API_URL}/process`, { imageUrl, operations });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error processing image', error });
  }
};