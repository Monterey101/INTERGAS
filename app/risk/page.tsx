export default function Risk() {
  return (
    <main className="main">
      <section className="hero">
        <h1 className="hero-title">Risk Disclosure</h1>
      </section>

      <section className="section legal-section">
        <div className="legal-container">
          <div className="legal-content">
            <p className="legal-updated">Last updated: {new Date().toLocaleDateString()}</p>

            <h2>General Risk Warning</h2>
            <p>Energy commodity trading and brokerage services involve substantial risk and may not be suitable for all investors. Past performance is not indicative of future results.</p>

            <h2>Market Risks</h2>
            <p>Energy commodity markets are subject to significant price volatility due to factors including but not limited to:</p>
            <ul>
              <li>Supply and demand fluctuations</li>
              <li>Geopolitical events and regulatory changes</li>
              <li>Weather conditions and natural disasters</li>
              <li>Economic conditions and currency fluctuations</li>
              <li>Technological developments and market sentiment</li>
            </ul>

            <h2>Operational Risks</h2>
            <p>Trading activities may be subject to operational risks including system failures, communication disruptions, and human error that could result in financial losses.</p>

            <h2>Counterparty Risk</h2>
            <p>There is a risk that counterparties may default on their obligations, which could result in financial losses.</p>

            <h2>Regulatory Risk</h2>
            <p>Changes in laws, regulations, or government policies may affect the energy commodity markets and trading activities.</p>

            <h2>Liquidity Risk</h2>
            <p>Some energy commodity markets may have limited liquidity, which could affect the ability to execute trades at desired prices.</p>

            <h2>No Investment Advice</h2>
            <p>Information provided on this website is for general informational purposes only and does not constitute investment advice. You should consult with qualified professionals before making any investment decisions.</p>

            <h2>Acknowledgment</h2>
            <p>By using our services, you acknowledge that you understand these risks and that you are solely responsible for your trading decisions.</p>

            <h2>Contact Us</h2>
            <p>If you have any questions about these risk disclosures, please contact us at info@intergas.com.au</p>
          </div>
        </div>
      </section>
    </main>
  );
}