"use client";
import { useState } from "react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/producer.jpg",
      alt: "Energy Production Facilities",
      title: "Energy Production Facilities",
      description:
        "Advanced production facilities and strategic partnerships with global energy producers, ensuring reliable sourcing and quality control across diverse energy commodities.",
    },
    {
      image: "/transporter.jpg",
      alt: "Transportation Infrastructure",
      title: "Transportation Infrastructure",
      description:
        "Comprehensive logistics network spanning international shipping routes, pipeline systems, and specialized transportation solutions for secure energy commodity delivery.",
    },
    {
      image: "/distributor.jpg",
      alt: "Energy Distribution Network",
      title: "Distribution Network",
      description:
        "Strategic distribution infrastructure connecting global energy markets through advanced logistics networks and reliable supply chain management systems.",
    },
    {
      image: "/user.jpg",
      alt: "End-User Solutions",
      title: "End-User Solutions",
      description:
        "Tailored energy solutions serving diverse industrial, commercial, and institutional clients across multiple sectors and geographic markets worldwide.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <main className="main">
      {/* Hero Section */}
      <section className="hero hero-home">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              <img
                src="/INTERGAS_PTY_LTD_LOGO.svg"
                alt=""
                className="hero-logo-svg"
              />
              <div>
                INTERGAS <span className="hero-title-suffix">Pty Ltd</span>
              </div>
            </h1>
            <p className="hero-subtitle">
              Connecting Australia to the international energy market
            </p>
            <div className="hero-actions">
              <a href="/commodities" className="btn">
                <span>Learn More</span>
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img src="/handshake.png" alt="INTERGAS Business Partnership" />
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section">
        <div className="section-content" style={{ textAlign: "center" }}>
          <h2 className="section-title">
            Energy Brokerage & Trade Facilitation
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              marginBottom: "2rem",
              color: "var(--neutral-600)",
              maxWidth: "800px",
              margin: "0 auto 2rem",
            }}
          >
            INTERGAS Pty Ltd is an independent energy brokerage firm
            specializing in LNG, LPG, and crude oil transactions across
            Asia-Pacific markets. We connect producers with buyers and
            facilitate secure commodity trades while managing price risk and
            logistics coordination.
          </p>
        </div>
      </section>

      {/* Core Commodities */}
      <section className="section commodities-section">
        <div className="section-content">
          <h2 className="section-title">Core Commodities</h2>
          <div className="commodities-grid">
            <div className="commodity-item">
              <div className="commodity-icon">
                <img src="/lng_flame.png" alt="LNG" />
              </div>
              <h3 className="commodity-name">LNG</h3>
              <p className="commodity-subtitle">Liquefied Natural Gas</p>
            </div>
            <div className="commodity-item">
              <div className="commodity-icon">
                <img src="/lpg_flame.png" alt="LPG" />
              </div>
              <h3 className="commodity-name">LPG</h3>
              <p className="commodity-subtitle">Liquefied Petroleum Gas</p>
            </div>
            <div className="commodity-item">
              <div className="commodity-icon">
                <img src="/oil_droplet.png" alt="Crude Oil" />
              </div>
              <h3 className="commodity-name">Crude Oil</h3>
              <p className="commodity-subtitle">Global Markets</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section gallery-section">
        <div className="section-content">
          <h2 className="section-title">Energy Pipeline Network</h2>
        </div>
        <div className="gallery-container">
          <div className="gallery-image-container">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`gallery-slide ${
                  index === currentSlide ? "active" : ""
                }`}
              >
                <img src={slide.image} alt={slide.alt} />
              </div>
            ))}
            <button className="gallery-btn prev" onClick={prevSlide}>
              ←
            </button>
            <button className="gallery-btn next" onClick={nextSlide}>
              →
            </button>
            <div className="gallery-nav">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`gallery-dot ${
                    index === currentSlide ? "active" : ""
                  }`}
                  onClick={() => goToSlide(index)}
                ></div>
              ))}
            </div>
          </div>
          <div className="gallery-content" key={currentSlide}>
            <h3 className="gallery-title">{slides[currentSlide].title}</h3>
            <p className="gallery-description">
              {slides[currentSlide].description}
            </p>
          </div>
        </div>
      </section>

      {/* Competitive Advantages & Strategy */}
      <section className="section">
        <div className="section-content">
          <h2 className="section-title">Competitive Advantages & Strategy</h2>
          <div className="grid grid-2x2">
            <div className="card">
              <h3 className="card-title">Market Expertise</h3>
              <p>
                Strong understanding of energy trading fundamentals across LNG,
                LPG, and crude oil markets, supported by ongoing research into
                regional pricing, logistics, and supply trends. INTERGAS
                combines this insight with practical experience in contract
                negotiation and supply chain coordination.
              </p>
            </div>

            <div className="card">
              <h3 className="card-title">Growing Network</h3>
              <p>
                Developing a reliable network of suppliers, buyers, and
                logistics partners across Australia, Asia-Pacific, Europe, and
                the Middle East. INTERGAS prioritises transparency and trust to
                build long-term commercial relationships with both emerging and
                established market participants.
              </p>
            </div>

            <div className="card">
              <h3 className="card-title">Risk & Compliance</h3>
              <p>
                Emphasis on prudent risk management through careful exposure
                control, due diligence, and contract structuring. INTERGAS aims
                to ensure all transactions meet international compliance
                standards and mitigate counterparty, credit, and operational
                risks.
              </p>
            </div>

            <div className="card">
              <h3 className="card-title">Technology & Efficiency</h3>
              <p>
                Integration of modern digital tools for market tracking, pricing
                analysis, and trade management. The company continues to explore
                scalable trading systems and data analytics to enhance
                decision-making efficiency as trading volumes grow.
              </p>
            </div>

            <div className="card">
              <h3 className="card-title">Strategic Positioning</h3>
              <p>
                Positioned as an agile, data-informed intermediary serving both
                domestic and international markets. INTERGAS focuses on
                competitive pricing, reliable supply coordination, and flexible
                contract structures to support buyers and producers alike.
              </p>
            </div>

            <div className="card">
              <h3 className="card-title">Sustainable Growth Vision</h3>
              <p>
                Focused on steady expansion within the Asia-Pacific region, with
                attention to operational sustainability, efficiency, and
                alignment with evolving market demands — including gradual
                diversification toward low-carbon fuels and renewable gas
                solutions.
              </p>
            </div>

            <div className="card">
              <h3 className="card-title">Innovation Approach</h3>
              <p>
                Pragmatic approach to innovation by adopting proven digital and
                analytical tools before scaling to advanced automation or AI
                systems. INTERGAS invests selectively in technology that
                enhances reliability, transparency, and customer engagement.
              </p>
            </div>

            <div className="card">
              <h3 className="card-title">Responsible Operations</h3>
              <p>
                Commitment to ethical trading, environmental responsibility, and
                efficient energy use across all operations. INTERGAS supports
                ESG-aligned initiatives and aims to progressively integrate
                carbon tracking and reporting into its trading framework.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section">
        <div className="section-content" style={{ textAlign: "center" }}>
          <h2 className="section-title">Interested in Our Services?</h2>
          <p
            style={{
              fontSize: "1.2rem",
              marginBottom: "2rem",
              color: "var(--neutral-600)",
            }}
          >
            Connect with INTERGAS to explore energy brokerage opportunities and
            learn how we can support your business objectives.
          </p>
          <a href="/contact" className="btn">
            <span>Contact Us</span>
          </a>
        </div>
      </section>
    </main>
  );
}
