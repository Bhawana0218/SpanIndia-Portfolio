function Hero() {
  return (
    <section id="top" style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: "64px" }}>
      <div className="container" style={{ paddingTop: "clamp(48px, 10vw, 80px)", paddingBottom: "clamp(60px, 12vw, 100px)" }}>

        <div style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          background: "var(--terracotta-soft)", borderRadius: "999px",
          padding: "5px 14px", marginBottom: "36px",
        }}>
          <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "var(--terracotta)" }} />
          <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--terracotta)" }}>
            Available for full-time roles from mid-2026
          </span>
        </div>

        <h1 style={{ maxWidth: "740px", marginBottom: "28px", position: "relative" }}>
          I've been shipping code to production since my first year of college.

         
          <svg
            viewBox="0 0 280 16"
            style={{
              position: "absolute", bottom: "-10px", left: "0",
              width: "clamp(160px, 40vw, 280px)", height: "auto",
              overflow: "visible",
            }}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 12 C40 2, 70 18, 110 8 C140 2, 170 16, 200 6 C230 -2, 260 14, 276 8"
              stroke="var(--terracotta)"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              opacity="0.5"
            />
          </svg>
        </h1>

        <p style={{ maxWidth: "520px", fontSize: "1.05rem", marginBottom: "44px", lineHeight: 1.7 }}>
          Two industry internships, five shipped projects, and a Firebase bill I'll never forget.
          I'm a final-year CS student who's built real-time chat apps, ETL pipelines, and
          e-commerce platforms — and broken most of them in production at least once.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "clamp(40px, 10vw, 80px)" }}>
          <a href="#work" className="btn-primary">
            See my work
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="mailto:rahul.r.devop@gmail.com" className="btn-ghost">
            rahul.r.devop@gmail.com
          </a>
        </div>

        <div style={{
          display: "flex", flexWrap: "wrap", gap: "clamp(16px, 6vw, 40px)",
          paddingTop: "28px", borderTop: "1px solid var(--border)",
        }}>
          {[
            { num: "2", label: "industry internships" },
            { num: "5", label: "shipped projects" },
            { num: "$6", label: "cost of my worst bug" },
          ].map((s) => (
            <div key={s.label}>
              <div style={{ fontSize: "2rem", fontWeight: 700, fontFamily: "'Playfair Display', serif", color: "var(--navy)", lineHeight: 1 }}>
                {s.num}
              </div>
              <div style={{ fontSize: "0.72rem", color: "var(--muted)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.05em", marginTop: "2px" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
