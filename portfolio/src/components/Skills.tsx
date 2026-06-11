import { useScrollReveal } from "../hooks/useScrollReveal";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", level: 92 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 70 },
      { name: "C / C++", level: 75 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 88 },
      { name: "HTML5 / CSS3", level: 95 },
      { name: "Bootstrap / Tailwind", level: 90 },
      { name: "Redux", level: 65 },
      { name: "Figma", level: 60 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Django / Flask", level: 85 },
      { name: "Node.js / Express", level: 80 },
      { name: "REST API Design", level: 88 },
      { name: "JWT Auth", level: 82 },
      { name: "Gunicorn / Nginx", level: 75 },
    ],
  },
  {
    title: "Database & DevOps",
    skills: [
      { name: "MongoDB", level: 82 },
      { name: "MySQL", level: 78 },
      { name: "Firebase", level: 75 },
      { name: "Docker", level: 60 },
      { name: "CI/CD Pipelines", level: 80 },
    ],
  },
];

function SkillBar({
  name,
  level,
  revealed,
  delay,
}: {
  name: string;
  level: number;
  revealed: boolean;
  delay: number;
}) {
  return (
    <div className="skill-bar-item">
      <div className="d-flex justify-content-between mb-1">
        <span className="skill-bar-name">{name}</span>
        <span className="skill-bar-level">{level}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{
            width: revealed ? `${level}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

function Skills() {
  const [ref, revealed] = useScrollReveal<HTMLDivElement>();

  return (
    <section id="skills" className="section-padding bg-dark-section">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-badge">Expertise</span>
          <h2 className="section-title mt-2">Technical Skills</h2>
        </div>
        <div
          ref={ref}
          className={`row g-4 scroll-reveal ${revealed ? "revealed" : ""}`}
        >
          {skillCategories.map((cat, ci) => (
            <div className="col-md-6 col-lg-3" key={cat.title}>
              <div className="skill-card h-100 p-4">
                <h3 className="skill-category-title h6 mb-4">{cat.title}</h3>
                {cat.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    revealed={revealed}
                    delay={ci * 100 + si * 80}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
