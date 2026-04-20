import "./About.scss";

const ABOUT_HIGHLIGHTS = [
  "Building clean, responsive interfaces with React + TypeScript",
  "Growing from manual QA into full product quality ownership",
  "Turning ideas into polished, user-centered web experiences",
];

const Frameworks = [
  "React",
  "TypeScript",
  "SCSS",
  "Tailwind",
  "Node.js",
  "Next.js",
  "Express",
  "JIRA",
  "GitHub",
  "C++",
  "Java",
];

const UI = ["Tailwind CSS", "Shadcn", "Framer Motion", "React Spring"];

const Databases = ["MySQL", "PostgreSQL", "Supabase"];

const About = () => {
  return (
    <section className="about" id="about-section-id">
      <div className="about__wrapper">
        <h2 className="about-title">ABOUT ME</h2>

        <div className="about-grid">
          <article className="about-card about-card--intro">
            <p>
              I am Rojus Balčiūnas, a second-year Software Engineering student
              focused on software development and modern technologies. My goal
              is to transition from university theory to practical application.
              I am dedicated to continuous learning and eager to build a strong
              technical foundation through hands-on experience.
            </p>
          </article>
          <article className="about-card about-card--highlights">
            <h3>What I bring</h3>
            <ul className="about-highlights">
              {ABOUT_HIGHLIGHTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="about-card about-card--stack">
            <div className="stack-group">
              <h3>Languages & Frameworks</h3>
              <div className="stack-list">
                {Frameworks.map((stack) => (
                  <span key={stack} className="stack-pill">
                    {stack}
                  </span>
                ))}
              </div>
            </div>
            <div className="stack-group">
              <h3>UI & Animation Libraries</h3>
              <div className="stack-list">
                {UI.map((stack) => (
                  <span key={stack} className="stack-pill">
                    {stack}
                  </span>
                ))}
              </div>
            </div>
            <div className="stack-group stack-group--last">
              <h3>Databases</h3>
              <div className="stack-list">
                {Databases.map((stack) => (
                  <span key={stack} className="stack-pill">
                    {stack}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
