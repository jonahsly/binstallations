import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LoadingPage.css';

const LoadingPage = () => {
  const [progress, setProgress] = useState(0);

  // Parámetros del círculo SVG
  const radius = 60;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  useEffect(() => {
    const duration = 1600;
    const start = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const percent = Math.min((elapsed / duration) * 100, 100);
      setProgress(Math.floor(percent));
      if (percent >= 100) clearInterval(timer);
    }, 30);

    return () => clearInterval(timer);
  }, []);

  // Offset para stroke-dashoffset
  const strokeDashoffset =
    circumference - (progress / 100) * circumference;

  return (
    <div className="loading-container">
      {progress < 100 ? (
        <svg
          height={radius * 2}
          width={radius * 2}
          className="progress-circle"
        >
            <g transform={`rotate(-90 ${radius} ${radius})`}>
          {/* Fondo del círculo */}
          <circle
            stroke="#eee"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          {/* Barra de progreso */}
          <circle
            stroke="#007bff"
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          </g>
          {/* Texto porcentual */}
          <text
            x="50%"
            y="50%"
            dy="0.3em"
            textAnchor="middle"
            fontSize="1em"
            fill="#333"
          >
            {progress}%
          </text>
        </svg>
      ) : (
        <div className="options">
          <Link to="/login" className="button">
            Iniciar Sesión
          </Link>
          <Link to="/register" className="button">
            Registrarse
          </Link>
        </div>
      )}
    </div>
  );
};

export default LoadingPage;
