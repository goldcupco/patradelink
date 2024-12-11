import React from 'react';

export function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
      
      <div className="prose prose-lg">
        <p className="text-gray-600 mb-6">
          Last Updated: March 1, 2024
        </p>

        <p className="text-gray-600 mb-6">
          This Privacy Policy describes how PA TradeLink ("we," "our," or "us") collects, uses,
          and protects your personal information in accordance with Pennsylvania and federal law.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
        <div className="text-gray-600 mb-6">
          <h3 className="text-xl font-semibold mt-4 mb-2">1.1 Personal Information</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Name, address, phone number, email</li>
            <li>Professional credentials and licenses</li>
            <li>Insurance information</li>
            <li>PA contractor registration numbers</li>
            <li>Business tax identification numbers</li>
            <li>Payment information</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4 mb-2">1.2 Business Information</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Company name and registration details</li>
            <li>Employee information</li>
            <li>Service history and customer reviews</li>
            <li>Insurance certificates</li>
            <li>Professional certifications</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4 mb-2">1.3 Usage Data</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Service request history</li>
            <li>Communication records</li>
            <li>Platform interaction data</li>
            <li>Device and browser information</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
        <div className="text-gray-600 mb-6">
          <p className="mb-4">We use collected information to:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Verify contractor credentials and compliance</li>
            <li>Facilitate service connections</li>
            <li>Process payments and transactions</li>
            <li>Maintain platform security</li>
            <li>Comply with PA contractor registration requirements</li>
            <li>Respond to legal requests and requirements</li>
            <li>Improve our services and user experience</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Information Sharing</h2>
        <div className="text-gray-600 mb-6">
          <p className="mb-4">We may share information with:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Service providers and contractors (with consent)</li>
            <li>Payment processors</li>
            <li>Legal authorities when required</li>
            <li>PA licensing and regulatory bodies</li>
            <li>Insurance verification services</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Data Security</h2>
        <div className="text-gray-600 mb-6">
          <p className="mb-4">We protect your data through:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Encryption of sensitive information</li>
            <li>Regular security audits</li>
            <li>Access controls and authentication</li>
            <li>Secure data storage and transmission</li>
            <li>Employee training and confidentiality agreements</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Your Rights</h2>
        <div className="text-gray-600 mb-6">
          <p className="mb-4">You have the right to:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
            <li>File a complaint with regulatory authorities</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Data Retention</h2>
        <p className="text-gray-600 mb-6">
          We retain personal information as required by PA law and regulatory requirements,
          including contractor registration records, insurance documentation, and transaction
          history.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Children's Privacy</h2>
        <p className="text-gray-600 mb-6">
          Our services are not intended for users under 18. We do not knowingly collect
          information from minors.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Contact Information</h2>
        <p className="text-gray-600 mb-6">
          For privacy-related inquiries or to exercise your rights, contact our Privacy Officer at:
          privacy@patradelink.com or 1-800-XXX-XXXX.
        </p>
      </div>
    </div>
  );
}