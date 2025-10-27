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
              Who are we?
            </h2>
            <p>
              INTERGAS Pty Ltd, a Sydney-based proprietary Australian company,
              is a global commercial energy brokerage firm and strategic trade
              facilitator, connecting Australia’s energy markets to leading
              international partners. Specialising in critical energy
              commodities, including gas and petroleum products, Intergas
              orchestrates high-level, exclusive introductions and executes
              complex transactions with absolute precision and confidence. Our
              established, long-standing relationships with influential global
              energy operators enable us to secure pivotal energy supply
              agreements for the world’s top-tier supply chains.
            </p>
            <br></br>
            <p>
              Operating at the forefront of international energy commerce,
              INTERGAS combines strategic foresight with unrivalled access to
              global markets, delivering decisive advantage and operational
              excellence with complete discretion. While our largest endeavours
              are focused on Australia’s East Coast, our reach (and that of our
              partners) extends across continents, providing elite operators
              with unmatched opportunities and market leverage. For the world’s
              most discerning energy players, INTERGAS Pty Ltd is the definitive
              partner for executing transformative deals, advancing strategy,
              and achieving unparalleled impact in the sector.
            </p>
            <p></p>
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

      {/* Leadership Team
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
      </section> */}

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
