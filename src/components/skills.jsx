const skillGroups = [
  {
    number: "01",
    title: "AI & Emerging Technology",
    skills: [
      "Generative AI",
      "Machine Learning",
      "LLM Workflows",
      "AI Product Strategy",
    ],
  },
  {
    number: "02",
    title: "Product & Experience",
    skills: [
      "UI/UX Design",
      "Spatial Computing",
      "Interaction Design",
      "User Research",
    ],
  },
  {
    number: "03",
    title: "Strategy & Leadership",
    skills: [
      "Digital Transformation",
      "Product Strategy",
      "Team Leadership",
      "Cross-functional Collaboration",
    ],
  },
  {
    number: "04",
    title: "Creative Direction",
    skills: [
      "Design Systems",
      "Visual Storytelling",
      "Creative Strategy",
      "Rapid Prototyping",
    ],
  },
];

function SkillsSection() {
  return (
    <section className="skills-section" aria-labelledby="skills-title">
      <div className="skills-intro">
        <p className="skills-eyebrow">
          <span className="skills-eyebrow-line" />
          AREAS OF EXPERTISE
        </p>

        <div className="skills-heading-row">
          <h2 id="skills-title">
            Where technology meets{" "}
            <span className="skills-highlight">human experience.</span>
          </h2>

          <p className="skills-description">
            A multidisciplinary approach to building meaningful digital
            experiences, leading complex initiatives, and turning ambitious
            ideas into reality.
          </p>
        </div>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-item" key={group.number}>
            <span className="skill-number">{group.number}</span>

            <div className="skill-content">
              <h3>{group.title}</h3>

              <p className="skill-list">
                {group.skills.map((skill, index) => (
                  <span className="skill-term" key={skill}>
                    {skill}
                    {index < group.skills.length - 1 && (
                      <span className="skill-separator" aria-hidden="true">
                        ·
                      </span>
                    )}
                  </span>
                ))}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="skills-footer">
        <span>CURIOUS BY NATURE.</span>
        <span>INTERDISCIPLINARY BY DESIGN.</span>
      </div>
    </section>
  );
}

export default SkillsSection;
