function CaseStudy() {
  const stack = ["React.js", "Firebase", "JavaScript", "Vercel", "GitHub CI/CD"];

  return (
    <section id="work" className="section">
      <div className="container">
        <span className="eyebrow">Featured Project — 01</span>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-between", gap: "16px", marginBottom: "36px" }}>
          <h2>Global Chat Application</h2>
          
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {stack.map((t) => <span key={t} className="badge">{t}</span>)}
          </div>
        </div>

        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px", marginBottom: "16px" }}>
          <div style={{ borderLeft: "3px solid var(--terracotta)", paddingLeft: "20px" }}>
            <h4 style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--muted)", marginBottom: "10px" }}>
              Why I built it
            </h4>
            <p style={{ fontSize: "0.9rem" }}>
              My project team needed a shared chat without everyone signing up for Slack.
              I wanted zero friction — open a link, log in, type. So I built it myself over a weekend.
            </p>
          </div>
          <div style={{ borderBottom: "2px solid var(--border)", paddingBottom: "20px" }}>
            <h4 style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--muted)", marginBottom: "10px" }}>
              Architecture
            </h4>
            <p style={{ fontSize: "0.9rem" }}>
              React SPA connects directly to Firebase Realtime DB via the SDK — no backend server needed.
              Firebase Auth handles login. Messages push to all clients instantly. Deployed via Vercel.
            </p>
          </div>
        </div>

        {/* Production incident — no card, just a block with a simple background */}
        <div style={{
          background: "var(--terracotta-soft)", borderRadius: "var(--radius-lg)",
          padding: "clamp(16px, 4vw, 28px)", marginBottom: "24px",
        }}>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem",
            fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase",
            color: "var(--terracotta)",
          }}>
            Production incident — the $6 bug
          </span>
          <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, marginTop: "12px" }}>
            Deployed on a Friday evening. Within an hour it was unresponsive. A{' '}
            <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.82rem", background: "var(--cream-card)", color: "var(--terracotta)", padding: "2px 7px", borderRadius: "4px" }}>useEffect</code>
            {' '}dependency array was missing one variable — the effect kept re-running, kept writing to Firebase, kept billing me. The bill went up by <strong style={{ color: "var(--navy)" }}>$6.00</strong> before I caught it.
          </p>
          <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, marginTop: "10px" }}>
            I fixed it by adding the missing dependency. That was it. One variable. Six dollars.
          </p>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.78rem", color: "var(--muted)", marginTop: "14px" }}>
            // note to self: add rate limiting on the client side eventually
          </p>
        </div>

        <img
          src="/screenshots/global-chat.png"
          alt="Global Chat Application real-time messaging interface showing conversation threads with pink theme"
          style={{ width: "100%", maxWidth: "600px", borderRadius: "8px", border: "1px solid var(--border)", marginTop: "24px", marginBottom: "24px" }}
        />

        <a href="https://github.com/ragulravi2405-coder" target="_blank" rel="noopener noreferrer" className="link">
          View source on GitHub →
        </a>
      </div>
    </section>
  );
}

export default CaseStudy;
