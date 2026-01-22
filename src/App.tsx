import logo from "./assets/goldstein-logo.svg";

const highlights = [
  "Family law guidance tailored to your circumstances",
  "Clear, compassionate advice through every stage",
  "Trusted representation for mediation and court preparation",
];

const services = [
  "Divorce & separation support",
  "Child arrangements and custody planning",
  "Financial settlements and asset protection",
  "Prenuptial and postnuptial agreements",
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
            <p className="eyebrow">London-based family law specialists</p>
            <h1>Helping families navigate change with confidence.</h1>
            <p className="lead">
              Goldstein Law is led by Rupert Goldstein and specialises in managing
              families law needs with discretion, clarity, and unwavering support.
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
              Reach out for a confidential consultation. We respond promptly and
              prioritize the wellbeing of your family.
            </p>
            <div className="card-detail">
              <span>Direct email</span>
              <strong>Rupert@Goldsteinlaw.uk</strong>
            </div>
            <a className="primary" href="mailto:Rupert@Goldsteinlaw.uk">
              Start your enquiry
            </a>
            <p className="card-note">
              Goldstein Law is a boutique practice dedicated to bespoke family
              solutions.
            </p>
          </div>
        </div>
      </header>

      <section className="services" id="services">
        <div className="section-heading">
          <h2>Family law services crafted around you</h2>
          <p>
            We offer focused guidance across every stage of family law. From
            amicable agreements to complex proceedings, Goldstein Law ensures you
            are prepared and supported.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <div className="service-card" key={service}>
              <h3>{service}</h3>
              <p>
                A tailored strategy led by Rupert Goldstein to protect your
                interests and future.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <div>
          <h2>Speak with a solicitor who understands your family.</h2>
          <p>
            Book a confidential consultation today and let Goldstein Law guide
            you forward.
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
