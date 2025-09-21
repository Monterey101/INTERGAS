export default function Privacy() {
  return (
    <main className="main">
      <section className="hero">
        <h1 className="hero-title">Privacy Policy</h1>
      </section>

      <section className="section legal-section">
        <div className="legal-container">
          <div className="legal-content">
            <p className="legal-updated">Last updated: {new Date().toLocaleDateString()}</p>

            <h2>Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you contact us through our website forms, including your name, email address, company information, and any messages you send.</p>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and provide customer service</li>
              <li>Communicate with you about our services</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.</p>

            <h2>Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

            <h2>Your Rights</h2>
            <p>You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us.</p>

            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at info@intergas.com.au</p>
          </div>
        </div>
      </section>
    </main>
  );
}