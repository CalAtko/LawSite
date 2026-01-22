import logo from "./assets/goldstein-logo.svg";

const highlights = [
  "Everyday legal guidance for the whole family",
  "A trusted advisor embedded in your day-to-day decisions",
  "Long-term support for purchases, finances, and personal matters",
];

const services = [
  {
    title: "Financial settlements & asset protection",
    description:
      "Bespoke planning led by Rupert Goldstein to safeguard your interests, family, and future wealth.",
  },
  {
    title: "Prenuptial agreement",
    description:
      "Thoughtful, tailored counsel from Rupert Goldstein to protect your interests, family, and future together.",
  },
  {
    title: "Property purchase & sale",
    description:
      "A dedicated strategy from Rupert Goldstein to protect your interests, family, and future with every move.",
  },
  {
    title: "Day to day handling of your families' legal needs",
    description:
      "Consistent, tailored guidance from Rupert Goldstein to protect your interests, family, and future every day.",
  },
];

export default function App() {
  return (
    <div className="page">
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <header className="hero">
        <nav className="nav">
          <div className="logo-lockup">
            <img src={logo} alt="Goldstein Law logo" className="logo" />
            <div>
              <p className="brand">Goldstein Law</p>
              <p className="tag">Family Solicitors</p>
            </div>
          </div>
          <a className="nav-contact" href="mailto:Rupert@Goldsteinlaw.uk">
            Contact Rupert
          </a>
        </nav>

        <div className="hero-content">
          <div className="hero-text">
            <p className="eyebrow">London-based family legal advisors</p>
            <h1>Bespoke, everyday legal support for modern families.</h1>
            <p className="lead">
              Goldstein Law is led by Rupert Goldstein and partners with families
              on their day-to-day legal needs, offering discreet, consistent
              guidance that fits the rhythm of family life.
            </p>
            <div className="hero-actions">
              <a className="primary" href="mailto:Rupert@Goldsteinlaw.uk">
                Email Goldstein Law
              </a>
              <a className="secondary" href="#services">
                View services
              </a>
            </div>
            <div className="highlights" aria-label="Key benefits">
              {highlights.map((item) => (
                <div className="highlight" key={item}>
                  <span className="dot" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-panel" role="region" aria-label="Contact details">
            <div className="hero-panel-top">
              <h2>Contact Rupert Goldstein</h2>
              <p>
                We build long-term relationships and stay alongside your family
                for the moments that matter most.
              </p>
            </div>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="services" id="services">
          <div className="section-heading">
            <h2>Everyday legal services crafted around you</h2>
            <p>
              We offer ongoing guidance across the full range of family matters.
              From purchases and finances to day-to-day legal questions, Goldstein
              Law stays alongside your family for the long term.
            </p>
          </div>
          <div className="service-grid" role="list">
            {services.map((service) => (
              <article className="service-card" role="listitem" key={service.title}>
                <div className="service-icon" aria-hidden="true">
                  ✨
                </div>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="cta" aria-labelledby="cta-title">
          <div>
            <h2 id="cta-title">Speak with a solicitor who stays close to your family.</h2>
            <p>
              Book a confidential consultation today and let Goldstein Law guide
              you through everyday legal decisions.
            </p>
          </div>
          <a className="primary" href="mailto:Rupert@Goldsteinlaw.uk">
            Contact Goldstein Law
          </a>
        </section>
      </main>

      <footer className="footer" id="footer">
        <p>Goldstein Law · Family Solicitors · Owned by Rupert Goldstein</p>
      </footer>
    </div>
  );
}
