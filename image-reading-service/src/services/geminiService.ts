import axios from 'axios';

const GEMINI_API_URL = 'https://ai.google.dev/gemini-api/docs/vision?hl=pt-br&lang=node';
const API_KEY = 'aqui a chave da api';

export const analyzeImageWithGemini = async (imageUrl: string) => {
  const response = await axios.post(`${GEMINI_API_URL}/analyze`, {
    imageUrl,
  }, {
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
    },
  });
  return response.data;
};

export const getImageDetailsFromGemini = async (id: string) => {
  const response = await axios.get(`${GEMINI_API_URL}/images/${id}`, {
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
    },
  });
  return response.data;
};

export const listAllImages = async () => {
  const response = await axios.get(`${GEMINI_API_URL}/images`, {
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
    },
  });
  return response.data;
};