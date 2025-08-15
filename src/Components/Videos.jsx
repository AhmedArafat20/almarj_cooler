import "./Videos.css";

export default function Videos() {
  return (
    <section id="videos" className="videos-section">
      <h2 className="section-title">بعض اعمالنا</h2>
      <div className="videos-grid">
        <div className="video-card">
          <video controls muted>
            <source src="/Videos/video1.mp4" type="video/mp4" />
            متصفحك لا يدعم تشغيل الفيديو.
          </video>
        </div>
        <div className="video-card">
          <video controls muted>
            <source src="/Videos/video2.mp4" type="video/mp4" />
            متصفحك لا يدعم تشغيل الفيديو.
          </video>
        </div>
        <div className="video-card">
          <video controls muted>
            <source src="/Videos/video3.mp4" type="video/mp4" />
            متصفحك لا يدعم تشغيل الفيديو.
          </video>
        </div>
        <div className="video-card">
          <video controls muted>
            <source src="/Videos/video4.mp4" type="video/mp4" />
            متصفحك لا يدعم تشغيل الفيديو.
          </video>
        </div>
      </div>
    </section>
  );
}
