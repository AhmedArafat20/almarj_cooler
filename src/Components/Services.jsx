import "./Services.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function ServiceItem({ title, description, img, reverse }) {
  return (
    <div
      className={`service-item ${reverse ? "reverse" : ""}`}
      data-aos={reverse ? "fade-left" : "fade-right"} // انيميشن مختلف حسب الاتجاه
      data-aos-duration="1000" // سرعة الانيميشن
    >
      <div className="service-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="service-image">
        <img src={img} alt={title} />
      </div>
    </div>
  );
}

export default function Services() {
  useEffect(() => {
    AOS.init({ once: true }); // once: true يخلي الانيميشن يشتغل أول مرة بس
  }, []);

  return (
    <section id="services" className="services-section">
      <h2 className="section-title" data-aos="fade-up">خدماتنا</h2>

      <ServiceItem
        title="النقل المبرد"
        description="نقدم خدمات نقل مبرد وجمد وجاف متميزة تشمل النقل البري والتوصيل في جميع انحاء المملكه. نفخر بأسطول متطور من السيارات المجهزة بأحدث التقنيات للتبريد والتخزين"
        img="/Images/truck5.jpg"
      />

      <ServiceItem
        title="توقيع عقود"
        description="يوجد لدينا توقيع عقود مع الشريكات والمؤسسات ويوجد لدينا سيارات مزوده ب تقنيات تحميل اللحوم"
        img="/Images/img3.jpg"
        reverse
      />

      <ServiceItem
        title="النقل المجمد"
        description="تجهيزات خاصة للحفاظ على المنتجات المجمدة أثناء النقل."
        img="/Images/truck4.jpg"
      />

      <ServiceItem
        title="التوزيع الداخلي"
        description="خدمات توزيع سريعة وآمنة جميع انحاء المملكه."
        img="/Images/truck1.png"
        reverse
      />

      <ServiceItem
        title="نقل جميع المنتجات"
        description="نقل آمن مع التحكم الكامل في درجات الحرارة."
        img="/Images/truck3.jpg"
      />

      <ServiceItem
        title="الخدمات اللوجستية المتكاملة"
        description="حلول لوجستية متكاملة تناسب جميع أنواع الأنشطة التجارية."
        img="/Images/truck2.jpg"
        reverse
      />
    </section>
  );
}
