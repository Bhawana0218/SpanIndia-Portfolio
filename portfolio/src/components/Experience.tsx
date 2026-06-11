import { useScrollReveal } from "../hooks/useScrollReveal";

const experiences = [
  {
    period: "2025",
    title: "Python Developer Intern",
    company: "NIM Technologies",
    location: "Chennai",
    items: [
      "Engineered Python automation scripts & ETL data pipelines processing 10K+ records/min — reduced manual reporting time by ~70%",
      "Built and consumed REST APIs using Django with JWT authentication, input validation, and structured error handling",
      "Deployed backend services on Linux/Ubuntu with Nginx + Gunicorn reverse proxy; enforced HTTPS, env segregation, and server hardening",
      "Participated in Agile sprints — code reviews, stand-ups, retrospectives — with clear documentation of all deliverables",
    ],
  },
  {
    period: "2024",
    title: "IBM Cognos Tool Operations Intern",
    company: "IBM",
    location: "Industry Internship",
    items: [
      "Configured dashboards and automated report generation on IBM Cognos BI platform for enterprise analytics workflows",
      "Collaborated with cross-functional teams to deliver BI solutions under tight deadlines; maintained 100% on-time delivery record",
      "Gained hands-on exposure to enterprise data visualization, scheduled reporting, and stakeholder communication",
    ],
  },
];

function Experience() {
  const [ref, revealed] = useScrollReveal<HTMLDivElement>();

  return (
    <section id="experience" className="section-padding bg-dark-section">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-badge">Career</span>
          <h2 className="section-title mt-2">Experience</h2>
        </div>
        <div
          ref={ref}
          className={`row justify-content-center scroll-reveal ${revealed ? "revealed" : ""}`}
        >
          <div className="col-lg-10">
            <div className="timeline">
              {experiences.map((exp, idx) => (
                <div className="timeline-item" key={idx}>
                  <div className="timeline-marker" />
                  <div className="timeline-content p-4">
                    <div className="d-flex flex-wrap align-items-center gap-2 mb-2">
                      <span className="timeline-badge">{exp.period}</span>
                      <h3 className="h5 mb-0">{exp.title}</h3>
                    </div>
                    <p className="text-muted small mb-3">
                      {exp.company} &mdash; {exp.location}
                    </p>
                    <ul className="list-unstyled mb-0">
                      {exp.items.map((item, i) => (
                        <li key={i} className="timeline-item-bullet small mb-2">
                          {item}
                        </li>
                      ))}
                    </ul>
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

export default Experience;
