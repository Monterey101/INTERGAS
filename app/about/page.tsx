export default function About() {
  return (
    <main className="main">
      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">About Us</h1>
      </section>

      {/* Company Story */}
      <section className="section commodity-detail-section">
        <div className="grid grid-2">
          <div className="commodity-content">
            <h2
              className="section-title"
              style={{ marginBottom: "2rem", textAlign: "left" }}
            >
              Our Story
            </h2>
            <p>
              Founded in 2021 by experienced energy professionals with
              backgrounds in commodity trading and financial services, INTERGAS
              emerged to address growing demand for specialized energy brokerage
              services in the Australian market. Our founding team recognized
              the opportunity to provide independent advisory and facilitation
              services as Australia's energy export sector continued to expand
              and mature.
            </p>
            <p>
              Starting as a boutique consultancy focused on LNG and LPG markets,
              we have steadily built relationships with producers, traders, and
              end-users across the Asia-Pacific region. Our approach emphasizes
              market intelligence, risk assessment, and transaction facilitation
              rather than proprietary trading, allowing us to serve clients'
              interests without conflicts.
            </p>
            <p>
              Today, INTERGAS operates from our Sydney headquarters, providing
              brokerage and advisory services across multiple energy
              commodities. We focus on building long-term partnerships with
              clients ranging from mid-sized producers to industrial consumers,
              leveraging our market knowledge and network to facilitate
              efficient transactions and provide strategic market insights.
            </p>
          </div>
          <div>
            <img
              src="/sydney.jpg"
              alt="Sydney Harbor"
              className="commodity-image"
            />
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section leadership-section">
        <div className="section-content">
          <h2 className="section-title">Leadership Team</h2>
          <div className="grid grid-3">
            <div className="card">
              <div className="leadership-profile-image"></div>
              <p>
                <strong style={{ color: "var(--secondary-50)" }}>
                  Founder & CEO
                </strong>
              </p>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--neutral-600)",
                  marginBottom: "0.75rem",
                }}
              >
                Bachelor Advanced Computing
              </p>
              <p style={{ fontSize: "1.1rem", lineHeight: "1.4" }}>
                Visionary leader with extensive global energy market experience,
                spearheading strategic partnerships across international
                commodity trading networks.
              </p>
            </div>
            <div className="card">
              <div className="leadership-profile-image"></div>
              <p>
                <strong style={{ color: "var(--secondary-50)" }}>
                  Chief Technology Officer
                </strong>
              </p>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--neutral-600)",
                  marginBottom: "0.75rem",
                }}
              >
                Bachelor Computer Science (Honours)
              </p>
              <p style={{ fontSize: "1.1rem", lineHeight: "1.4" }}>
                Distinguished technology architect leading digital
                transformation initiatives and developing cutting-edge trading
                platforms for global energy operations.
              </p>
            </div>
            <div className="card">
              <div className="leadership-profile-image"></div>
              <p>
                <strong style={{ color: "var(--secondary-50)" }}>
                  Chief Financial Officer
                </strong>
              </p>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--neutral-600)",
                  marginBottom: "0.75rem",
                }}
              >
                Bachelor Commerce, Master Financial Planning
              </p>
              <p style={{ fontSize: "1.1rem", lineHeight: "1.4" }}>
                Seasoned financial strategist with Commonwealth Bank experience,
                bringing sophisticated capital markets expertise and serving as
                Director at Redpool Group.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="section">
        <div className="section-content">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">⚖️</div>
              <div className="value-content">
                <h3>Integrity</h3>
                <p>
                  Ethical business practices and transparency in every
                  transaction.
                </p>
              </div>
            </div>
            <div className="value-item">
              <div className="value-icon">⭐</div>
              <div className="value-content">
                <h3>Excellence</h3>
                <p>
                  Superior performance in trading execution and client
                  satisfaction.
                </p>
              </div>
            </div>
            <div className="value-item">
              <div className="value-icon">💡</div>
              <div className="value-content">
                <h3>Innovation</h3>
                <p>
                  Cutting-edge technology and forward-thinking energy solutions.
                </p>
              </div>
            </div>
            <div className="value-item">
              <div className="value-icon">🌱</div>
              <div className="value-content">
                <h3>Sustainability</h3>
                <p>
                  Environmental stewardship and responsible energy practices.
                </p>
              </div>
            </div>
            <div className="value-item">
              <div className="value-icon">🤝</div>
              <div className="value-content">
                <h3>Partnership</h3>
                <p>
                  Building enduring relationships based on mutual trust and
                  success.
                </p>
              </div>
            </div>
            <div className="value-item">
              <div className="value-icon">🌍</div>
              <div className="value-content">
                <h3>Global Reach</h3>
                <p>
                  International energy market expertise across diverse regions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
