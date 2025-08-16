import "./Home.css";

export default function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h1 className="main-title">شركة المرج اللوجستية</h1>
        <h2 className="sub-title">لنقل التبريد والتجميد</h2>
        <p className="tagline">اطلب تجدنا أينما كنت</p>
      </div>

      <div className="home-image">
        <img src="/Images/webp.jpg" alt="شاحنة التبريد" />
      </div>
    </section>
  );
}
