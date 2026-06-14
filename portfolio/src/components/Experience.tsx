const roles = [
  {
    year: "2025",
    title: "Python Developer Intern",
    org: "NIM Technologies · Chennai",
    points: [
      "Built ETL pipelines consuming and transforming external REST API responses — replaced manual data-wrangling done each sprint.",
      "Developed Django REST APIs with JWT authentication for internal tooling; deployed on Linux with Nginx and Gunicorn.",
      "Participated in Agile sprint reviews, applied server hardening, environment variable management.",
    ],
  },
  {
    year: "2024",
    title: "IBM Cognos Tool Operations Intern",
    org: "IBM · Industry Internship",
    points: [
      "Configured BI dashboards on the IBM Cognos platform and automated enterprise report generation.",
      "Collaborated across business and tech teams to deliver reports on schedule — 100% on-time delivery.",
      "Gained hands-on experience with enterprise data visualization and professional delivery standards.",
    ],
  },
];

function Experience() {
  return (
    <section id="exp" className="section">
      <div className="container">
        <span className="eyebrow">Experience</span>
        <h2 style={{ marginBottom: "44px" }}>Where I've worked</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {roles.map((r) => (
            <div key={r.year} className="timeline-item">
              <div className="timeline-dot" />
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "14px" }}>
                <div style={{ flex: 1 }}>
                  <h3 style={{ marginBottom: "2px" }}>{r.title}</h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--muted)" }}>{r.org}</p>
                </div>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.78rem", color: "var(--muted)" }}>
                  {r.year}
                </span>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                {r.points.map((pt, j) => (
                  <li key={j} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <span style={{ marginTop: "8px", width: "4px", height: "4px", borderRadius: "50%", background: "var(--terracotta)", flexShrink: 0 }} />
                    <p style={{ fontSize: "0.9rem" }}>{pt}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      
        <div style={{ marginTop: "40px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
          <div style={{ padding: "24px", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)" }}>
            <h3 style={{ fontSize: "1rem", marginBottom: "4px", fontFamily: "'Playfair Display', serif" }}>B.E Computer Science &amp; Engineering</h3>
            <p style={{ fontSize: "0.85rem", marginBottom: "12px" }}>Vins Christian College of Engineering, Nagercoil</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              <span className="badge">2023 – 2027</span>
              <span className="badge">CGPA 8.5+</span>
              <span className="badge">Open to full-time</span>
            </div>
          </div>
          <div style={{ padding: "24px", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)" }}>
            <h3 style={{ fontSize: "1rem", marginBottom: "8px", fontFamily: "'Playfair Display', serif" }}>Achievements</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--navy)" }}>
                Top 500 / 30,000+ — Wadhwani Full Stack Dev Program
              </p>
              <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--navy)" }}>
                Top 500 / 25,000+ — TN Skill / Naan Mudhalvan Hackathon
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
