import Typewriter from "./Typewriter";

function Hero() {
  return (
    <section id="hero" className="hero-section d-flex align-items-center">
      <div className="hero-glow" />
      <div className="hero-glow hero-glow-2" />
      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="hero-badge d-inline-flex align-items-center gap-2 mb-3">
              <span className="hero-badge-dot" />
              <span>Available for opportunities</span>
            </div>
            <p className="hero-greeting mb-1">Hi, my name is</p>
            <h1 className="hero-name display-3 fw-bold mb-2">Rahul R</h1>
            <p className="hero-title h4 mb-3">
              <Typewriter />
            </p>
            <p className="hero-desc lead mb-4">
              Building scalable web applications with <strong>Python</strong>,{" "}
              <strong>React</strong>, and <strong>Node.js</strong>.
              National Top 1.7% — Full Stack Development.
            </p>
            <div className="hero-cta d-flex flex-wrap gap-3">
              <a href="#projects" className="btn btn-primary btn-lg px-4">
                <svg
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="me-2"
                  style={{ verticalAlign: "sub" }}
                >
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
                View Projects
              </a>
              <a href="#contact" className="btn btn-outline-light btn-lg px-4">
                <svg
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="me-2"
                  style={{ verticalAlign: "sub" }}
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                Get In Touch
              </a>
            </div>
            <div className="hero-socials mt-4 d-flex gap-3">
              <a
                href="https://github.com/ragulravi2405-coder"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub"
                title="GitHub"
              >
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/rahul-r-6536022a0"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:rahul.r.devop@gmail.com"
                className="social-icon"
                aria-label="Email"
                title="Email"
              >
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
              <a
                href="https://portfoliorahul22.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Portfolio"
                title="Portfolio"
              >
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="col-lg-5 d-none d-lg-block">
            <div className="hero-code-block">
              <div className="hero-code-dots">
                <span style={{ background: "#ff5f56" }} />
                <span style={{ background: "#ffbd2e" }} />
                <span style={{ background: "#27c93f" }} />
              </div>
              <pre className="text-start text-light mb-0">
                <code className="language-javascript">{`const developer = {
  name: "Rahul R",
  role: "Software Engineer",
  stack: ["Python", "React", "Node.js"],
  location: "Chennai, India",
  status: "Open to Work"
};

> developer.skills.length
// 20+ technologies
> developer.experience
// 2 industry internships
> developer.impact
// Top 1.7% nationally`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <span className="hero-scroll-text">Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}

export default Hero;
