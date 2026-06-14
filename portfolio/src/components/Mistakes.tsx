function Mistakes() {
  return (
    <section className="section" style={{ background: "var(--cream-alt)" }}>
      <div className="container">
        <span className="eyebrow">Real Experience</span>
        <h2 style={{ marginBottom: "16px" }}>Things I broke in production</h2>
        <p style={{ marginBottom: "44px", maxWidth: "480px", fontSize: "0.9375rem" }}>
          Not edge cases — the moments that taught me how production actually works.
        </p>

        <div style={{ maxWidth: "600px" }}>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem",
            fontWeight: 600, color: "var(--terracotta)", letterSpacing: "0.05em",
          }}>
            Django · Nginx · Linux
          </span>
          <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, marginTop: "8px" }}>
            Late afternoon, deploying the Django REST API for the college internship portal.
            Pushed the commit, ran the migration, restarted Gunicorn — everything looked clean.
            Opened the browser and hit a 502.
          </p>
          <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, marginTop: "12px" }}>
            Checked the Nginx error logs — nothing unusual. Verified the Gunicorn socket was
            running. Checked ufw rules — ports 80 and 443 were open. DNS was resolving
            correctly. Spent twenty minutes going in circles before I thought to check the
            database service itself.
          </p>
          <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, marginTop: "12px" }}>
            Ran <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.82rem", background: "var(--cream-card)", color: "var(--terracotta)", padding: "2px 7px", borderRadius: "4px" }}>systemctl status postgresql</code>.
            The service wasn't running — it never came back after the server rebooted earlier that
            day. One start command and everything worked. I keep a pre-flight checklist now.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Mistakes;
