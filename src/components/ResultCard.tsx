import type { PredictionClass } from '../types';
import '../styles/ResultCard.css';

interface Props {
  result: PredictionClass;
}

export function ResultCard({ result }: Props) {
  const getModifierClass = (result: PredictionClass) => {
    switch (result) {
      case 'Acidente de trânsito grave': return 'result-card--grave';
      case 'Acidente de trânsito moderado': return 'result-card--moderado';
      default: return 'result-card--safe';
    }
  };

  const modifierClass = getModifierClass(result);

  return (
    <div className={`result-card ${modifierClass}`}>
      <h3>{result}</h3>
      <p>
        {result.includes('grave') ? '⚠️ Serviços de emergência notificados.' : 
         result.includes('moderado') ? '⚠️ Autoridades de trânsito notificadas.' : 
         '✅ Fluxo normal.'}
      </p>
    </div>
  );
}