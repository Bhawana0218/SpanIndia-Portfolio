import { useScrollReveal } from "../hooks/useScrollReveal";

const projects = [
  {
    title: "Portfolio Website",
    tech: [
      { name: "React.js", color: "#61dafb" },
      { name: "Bootstrap", color: "#7952b3" },
      { name: "Vercel", color: "#fff" },
    ],
    description:
      "Responsive SPA with 95+ Lighthouse scores. Reusable component architecture with lazy-loaded images reducing bundle size by 40%. Serverless contact flow with honeypot spam protection.",
    highlights: [
      "98 Performance / 97 Accessibility on Lighthouse",
      "40% smaller bundle via WebP + lazy loading",
      "Zero-cost serverless contact form",
    ],
    gradient: "linear-gradient(135deg, #6c63ff, #3b82f6)",
    live: "https://portfoliorahul22.netlify.app",
    github: "https://github.com/ragulravi2405-coder",
  },
  {
    title: "Global Chat Application",
    tech: [
      { name: "React.js", color: "#61dafb" },
      { name: "Firebase", color: "#ffca28" },
      { name: "Tailwind", color: "#06b6d4" },
    ],
    description:
      "Real-time messaging platform with Firebase Realtime DB and secure user authentication. Sub-500ms message delivery latency with typing indicators and session persistence.",
    highlights: [
      "Sub-500ms message delivery latency",
      "Secure Firebase Auth with session handling",
      "100% uptime since deployment",
    ],
    gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
    live: "https://github.com/ragulravi2405-coder",
    github: "https://github.com/ragulravi2405-coder",
  },
  {
    title: "E-Commerce Platform",
    tech: [
      { name: "React.js", color: "#61dafb" },
      { name: "Node.js", color: "#339933" },
      { name: "MongoDB", color: "#47a248" },
    ],
    description:
      "Complete e-commerce flow: product catalog, cart management, order tracking. Optimized REST API responses with 35% payload reduction via selective field projection.",
    highlights: [
      "35% API payload reduction",
      "JWT auth + Firebase backend",
      "Mobile-first Tailwind CSS design",
    ],
    gradient: "linear-gradient(135deg, #10b981, #059669)",
    live: "https://github.com/ragulravi2405-coder",
    github: "https://github.com/ragulravi2405-coder",
  },
  {
    title: "Internship Portal",
    tech: [
      { name: "Express.js", color: "#fff" },
      { name: "MongoDB", color: "#47a248" },
      { name: "Django", color: "#092e20" },
    ],
    description:
      "Full-stack CRUD portal for internship registration handling 500+ concurrent records. RESTful APIs with input validation, error handling middleware, and MongoDB indexing.",
    highlights: [
      "500+ concurrent record handling",
      "Sub-100ms query response time",
      "Admin dashboard with filter/search",
    ],
    gradient: "linear-gradient(135deg, #8b5cf6, #6366f1)",
    live: "https://github.com/ragulravi2405-coder",
    github: "https://github.com/ragulravi2405-coder",
  },
  {
    title: "Python Data Pipeline",
    tech: [
      { name: "Python", color: "#3776ab" },
      { name: "NumPy", color: "#013243" },
      { name: "Pandas", color: "#150458" },
    ],
    description:
      "ETL pipeline consuming REST API responses, transforming with NumPy/Pandas, and outputting structured CSVs. Automated scripts processing 10,000+ records per minute.",
    highlights: [
      "10,000+ records/min throughput",
      "~70% reduction in manual processing time",
      "Automated recurring reporting tasks",
    ],
    gradient: "linear-gradient(135deg, #0891b2, #06b6d4)",
    github: "https://github.com/ragulravi2405-coder",
  },
];

function Projects() {
  const [ref, revealed] = useScrollReveal<HTMLDivElement>();

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-badge">Portfolio</span>
          <h2 className="section-title mt-2">Featured Projects</h2>
          <p className="text-muted mt-2">
            Production-grade applications demonstrating full-stack capability
          </p>
        </div>
        <div
          ref={ref}
          className={`row g-4 scroll-reveal ${revealed ? "revealed" : ""}`}
        >
          {projects.map((project, idx) => (
            <div className="col-md-6 col-lg-4" key={idx}>
              <div className="project-card h-100 d-flex flex-column">
                <div
                  className="project-card-header"
                  style={{ background: project.gradient }}
                >
                  <div className="project-card-shine" />
                  <h3 className="project-title h5 mb-0">{project.title}</h3>
                </div>
                <div className="project-card-body p-4 d-flex flex-column flex-grow-1">
                  <div className="d-flex flex-wrap gap-1 mb-3">
                    {project.tech.map((t) => (
                      <span
                        className="tech-tag"
                        key={t.name}
                        style={{
                          borderColor: t.color + "40",
                          color: t.color,
                        }}
                      >
                        {t.name}
                      </span>
                    ))}
                  </div>
                  <p className="project-desc small flex-grow-1">
                    {project.description}
                  </p>
                  <ul className="project-highlights list-unstyled small mb-3">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="mb-1">
                        <span className="highlight-dot me-2">&rtrif;</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="d-flex gap-2 mt-auto">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-primary"
                      >
                        Live Demo
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-light"
                    >
                      Source
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
