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
        description="نقدم خدمات نقل مبرد وجمد وجاف متميزة تشمل النقل البري والتوصيل في جميع انحاء المملكه. نفخر بأسطول متطور من السيارات المجهزة بأحدث التقنيات للتبريد والتخزين."
        img="/Images/truck5.jpg"
      />

      <ServiceItem
        title="توقيع عقود"
        description="يوجد لدينا توقيع عقود مع الشركات والمؤسسات ويوجد لدينا سيارات مزوده بتقنيات تحميل اللحوم."
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
        description="خدمات توزيع سريعة وآمنة لجميع انحاء المملكة."
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
