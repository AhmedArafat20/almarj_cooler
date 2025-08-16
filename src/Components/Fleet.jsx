// Fleet.jsx
import React, { useEffect } from "react";
import "./Fleet.css";
import AOS from "aos";
import "aos/dist/aos.css";

const images = [
  "/Images/img5.webp",
  "/Images/img6.jpg",
  "/Images/img7.jpeg",
  "/Images/img8.webp",
  "/Images/img1.jpg",
  "/Images/img2.jpg",
  "/Images/img4.jpg",
  "/Images/img9.webp",
];

export default function Fleet() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // سرعة الانيميشن
      once: false,    // يشتغل مع كل scroll
    });
  }, []);

  return (
    <div className="fleet-section">
      <h2 className="fleet-title" data-aos="fade-up">أسطول سياراتنا</h2>
      <div className="fleet-grid">
        {images.map((img, index) => (
          <div
            key={index}
            className="fleet-item"
            data-aos="zoom-in"
            data-aos-delay={index * 100} // كل صورة تتأخر 0.1 ثانية عن اللي قبلها
          >
            <img src={img} alt={`Truck ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
