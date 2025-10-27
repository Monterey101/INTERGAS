import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <img
                src="/INTERGAS_PTY_LTD_LOGO.svg"
                alt=""
                className="footer-logo-svg"
              />
              <div>
                INTERGAS <span className="logo-suffix">Pty Ltd</span>
              </div>
            </Link>
            <p className="footer-tagline">
              Energy Brokerage & Trade Facilitation
            </p>
            <div className="footer-address">
              <p>Sydney, NSW, Australia</p>
            </div>
          </div>
          <nav className="footer-nav">
            <div className="footer-section">
              <h3 className="footer-heading">Services</h3>
              <Link href="/commodities" className="footer-link">
                LNG Brokerage
              </Link>
              <Link href="/commodities" className="footer-link">
                LPG Brokerage
              </Link>
              <Link href="/commodities" className="footer-link">
                Crude Oil Brokerage
              </Link>
            </div>

            <div className="footer-section">
              <h3 className="footer-heading">Company</h3>
              <Link href="/about" className="footer-link">
                About Us
              </Link>
              <Link href="/about" className="footer-link">
                Leadership Team
              </Link>
              <Link href="/contact" className="footer-link">
                Contact Us
              </Link>
            </div>

            <div className="footer-section">
              <h3 className="footer-heading">Legal</h3>
              <Link href="/privacy" className="footer-link">
                Privacy Policy
              </Link>
              <Link href="/terms" className="footer-link">
                Terms of Service
              </Link>
              <Link href="/risk" className="footer-link">
                Risk Disclosure
              </Link>
            </div>
          </nav>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <p className="footer-copyright">
              Copyright © 2025 Intergas Pty Ltd. All rights reserved.
            </p>
            <p className="footer-abn">ABN 98 691 680 725 | AFSL [Pending]</p>
          </div>
          <div className="footer-certifications">
            {/* <span>ISO NNNN:NNNN Certified</span>
            <span>•</span> */}
            <span>
              Australian Securities and Investments Commission Registered &
              Regulated
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
