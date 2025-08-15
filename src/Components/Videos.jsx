import "./Videos.css";

export default function Videos() {
  return (
    <section id="videos" className="videos-section">
      <h2 className="section-title">بعض اعمالنا</h2>
      <div className="videos-grid">
        <div className="video-card">
          <video controls muted>
            <source src="/public/Videos/Video1.mp4" type="video/mp4" />
            متصفحك لا يدعم تشغيل الفيديو.
          </video>
        </div>
        <div className="video-card">
          <video controls muted>
            <source src="/public/Videos/Video2.mp4" type="video/mp4" />
            متصفحك لا يدعم تشغيل الفيديو.
          </video>
        </div>
        <div className="video-card">
          <video controls muted>
            <source src="/public/Videos/Video3.mp4" type="video/mp4" />
            متصفحك لا يدعم تشغيل الفيديو.
          </video>
        </div>
        <div className="video-card">
          <video controls muted>
            <source src="/public/Videos/Video4.mp4" type="video/mp4" />
            متصفحك لا يدعم تشغيل الفيديو.
          </video>
        </div>
      </div>
    </section>
  );
}
