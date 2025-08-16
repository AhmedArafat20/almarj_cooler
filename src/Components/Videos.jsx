import "./Videos.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Videos() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // سرعة الانيميشن
      once: false,    // يخلي الانيميشن يشتغل كل مرة مع الاسكرول
    });
  }, []);

  return (
    <section id="videos" className="videos-section">
      <h2 className="section-title" data-aos="fade-up">
        بعض اعمالنا
      </h2>
      <div className="videos-grid">
        <div className="video-card" data-aos="zoom-in" data-aos-delay="100">
          <video controls muted>
            <source src="/Videos/video1.mp4" type="video/mp4" />
            متصفحك لا يدعم تشغيل الفيديو
          </video>
        </div>

        <div className="video-card" data-aos="zoom-in" data-aos-delay="200">
          <video controls muted>
            <source src="/Videos/video2.mp4" type="video/mp4" />
            متصفحك لا يدعم تشغيل الفيديو
          </video>
        </div>

        <div className="video-card" data-aos="zoom-in" data-aos-delay="300">
          <video controls muted>
            <source src="/Videos/video3.mp4" type="video/mp4" />
            متصفحك لا يدعم تشغيل الفيديو
          </video>
        </div>

        <div className="video-card" data-aos="zoom-in" data-aos-delay="400">
          <video controls muted>
            <source src="/Videos/video4.mp4" type="video/mp4" />
            متصفحك لا يدعم تشغيل الفيديو
          </video>
        </div>
      </div>
    </section>
  );
}
