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
            <h1 className="hero-title">INTERGAS</h1>
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
            INTERGAS is an independent energy brokerage firm specializing in
            LNG, LPG, and crude oil transactions across Asia-Pacific markets. We
            connect producers with buyers and facilitate secure commodity trades
            while managing price risk and logistics coordination.
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
          <div className="gallery-content">
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
                Deep understanding of global energy markets with real-time
                analysis and strategic insights across LNG, LPG, and crude oil
                sectors.
              </p>
            </div>
            <div className="card">
              <h3 className="card-title">Global Network</h3>
              <p>
                Extensive partnerships spanning producers, transporters, and
                distributors across Asia-Pacific, Middle East, and international
                markets.
              </p>
            </div>
            <div className="card">
              <h3 className="card-title">Risk Management</h3>
              <p>
                Advanced hedging strategies and comprehensive risk assessment
                protocols ensuring secure transactions and market volatility
                protection.
              </p>
            </div>
            <div className="card">
              <h3 className="card-title">Technology Integration</h3>
              <p>
                Cutting-edge trading platforms with automated systems, real-time
                monitoring, and data-driven decision making capabilities.
              </p>
            </div>
            <div className="card">
              <h3 className="card-title">Market Leadership</h3>
              <p>
                Strategic positioning as Australia's premier energy trading
                intermediary, leveraging deep market knowledge to secure optimal
                pricing and reliable supply chains.
              </p>
            </div>
            <div className="card">
              <h3 className="card-title">Growth Vision</h3>
              <p>
                Aggressive expansion across Asia-Pacific markets with focus on
                renewable energy integration and sustainable trading practices
                for long-term market dominance.
              </p>
            </div>
            <div className="card">
              <h3 className="card-title">Innovation Strategy</h3>
              <p>
                Continuous investment in blockchain technology, AI-driven market
                analysis, and automated trading systems to maintain competitive
                edge in digital transformation.
              </p>
            </div>
            <div className="card">
              <h3 className="card-title">Sustainable Practices</h3>
              <p>
                Environmental responsibility through carbon-neutral operations,
                green energy partnerships, and ESG-compliant trading practices
                aligned with global climate goals.
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
