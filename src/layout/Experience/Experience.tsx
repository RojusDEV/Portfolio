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
        "Started internship as a QA tester for web applications",
        "Performed manual testing and identified bugs",
        "Worked with developers to improve product quality",
        "Learned QA processes, tools, and testing workflows",
      ],
    },
    {
      title: "Web Development Learner",
      company: "Self-Taught",
      date: "2020 – Present",
      points: [
        "Started learning web development in 2020",
        "Built projects using HTML, CSS, and JavaScript",
        "Explored backend development and APIs",
        "Continuously improving through practice and projects",
      ],
    },
  ];

  return (
    <section className="experience" id="experience-id">
      <div className="experience__wrapper">
        <h2 className="experience-title">EXPERIENCE</h2>
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
