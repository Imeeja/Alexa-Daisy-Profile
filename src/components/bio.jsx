function LightningIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="30"
      height="30"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M13 2 3 14h8l-1 8 11-12h-8l1-8z" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="30"
      height="30"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
    </svg>
  );
}

function AboutSection() {
  return (
    <section className="about-section">
      <header className="about-header">
        <div>
          <h1>A Journey of Continuous Curiosity</h1>
          <p className="about-subtitle">
            Based in Amsterdam &amp; San Francisco • 14+ Years in Tech &amp;
            Design
          </p>
        </div>
      </header>

      <p className="about-description">
        Alexa Daisy is a visionary executive technologist who bridges the gap
        between deep machine learning algorithms and elegant, emotionally
        resonant user experiences. Having led digital transformations for
        industry giants and disruptive startups alike, Alexa believes that
        future software will feel less like tools we operate and more like
        cognitive partners we converse with.
      </p>

      <div className="about-cards">
        <article className="about-card">
          <div className="about-card-heading">
            <div className="about-icon specialization-icon">
              <LightningIcon />
            </div>

            <h2>Core Specialization</h2>
          </div>

          <p>
            Generative AI systems, spatial computing UI/UX, enterprise
            leadership, and multi-disciplinary creative direction.
          </p>
        </article>

        <article className="about-card">
          <div className="about-card-heading">
            <div className="about-icon personal-icon">
              <HeartIcon />
            </div>

            <h2>Beyond the Desk</h2>
          </div>

          <p>
            Avid oil painter, mentor for women in tech initiatives, and amateur
            alpine mountaineer.
          </p>
        </article>
      </div>
    </section>
  );
}

export default AboutSection;
