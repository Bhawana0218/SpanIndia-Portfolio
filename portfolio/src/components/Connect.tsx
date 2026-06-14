function Connect() {
  return (
    <section id="connect" className="section" style={{ background: "var(--cream-alt)" }}>
      <div className="container">
        <div style={{ maxWidth: "640px" }}>
          <span className="eyebrow">Get in touch</span>
          <h2 style={{ marginBottom: "16px" }}>
            I'm looking for my first full-time role.
          </h2>
          <p style={{ fontSize: "1rem", marginBottom: "36px", maxWidth: "480px" }}>
            Final-year student actively looking for full-time opportunities from mid-2026.
            If you're building something interesting and need a developer who ships — let's talk.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "48px" }}>
            <a href="mailto:rahul.r.devop@gmail.com" className="btn-primary">
              rahul.r.devop@gmail.com
            </a>
            <a href="https://linkedin.com/in/rahul-r-6536022a0" target="_blank" rel="noopener noreferrer" className="btn-ghost">
              LinkedIn
            </a>
            <a href="https://github.com/ragulravi2405-coder" target="_blank" rel="noopener noreferrer" className="btn-ghost">
              GitHub
            </a>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "24px",
            paddingTop: "28px", borderTop: "1px solid var(--border)",
          }}>
            {[
              { label: "Location", value: "Chennai, Tamil Nadu" },
              { label: "Available", value: "Mid 2026 onwards" },
            ].map((d) => (
              <div key={d.label}>
                <p style={{ fontSize: "0.72rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--muted)", marginBottom: "4px" }}>
                  {d.label}
                </p>
                <p style={{ fontSize: "0.9rem", color: "var(--navy)", fontWeight: 500 }}>{d.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Connect;
