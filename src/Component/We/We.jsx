import React, { useState, useEffect } from "react";
import "./we.css";

export default function We() {
  const [phase, setPhase] = useState("years"); // Фаза: "years" или "text"
  const [year, setYear] = useState(12); // Текущий год
  const [index, setIndex] = useState(0); // Индекс текущего текста

  // Тексты для отображения
  const texts = [
    "We are JET24",
    "Just Enjoy Time",
    "The ambitious team and visionary individuals with big passion for aviation and sky.",
  ];

  // Анимация смены годов
  useEffect(() => {
    if (phase === "years") {
      const yearInterval = setInterval(() => {
        setYear((prev) => {
          if (prev < 24) return prev + 1;
          clearInterval(yearInterval); // Остановка анимации годов
          setTimeout(() => setPhase("text"), 1000); // Переход к текстам через 500 мс
          return prev;
        });
      }, 300); // Смена годов каждые 300 мс
      return () => clearInterval(yearInterval);
    }
  }, [phase]);

  // Анимация смены текста
  useEffect(() => {
    if (phase === "text") {
      const textInterval = setInterval(() => {
        setIndex((prev) => {
          if (prev < texts.length - 1) return prev + 1;
          clearInterval(textInterval); // Остановка на последнем тексте
          return prev;
        });
      }, 1500); // Смена текста каждые 3 секунды
      return () => clearInterval(textInterval);
    }
  }, [phase, texts.length]);

  return (
    <div className="we__container">
      {/* Анимация годов */}
      {phase === "years" && (
        <div className="we__year-container">
          <span className="we__start-text">2012 — 20</span>
          <div className="we__scroll-wrapper">
            <div
              className="we__scroll-content"
              style={{
                transform: `translateY(-${(year - 12) * 4}rem)`, // Сдвиг в rem, соответствующий font-size
              }}
            >
              {Array.from({ length: 13 }, (_, i) => (
                <div key={i} className="we__scroll-item">
                  {i + 12}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Анимация текста */}
      {phase === "text" && (
        <div className="we__text-container">
          {texts.map((text, i) => (
            <p
              key={i}
              className={`we__text ${index === i ? "visible" : ""}`}
              style={{ display: index === i ? "block" : "none" }} // Скрываем тексты
            >
              {text}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
