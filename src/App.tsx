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

      <main id="main">
        <section className="services" id="services">
          <div className="section-heading">
            <h2>Everyday legal services crafted around you</h2>
            <p>
              We offer ongoing guidance across the full range of matters.
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
      </main>

      <footer className="footer" id="footer">
        <p>Goldstein Law · Family Solicitors · Owned by Rupert Goldstein</p>
      </footer>
    </div>
  );
}
