const projects = [
  {
    title: "Full Stack E-Commerce Platform",
    tech: "React · Node.js · MongoDB",
    detail:
      "The first version sent full Mongoose documents to the listing page — every field and description — when it only needed name, price, and thumbnail. Added MongoDB field projection and payloads dropped noticeably. JWT auth, Tailwind, mobile-first.",
    fix: "field projection on queries",
  },
  {
    title: "Student Internship Portal",
    tech: "Express · MongoDB · Django",
    detail: (
      <>
        <p>Built for my college admin team. Express + MongoDB backend with search and filters. Django admin panel so non-technical staff could manage records without touching the database.</p>
        <p style={{ marginTop: "10px" }}>First load test took seconds per query. Embarrassingly slow. Added MongoDB indexes and response times dropped to milliseconds.</p>
      </>
    ),
    fix: "MongoDB indexing (first version was unindexed)",
  },
  {
    title: "Python Automation & Data Pipelines",
    tech: "Python · Pandas · REST APIs",
    detail:
      "Consumed external REST APIs at NIM Technologies, normalized JSON with Pandas, and loaded cleaned data into internal databases. Replaced manual data-wrangling the team did each sprint. Also handled CSV-based ETL: read, clean, transform, write. All deployed on Linux servers.",
    fix: false,
  },
];

function MoreProjects() {
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">Projects</span>
        <h2 style={{ marginBottom: "48px" }}>Other things I've shipped</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {projects.map((p, i) => (
            <div key={p.title} style={{
              padding: "28px 0",
              borderBottom: i < projects.length - 1 ? "1px solid var(--border-light)" : "none",
            }}>
              <div style={{ marginBottom: "8px" }}>
                <h3 style={{ margin: 0, fontSize: "1.1rem" }}>{p.title}</h3>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", color: "var(--muted)" }}>
                  {p.tech}
                </span>
              </div>
              <div style={{ fontSize: "0.9rem", color: "var(--slate)", lineHeight: 1.7 }}>
                {typeof p.detail === "string" ? <p>{p.detail}</p> : p.detail}
              </div>

              {p.title === "Full Stack E-Commerce Platform" && (
                <img
                  src="/screenshots/nextbuy.png"
                  alt="NextBuy e-commerce product listing page showing item cards with prices and thumbnails"
                  style={{ width: "100%", maxWidth: "600px", borderRadius: "8px", border: "1px solid var(--border)", marginTop: "16px" }}
                />
              )}
              {p.title === "Student Internship Portal" && (
                <img
                  src="/screenshots/internship-portal.png"
                  alt="Rahul's Freelancing Internship 2025 portal admin panel with student records and search filters"
                  style={{ width: "100%", maxWidth: "600px", borderRadius: "8px", border: "1px solid var(--border)", marginTop: "16px" }}
                />
              )}

              {p.fix && (
                <span style={{
                  display: "inline-block", marginTop: "10px",
                  fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem",
                  color: "var(--terracotta)", background: "var(--terracotta-soft)",
                  padding: "3px 10px", borderRadius: "4px",
                }}>
                  fix: {p.fix}
                </span>
              )}
              <a href="https://github.com/ragulravi2405-coder" target="_blank" rel="noopener noreferrer" className="link" style={{ marginTop: "8px", marginLeft: "0", display: "block" }}>
                View source →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MoreProjects;
