import "./Services.css";

function ServiceItem({ title, description, img, reverse }) {
  return (
    <div className={`service-item ${reverse ? "reverse" : ""}`}>
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
  return (
    <section id="services" className="services-section">
      <h2 className="section-title">خدماتنا</h2>

      <ServiceItem
        title="النقل المبرد"
        description="نقدم خدمات نقل مبرد وجاف متميزة تشمل النقل البري والتوصيل داخل وحول الرياض. نفخر بأسطول متطور من السيارات المجهزة بأحدث التقنيات للتبريد والتخزين"
        img="/Images/truck5.jpg"
      />
      <ServiceItem
        title="النقل المجمد"
        description="تجهيزات خاصة للحفاظ على المنتجات المجمدة أثناء النقل."
        img="/Images/truck4.jpg"
        reverse
      />
      <ServiceItem
        title="التوزيع الداخلي"
        description="خدمات توزيع سريعة وآمنة جميع انحاء المملكه."
        img="/Images/truck1.png"
      />
      <ServiceItem
        title="نقل جميع المنتجات "
        description="نقل آمن مع التحكم الكامل في درجات الحرارة."
        img="/Images/truck3.jpg"
        reverse
      />
      <ServiceItem
        title="الخدمات اللوجستية المتكاملة"
        description="حلول لوجستية متكاملة تناسب جميع أنواع الأنشطة التجارية."
        img="/Images/truck2.jpg"
      />
    </section>
  );
}
