import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

                      <div className="footer-right">
          <img src="/logo.png" alt="Almarj Logo" className="logo-img" />
          <h2>شركة المرج</h2>
          <p className="tagline">اطلب تجدنا اينما كنت</p>
        </div>


        {/* وسط: الفروع */}
        <div className="footer-center">
          <h3>📍 فروعنا</h3>
          <ul>
            <li>القاهرة - مدينة نصر</li>
            <li>الإسكندرية - سموحة</li>
            <li>الجيزة - الدقي</li>
          </ul>
        </div>

        {/* يسار: زر تواصل + سوشيال */}
<div className="footer-left">
  <div className="contact-wrap">
<a href="tel:+20123456789" className="contact-btn">
  <i className="fas fa-phone"></i> تواصل معنا
</a>
  </div>

  <div className="social-wrap" style={{ "--social-x": "0px", "--social-y": "0px" }}>
    <div className="footer-social">
      <a href="#"><i className="fab fa-facebook" /></a>
      <a href="#"><i className="fab fa-twitter" /></a>
      <a href="#"><i className="fab fa-instagram" /></a>
    </div>
  </div>
</div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 شركة المرج. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
};

export default Footer;
