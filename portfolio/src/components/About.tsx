import { useScrollReveal, useAnimatedCounter } from "../hooks/useScrollReveal";

interface StatItem {
  end: number;
  suffix: string;
  label: string;
  prefix?: string;
}

const stats: StatItem[] = [
  { end: 2, suffix: "", label: "Industry Internships" },
  { end: 5, suffix: "+", label: "Full-Stack Projects" },
  { end: 98, suffix: "%", label: "Lighthouse Score", prefix: "Top" },
  { end: 1, suffix: ".7%", label: "National Ranking", prefix: "Top" },
];

function StatCounter({ item, revealed }: { item: StatItem; revealed: boolean }) {
  const count = useAnimatedCounter(item.end, 1800, revealed);
  return (
    <div className="stat-box text-center p-3">
      <span className="stat-number">
        {item.prefix && (
          <span className="stat-prefix">{item.prefix} </span>
        )}
        {count}{item.suffix}
      </span>
      <span className="stat-label d-block">{item.label}</span>
    </div>
  );
}

function About() {
  const [ref, revealed] = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-badge">About Me</span>
          <h2 className="section-title mt-2">
            Crafting Code, Building Futures
          </h2>
        </div>
        <div
          ref={ref}
          className={`row justify-content-center scroll-reveal ${revealed ? "revealed" : ""}`}
        >
          <div className="col-lg-8">
            <div className="about-card p-4 p-md-5">
              <p className="lead mb-4">
                I'm a <strong>Software Engineer</strong> and <strong>Full Stack Developer</strong>{" "}
                pursuing my B.E. in Computer Science &amp; Engineering at{" "}
                <strong>Vins Christian College of Engineering</strong>.
                With <strong>two industry internships</strong> at NIM Technologies and IBM,
                I've shipped production-grade Python automation, Django REST APIs, and
                full-stack React SPAs deployed to cloud infrastructure.
              </p>
              <p className="mb-4">
                Ranked <strong>Top 500 nationally (Top 1.7%)</strong> among 30,000+ participants
                in India's Full Stack Development program, and{" "}
                <strong>Top 500 in the TN Skill State Hackathon</strong>. I combine
                engineering rigor with product thinking — every project ships with
                CI/CD, performance budgets, and accessibility defaults.
              </p>
              <div className="row mt-4 g-3">
                {stats.map((s, i) => (
                  <div className="col-6 col-sm-3" key={i}>
                    <StatCounter item={s} revealed={revealed} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
