export default function Terms() {
  return (
    <main className="main">
      <section className="hero">
        <h1 className="hero-title">Terms of Service</h1>
      </section>

      <section className="section legal-section">
        <div className="legal-container">
          <div className="legal-content">
            <p className="legal-updated">Last updated: {new Date().toLocaleDateString()}</p>

            <h2>Acceptance of Terms</h2>
            <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>

            <h2>Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials on INTERGAS's website for personal, non-commercial transitory viewing only.</p>

            <h2>Disclaimer</h2>
            <p>The materials on INTERGAS's website are provided on an 'as is' basis. INTERGAS makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

            <h2>Limitations</h2>
            <p>In no event shall INTERGAS or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on INTERGAS's website.</p>

            <h2>Accuracy of Materials</h2>
            <p>The materials appearing on INTERGAS's website could include technical, typographical, or photographic errors. INTERGAS does not warrant that any of the materials on its website are accurate, complete, or current.</p>

            <h2>Links</h2>
            <p>INTERGAS has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site.</p>

            <h2>Modifications</h2>
            <p>INTERGAS may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.</p>

            <h2>Contact Information</h2>
            <p>If you have any questions about these Terms of Service, please contact us at info@intergas.com.au</p>
          </div>
        </div>
      </section>
    </main>
  );
}