import "./Map.css";

export default function MapSection() {
  return (
    <section id="map" className="map-section">
      <h2>📍 موقعنا - الرياض</h2>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d362346.3438710455!2d46.505903249999996!3d24.7135518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f038146a83c9b%3A0xdea9d8f9ff6b6f64!2sRiyadh%2C%20Saudi%20Arabia!5e0!3m2!1sen!2seg!4v1692020100000!5m2!1sen!2seg"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
