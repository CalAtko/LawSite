import logo from "./assets/goldstein-logo.svg";

const highlights = [
  "Everyday legal guidance for the whole family",
  "A trusted advisor embedded in your day-to-day decisions",
  "Long-term support for purchases, finances, and personal matters",
];

const services = [
  "Property purchases and household agreements",
  "Family finances, trusts, and asset planning",
  "General legal support for daily family decisions",
  "Ongoing counsel for life changes and milestones",
];

export default function App() {
  return (
    <div className="page">
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
            <div className="highlights">
              {highlights.map((item) => (
                <div className="highlight" key={item}>
                  <span className="dot" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-card">
            <h2>Contact Rupert Goldstein</h2>
            <p>
              Reach out for a confidential consultation. We build lasting
              relationships and provide steady counsel for everyday family
              decisions.
            </p>
            <div className="card-detail">
              <span>Direct email</span>
              <strong>Rupert@Goldsteinlaw.uk</strong>
            </div>
            <a className="primary" href="mailto:Rupert@Goldsteinlaw.uk">
              Start your enquiry
            </a>
            <p className="card-note">
              Goldstein Law is a boutique practice dedicated to long-term,
              bespoke family support.
            </p>
          </div>
        </div>
      </header>

      <section className="services" id="services">
        <div className="section-heading">
          <h2>Everyday legal services crafted around you</h2>
          <p>
            We offer ongoing guidance across the full range of family matters.
            From purchases and finances to day-to-day legal questions, Goldstein
            Law stays alongside your family for the long term.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <div className="service-card" key={service}>
              <h3>{service}</h3>
              <p>
                A tailored plan led by Rupert Goldstein to support your family’s
                daily decisions and long-term goals.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <div>
          <h2>Speak with a solicitor who stays close to your family.</h2>
          <p>
            Book a confidential consultation today and let Goldstein Law guide
            you through everyday legal decisions.
          </p>
        </div>
        <a className="primary" href="mailto:Rupert@Goldsteinlaw.uk">
          Contact Goldstein Law
        </a>
      </section>

      <footer className="footer">
        <p>Goldstein Law · Family Solicitors · Owned by Rupert Goldstein</p>
        <a href="mailto:Rupert@Goldsteinlaw.uk">Rupert@Goldsteinlaw.uk</a>
      </footer>
    </div>
  );
}
