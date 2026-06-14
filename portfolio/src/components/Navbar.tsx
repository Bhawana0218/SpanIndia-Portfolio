function Navbar() {
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      height: "64px", display: "flex", alignItems: "center",
      borderBottom: "1px solid var(--border-light)",
      background: "rgba(250, 247, 242, 0.88)",
      backdropFilter: "blur(12px)",
    }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
        <a href="#top" style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.15rem", fontWeight: 700,
          color: "var(--navy)",
          letterSpacing: "-0.02em",
          display: "flex", alignItems: "center", gap: "6px",
        }}>
          Rahul R
          <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--terracotta)", marginTop: "2px" }} />
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <div className="nav-links">
            {[
              { href: "#work", label: "Work" },
              { href: "#exp", label: "Experience" },
              { href: "#connect", label: "Contact" },
            ].map((n) => (
              <a key={n.href} href={n.href} style={{
                fontSize: "0.85rem", fontWeight: 500,
                color: "var(--slate)", padding: "6px 12px",
                borderRadius: "6px", transition: "color 0.15s, background 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--navy)";
                e.currentTarget.style.background = "var(--cream-alt)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--slate)";
                e.currentTarget.style.background = "transparent";
              }}
              >
                {n.label}
              </a>
            ))}
          </div>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "7px 18px", fontSize: "0.85rem" }}
            onClick={(e) => { e.currentTarget.href = "/resume.pdf?t=" + Date.now(); }}>
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
