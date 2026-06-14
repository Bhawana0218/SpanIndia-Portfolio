const skillGroups = [
  { label: "Languages", items: ["Python", "JavaScript (ES6+)", "SQL", "Bash/Shell", "C"] },
  { label: "Frontend", items: ["React.js", "Tailwind CSS", "HTML5", "CSS3"] },
  { label: "Backend", items: ["Django", "Flask", "Node.js", "Express.js", "REST APIs", "JWT Auth", "Gunicorn"] },
  { label: "Database", items: ["MongoDB", "MySQL", "Firebase Realtime DB", "Firebase Auth"] },
  { label: "DevOps & Servers", items: ["Git", "GitHub", "Linux/Ubuntu", "Nginx", "Vercel", "Netlify"] },
  { label: "Data & Automation", items: ["NumPy", "Pandas", "ETL Workflows"] },
];

function About() {
  return (
    <section id="about" className="section" style={{ borderTop: "1px solid var(--border-light)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "clamp(32px, 8vw, 64px)", alignItems: "start" }}>

          {/* Left — bio */}
          <div>
            <span className="eyebrow">About</span>
            <h2 style={{ marginBottom: "24px" }}>
              I started shipping code my first year of college.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                I'm a final-year Computer Science student at Vins Christian College of Engineering.
                React, Django, Firebase, MongoDB — I picked them up because projects needed them.
                Two industry internships later, I've deployed real code that real people use.
              </p>
              <p>
                At NIM Technologies I built ETL pipelines and Django APIs deployed on Linux with
                Nginx and Gunicorn. At IBM I configured Cognos BI dashboards and automated
                enterprise report generation. Both internships taught me that production is
                different from localhost — sometimes painfully so.
              </p>
              <p>
                I rank in the top 500 nationally in two competitive programs: the Wadhwani Full
                Stack National Program (30,000+ participants) and the Naan Mudhalvan State
                Hackathon (25,000+ participants).
              </p>
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "28px" }}>
              <a href="https://github.com/ragulravi2405-coder" target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ fontSize: "0.85rem", padding: "8px 18px" }}>
                GitHub
              </a>
              <a href="https://linkedin.com/in/rahul-r-6536022a0" target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ fontSize: "0.85rem", padding: "8px 18px" }}>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {skillGroups.map((g) => (
              <div key={g.label}>
                <p style={{
                  fontSize: "0.7rem", fontWeight: 600,
                  textTransform: "uppercase", letterSpacing: "0.1em",
                  color: "var(--muted)", marginBottom: "8px",
                }}>
                  {g.label}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                  {g.items.map((item) => (
                    <span key={item} className="badge">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
