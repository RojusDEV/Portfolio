import "./Experience.scss";

interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  points: string[];
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "QA Intern",
      company: "Edenred",
      date: "March 2026 – Present",
      points: [
        "Learned QA process fundamentals: test planning, execution, and results analysis",
        "Gained hands-on experience with testing tools (JIRA, XRay) for bug tracking and test management",
        "Executed manual testing against test plans to ensure software quality and identify defects",
        "Created test plans and 20+ test scenarios for features, documented findings with clear reproduction steps",
        "Reported and tracked 10+ quality defects with severity/priority levels and collaborated with developers",
        "Prepared test reports with metrics including test coverage and pass/fail analysis",
      ],
    },
    {
      title: "Computer Science Student",
      company: "Vilnius Tech",
      date: "2024 – Present",
      points: [
        "Learning core computer science fundamentals and software engineering principles",
        "Building projects in multiple programming languages including Python, Java, and C++",
        "Studying data structures, algorithms, and software architecture patterns",
        "Gaining hands-on experience through practical lab work and academic projects",
      ],
    },
    {
      title: "Web Development Learner",
      company: "Self-Taught",
      date: "2020 – Present",
      points: [
        "Started learning web development in 2020",
        "Built projects with React and Next.js",
        "Worked on backend development with Node.js and Express",
        "Explored APIs and full-stack project workflows",
      ],
    },
  ];

  return (
    <section className="experience" id="experience-section-id">
      <div className="experience__wrapper">
        <h2 className="experience-title">My Journey</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-node" />
              <div className="timeline-card">
                <div className="card-header">
                  <h3 className="card-title">{exp.title}</h3>
                  <p className="card-company">{exp.company}</p>
                </div>
                <p className="card-date">{exp.date}</p>
                <ul className="card-points">
                  {exp.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
