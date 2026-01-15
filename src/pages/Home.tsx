import { useState } from "react";
import { ImageUploader } from "../components/ImageUploader";
import { ResultCard } from "../components/ResultCard";
import { analyzeImage } from "../services/api";
import type { PredictionClass } from "../types/index";
import "../styles/Home.css";

export function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PredictionClass | null>(null);
  const [uploaderKey, setUploaderKey] = useState(0);

  const handlePredict = async () => {
    if (!file) return;

    setLoading(true);
    setResult(null);

    try {
      const response = await analyzeImage(file);
      setResult(response.class);
    } catch (error) {
      alert("Erro ao analisar imagem. Verifique o console.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  function clean() {
    setResult(null);
    setFile(null);
    setUploaderKey((prev) => prev + 1);
  }

  return (
    <div className="container">
      <header className="home-header">
        <h1>🚦 Detector de Acidentes</h1>
        <p className="home-subtitle">Envie uma imagem para análise</p>
      </header>

      <div className="home-card">
        <ImageUploader key={uploaderKey} onImageSelected={setFile} />
        {file && (
          <div className="predict-buttons">
            {result && (
              <button
                className="btn btn-primary"
                onClick={() => {
                  clean();
                }}
              >
                🔃 Analisar Outra Imagem
              </button>
            )}
            <button
              className="btn btn-primary"
              onClick={handlePredict}
              disabled={loading}
            >
              {loading ? "Analisando..." : "🔍 Realizar Previsão"}
            </button>
          </div>
        )}

        {result && <ResultCard result={result} />}
      </div>
    </div>
  );
}
