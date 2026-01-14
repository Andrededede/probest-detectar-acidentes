export type PredictionClass = 
  | 'Acidente de trânsito grave' 
  | 'Acidente de trânsito moderado' 
  | 'Não é acidente';

export interface PredictionResponse {
  class: PredictionClass;
  confidence?: number; //Probabilidade de estar certo, se existir esse valor
}

export interface GeoLocation {
  lat: number;
  lon: number;
}