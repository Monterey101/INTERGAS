export default function Commodities() {
  return (
    <main className="main">
      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">Our Commodities</h1>
      </section>

      {/* LNG Section */}
      <section className="section commodity-detail-section">
        <div className="grid grid-2">
          <div>
            <img
              src="/transporter.jpg"
              alt="LNG Transportation Infrastructure"
              className="commodity-image"
            />
          </div>
          <div className="commodity-content">
            <h2 className="section-title" style={{marginBottom: '2rem', textAlign: 'left'}}>LNG (Liquefied Natural Gas)</h2>
            <h3 className="card-title">Market Leadership</h3>
              <p>
                INTERGAS maintains a commanding position in the global LNG
                market through strategic partnerships with major producers and
                cutting-edge liquefaction facilities. Our expertise spans the
                entire value chain from wellhead to regasification terminals,
                enabling us to deliver competitive pricing and reliable supply
                to industrial, utility, and commercial customers worldwide.
              </p>
              <br />
              <h3 className="card-title">Technical Specifications</h3>
              <p>
                Our LNG meets the highest international quality standards with
                methane content exceeding 95%, minimal impurities, and
                consistent heating values. We maintain strict temperature
                controls at -162°C during transportation and storage, ensuring
                product integrity throughout the supply chain. All shipments
                comply with ISO 8943 standards and undergo rigorous quality
                testing at certified laboratories.
              </p>
              <br />
              <h3 className="card-title">Global Supply</h3>
              <p>
                With access to production facilities across North America,
                Australia, Qatar, and emerging markets, INTERGAS ensures
                diversified supply sources and enhanced energy security for our
                clients. Our fleet partnerships and terminal access enable
                flexible delivery schedules, spot market opportunities, and
                long-term contract fulfillment across all major global markets.
              </p>
          </div>
        </div>
      </section>

      {/* LPG Section */}
      <section className="section commodity-detail-section">
        <div className="grid grid-2">
          <div className="commodity-content">
            <h2 className="section-title" style={{marginBottom: '2rem', textAlign: 'left'}}>LPG (Liquefied Petroleum Gas)</h2>
            <h3 className="card-title">Product Range</h3>
              <p>
                INTERGAS supplies premium-grade propane, butane, and mixed LPG
                blends tailored to diverse industrial applications including
                petrochemicals, residential heating, automotive fuel, and
                agricultural operations. Our product portfolio includes
                commercial propane, HD-5 specification fuel, and specialized
                blends optimized for specific end-use requirements and regional
                market preferences.
              </p>
              <br />
              <h3 className="card-title">Distribution Network</h3>
              <p>
                Our comprehensive distribution infrastructure encompasses
                strategically located storage terminals, rail car fleets, truck
                transportation, and marine vessels ensuring seamless delivery
                across continental markets. We maintain inventory at key
                distribution hubs, enabling rapid response to market demands and
                providing customers with flexible supply options including bulk
                delivery and cylinder distribution services.
              </p>
              <br />
              <h3 className="card-title">Quality Assurance</h3>
              <p>
                Every LPG shipment undergoes rigorous testing for composition,
                moisture content, sulfur levels, and residue specifications in
                accordance with ASTM D1835 and international standards. Our
                quality management system ensures consistent product purity,
                proper odorization for safety compliance, and comprehensive
                documentation throughout the supply chain to guarantee customer
                satisfaction and regulatory adherence.
              </p>
          </div>
          <div>
            <img
              src="/gas_cylinders.jpg"
              alt="LPG Gas Cylinders"
              className="commodity-image"
            />
          </div>
        </div>
      </section>

      {/* Crude Oil Section */}
      <section className="section commodity-detail-section">
        <div className="grid grid-2">
          <div>
            <img
              src="/crude_oil.jpg"
              alt="Crude Oil Operations"
              className="commodity-image"
            />
          </div>
          <div className="commodity-content">
            <h2 className="section-title" style={{marginBottom: '2rem', textAlign: 'left'}}>Crude Oil</h2>
            <h3 className="card-title">Grade Varieties</h3>
              <p>
                INTERGAS trades a comprehensive portfolio of crude oil grades
                including light sweet crudes like WTI and Brent, heavy sour
                varieties, and regional benchmarks from major producing basins.
                Our expertise covers API gravity ranges from heavy 15° to light
                45°+ crudes, with sulfur content specifications tailored to
                refinery requirements and processing capabilities across global
                markets.
              </p>
              <br />
              <h3 className="card-title">Trading Expertise</h3>
              <p>
                Our trading desk leverages advanced market analytics, real-time
                price discovery, and sophisticated risk management tools to
                optimize crude oil procurement and sales strategies. We maintain
                deep relationships with national oil companies, independent
                producers, and refiners, enabling us to capture arbitrage
                opportunities, manage price volatility, and deliver superior
                value through strategic timing and market positioning.
              </p>
              <br />
              <h3 className="card-title">Delivery Solutions</h3>
              <p>
                INTERGAS coordinates complex logistics operations including VLCC
                and Suezmax tanker charters, pipeline transportation, and
                storage terminal management to ensure reliable crude oil
                delivery worldwide. Our operations team manages vessel
                scheduling, cargo blending, quality inspections, and
                documentation to meet precise delivery specifications while
                optimizing transportation costs and transit times.
              </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section">
        <div className="section-content" style={{textAlign: 'center'}}>
          <h2 className="section-title">Ready to Explore Energy Solutions?</h2>
          <p style={{fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--neutral-600)'}}>Contact our team to discuss your energy commodity requirements and discover how INTERGAS can optimize your supply chain.</p>
          <a href="/contact" className="btn">
            <span>Get In Touch</span>
          </a>
        </div>
      </section>
    </main>
  );
}
