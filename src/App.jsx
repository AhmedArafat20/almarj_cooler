import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home" style={{padding:"80px 16px", minHeight:"60vh"}}>
          <h1>الرئيسية</h1>
          <p>أهلًا بيك في موقع المرج.</p>
        </section>

        <section id="services" style={{padding:"80px 16px", minHeight:"60vh", background:"#f6f7f9"}}>
          <h2>خدماتنا</h2>
          <p>هنا تقدر تعرض الخدمات.</p>
        </section>

        <section id="about" style={{padding:"80px 16px", minHeight:"60vh"}}>
          <h2>من نحن</h2>
          <p>نبذة مختصرة عن الشركة.</p>
        </section>

        <section id="contact" style={{padding:"80px 16px", minHeight:"60vh", background:"#f6f7f9"}}>
          <h2>تواصل معنا</h2>
          <p>ممكن تخلي الزرّ يتصل مباشرة أو يفتح واتساب، حسب رغبتك.</p>
        </section>
      </main>
       <Footer />
    </>
  );
}
