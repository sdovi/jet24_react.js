import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./we.css";
import img1 from './img/JET24_Icon_FullOperation-01 1.svg'
import img2 from './img/JET24_Icon_Details-01 1.svg'
import img3 from './img/JET24_Icon_Crew-01 2.svg'

gsap.registerPlugin(ScrollTrigger);

export default function We() {
  const horizontalRef = useRef(null);

  useEffect(() => {
    const horizontalElement = horizontalRef.current;

    // Настройка горизонтального скролла
    const totalWidth = horizontalElement.scrollWidth - window.innerWidth;
    gsap.to(horizontalElement, {
      x: -totalWidth, // Двигаем вправо
      ease: "power2.out",
      scrollTrigger: {
        trigger: horizontalElement,
        start: "top top", // Фиксация при загрузке
        end: () => `+=${totalWidth}`, // Длина горизонтального скролла
        scrub: true,
        pin: true, // Закрепляем секцию
        anticipatePin: 1,
      },
    });

    // Добавляем поддержку горизонтальной прокрутки через колесо мыши
    const handleWheel = (e) => {
      e.preventDefault();
      window.scrollBy({
        left: e.deltaY * 2, // Прокручиваем вправо в зависимости от вертикального движения колеса
        behavior: "smooth",
      });
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div
      ref={horizontalRef}
      className="horizontal-scroll-container"
      style={{
        display: "flex",
        width: "300vw", // Увеличиваем ширину для горизонтального скролла
        height: "100vh",
      }}
    >
      {/* Блоки с изображениями */}
      <div className="image-container" style={{ width: "100vw" }}>
        <img src={img1} alt="Image 1" className="scroll-image" />
        <img src={img2} alt="Image 2" className="scroll-image" />
        <img src={img3} alt="Image 3" className="scroll-image" />
      </div>

      {/* Форма */}
      <div
        className="request-form-container"
        style={{ width: "100vw", background: "#f4f4f4" }}
      >
        <h2>MAKE REQUEST</h2>
        <p>We will contact you to confirm all the details</p>
        <form className="request-form">
          <input type="text" placeholder="Your name" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone (with country code)" required />
          <textarea
            className="request-textarea"
            placeholder="Describe your request"
            required
          ></textarea>
          <button type="submit" className="request__btn">
            Send Request
          </button>
        </form>
      </div>
    </div>
  );
}
