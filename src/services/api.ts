// src/services/api.ts
import type { PredictionResponse } from '../types/index';

// Mude esta URL quando tiver o Backend Python rodando (ex: localhost:5000)
const API_URL = '/api'; 

export const analyzeImage = async (file: File): Promise<PredictionResponse> => {
  const formData = new FormData();
  formData.append('file', file);

  // Simulação para testes 
  return new Promise((resolve) => {
    setTimeout(() => resolve({ class: 'Acidente de trânsito grave' }), 2000);
  });

  const response = await fetch(API_URL, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Falha na comunicação com o servidor');
  }

  return response.json();
};