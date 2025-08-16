// Fleet.jsx
import React from "react";
import "./Fleet.css";

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
  return (
    <div className="fleet-section">
      <h2 className="fleet-title">أسطول سياراتنا</h2>
      <div className="fleet-grid">
        {images.map((img, index) => (
          <div key={index} className="fleet-item">
            <img src={img} alt={`Truck ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
