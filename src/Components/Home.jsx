import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section id="home" className="home-section">
      <div className="home-content" data-aos="fade-right" data-aos-duration="1200">
        <h1 className="main-title">شركة المرج اللوجستية</h1>
        <h2 className="sub-title">لنقل التبريد والتجميد</h2>
        <p className="tagline">اطلب تجدنا أينما كنت</p>
      </div>

      <div className="home-image" data-aos="fade-left" data-aos-duration="1200">
        <img src="/Images/webp.jpg" alt="شاحنة التبريد" />
      </div>
    </section>
  );
}
