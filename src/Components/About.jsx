// About.jsx
import React from "react";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>من نحن</h2>
          <p>
            مؤسسة <b>المرج المزهر للخدمات اللوجستية</b>  
            <br></br>
                      رواد في جميع أنواع النقل المبرد والمجمد والجاف
            نقدم خدمات نقل متكاملة تشمل النقل البري والتوصيل في جميع أنحاء المملكة.  
            نفخر بأسطول متطور من السيارات المجهزة بأحدث تقنيات التبريد والتخزين،  
            مع إمكانية توقيع عقود مع الشركات والمؤسسات،  
            بالإضافة إلى سيارات مجهزة بتقنيات تحميل اللحوم.
          </p>
        </div>
      </div>
    </section>
  );
}
