import logo from "./assets/goldstein-logo.svg";

const highlights = [
  "Everyday legal guidance for the whole family",
  "A trusted advisor embedded in your day-to-day decisions",
  "Long-term support for purchases, finances, and personal matters",
];

const services = [
  "Financial settlements & asset protection",
  "Prenuptial agreement",
  "Property purchase & sale",
  "Day to day handling of your families legal needs"
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
        </nav>

        <div className="hero-content">
          <div className="hero-text">
            <p className="eyebrow">London-based family legal advisors</p>
            <h1>Bespoke, everyday legal support for modern families.</h1>
            <p className="lead">
              Goldstein Law is led by Rupert Goldstein & specialises in managing
              families law needs with discretion, clarity, & unwavering support.
            </p>
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
        <div className="service-grid">
          {services.map((service) => (
            <div className="service-card" key={service}>
              <h3>{service}</h3>
              <p>
                A tailored strategy led by Rupert Goldstein to protect your
                interests, family & future.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <div>
          <h2>Speak with a solicitor who stays close to your family.</h2>
          <p>
            Book a confidential consultation today & let Goldstein Law guide
            you forward.
          </p>
        </div>
      </section>

      <footer className="footer">
        <p>Goldstein Law · Family Solicitors · Owned by Rupert Goldstein</p>
      </footer>
    </div>
  );
}
