import { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll === 0) setHidden(false);
      else if (currentScroll > lastScroll) setHidden(false);
      else setHidden(true);
      setLastScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <header className={`navbar ${hidden ? "hidden" : ""}`}>
      <div className="nav-container">
        {/* الشعار على اليمين */}
        <a href="#home" className="logo">شركة المرج</a>

        {/* زر الهامبورجر للموبايل */}
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* قائمة الروابط */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <ul>
            <li><a href="#home">الرئيسية</a></li>
            <li><a href="#services">خدماتنا</a></li>
            <li><a href="#about">من نحن</a></li>

            {/* زر تواصل معنا داخل القائمة للموبايل فقط */}
            <li className="mobile-contact">
              <a className="contact-btn" href="tel:+201234567890">
                تواصل معنا
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
