import React, { useEffect, useState } from "react";
import { downloadImage } from "./service";
import ProgressBar from "./ProgressBar";
import "./styles.css";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    fetchImage();
  }, []);

  function fetchImage() {
    setLoading(true);
    downloadImage({
      onDownloadProgress: (progressEvent) => {
        const percentage = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        setProgress(percentage);
        if (percentage === 100) {
          setTimeout(() => {
            setLoading(false);
          }, 400);
        }
      }
    });
  }

  function fetchImageAgain() {
    setProgress(0);
    fetchImage();
  }

  return (
    <div className="App">
      {loading && <ProgressBar percentage={progress} />}
      <button type="button" className="btn" onClick={fetchImageAgain}>
        Fetch Again
      </button>
      <h2>axios onDownloadProgress Example</h2>
    </div>
  );
}
