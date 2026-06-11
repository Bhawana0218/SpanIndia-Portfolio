import { useScrollReveal } from "../hooks/useScrollReveal";

const certs = [
  {
    title: "Full Stack Development",
    issuer: "NIM Technologies",
    year: "2025",
  },
  {
    title: "IBM Cognos Tool Operations",
    issuer: "IBM",
    year: "2024",
  },
  {
    title: "Diploma in Python Programming",
    issuer: "Certificate Course",
    year: "2023",
  },
];

const achievements = [
  {
    rank: "Top 1.7%",
    event: "Wadhwani Full Stack Dev Program",
    detail: "Ranked Top 500 among 30,000+ participants nationally",
  },
  {
    rank: "Top 2%",
    event: "TN Skill / Naan Mudhalvan State Hackathon",
    detail: "Ranked Top 500 among 25,000+ participants",
  },
];

function Certifications() {
  const [ref, revealed] = useScrollReveal<HTMLDivElement>();

  return (
    <section id="certifications" className="section-padding">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-badge">Credentials</span>
          <h2 className="section-title mt-2">Certifications & Achievements</h2>
        </div>
        <div
          ref={ref}
          className={`row g-4 scroll-reveal ${revealed ? "revealed" : ""}`}
        >
          <div className="col-lg-6">
            <h3 className="h5 mb-4">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="me-2"
                style={{ color: "var(--accent)", verticalAlign: "sub" }}
              >
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
              Certifications
            </h3>
            <div className="d-flex flex-column gap-3">
              {certs.map((cert, i) => (
                <div className="cert-card p-3" key={i}>
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h4 className="h6 mb-1">{cert.title}</h4>
                      <p className="small text-muted mb-0">{cert.issuer}</p>
                    </div>
                    <span className="cert-year">{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="h5 mb-4">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="me-2"
                style={{ color: "var(--accent)", verticalAlign: "sub" }}
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              Achievements
            </h3>
            <div className="d-flex flex-column gap-3">
              {achievements.map((ach, i) => (
                <div className="achieve-card p-3" key={i}>
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h4 className="h6 mb-1">{ach.event}</h4>
                      <p className="small text-muted mb-0">{ach.detail}</p>
                    </div>
                    <span className="achieve-rank">{ach.rank}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
