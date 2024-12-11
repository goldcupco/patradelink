import React from 'react';

export function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
      
      <div className="prose prose-lg">
        <p className="text-gray-600 mb-6">
          Last Updated: March 1, 2024
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Agreement to Terms</h2>
        <p className="text-gray-600 mb-6">
          These Terms of Service constitute a legally binding agreement between you and PA TradeLink
          regarding your use of our platform. By accessing or using PA TradeLink, you agree to be bound
          by these terms and our Privacy Policy.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Service Provider Requirements</h2>
        <div className="text-gray-600 mb-6">
          <p className="mb-4">All service providers must:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Maintain valid Pennsylvania contractor registration as required by the Home Improvement Consumer Protection Act (HICPA)</li>
            <li>Carry minimum insurance coverage:
              <ul className="list-disc list-inside ml-6">
                <li>General Liability: $500,000 per occurrence</li>
                <li>Workers' Compensation: As required by PA law</li>
                <li>Professional Liability: Where applicable</li>
              </ul>
            </li>
            <li>Hold current trade-specific licenses where required by state or local law</li>
            <li>Comply with PA Act 44/2009 regarding workers' compensation coverage</li>
            <li>Maintain compliance with PA Contractor Registration Act requirements</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Consumer Rights and Protections</h2>
        <div className="text-gray-600 mb-6">
          <p className="mb-4">Under Pennsylvania law:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Consumers have a three-day right of rescission for home improvement contracts</li>
            <li>All contracts over $500 must be in writing and include specific disclosures</li>
            <li>Deposits are limited to 1/3 of the contract price unless special materials are ordered</li>
            <li>Contractors must provide proof of registration and insurance upon request</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Platform Rules and Guidelines</h2>
        <div className="text-gray-600 mb-6">
          <h3 className="text-xl font-semibold mt-4 mb-2">4.1 Service Provider Obligations</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Maintain accurate profile information and credentials</li>
            <li>Respond to inquiries within stated response times</li>
            <li>Honor quoted prices and service commitments</li>
            <li>Maintain professional conduct and workmanship standards</li>
            <li>Comply with PA Home Improvement Consumer Protection Act</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4 mb-2">4.2 Consumer Obligations</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Provide accurate project information</li>
            <li>Communicate promptly and professionally</li>
            <li>Honor scheduled appointments</li>
            <li>Pay for services as agreed</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Dispute Resolution</h2>
        <div className="text-gray-600 mb-6">
          <p className="mb-4">Any disputes shall be resolved according to Pennsylvania law through:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Initial platform mediation process</li>
            <li>PA Attorney General's Bureau of Consumer Protection</li>
            <li>Local PA courts with proper jurisdiction</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Licensing and Compliance</h2>
        <div className="text-gray-600 mb-6">
          <p className="mb-4">Service providers must maintain applicable licenses:</p>
          <ul className="list-disc list-inside mb-4">
            <li>PA Home Improvement Contractor Registration</li>
            <li>Municipal licenses where required</li>
            <li>Trade-specific certifications (electrical, plumbing, etc.)</li>
            <li>EPA/environmental certifications where applicable</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Insurance Requirements</h2>
        <p className="text-gray-600 mb-6">
          All service providers must maintain current insurance coverage as required by Pennsylvania law
          and local regulations. Proof of insurance must be provided upon request and updated annually.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Termination</h2>
        <p className="text-gray-600 mb-6">
          PA TradeLink reserves the right to terminate or suspend accounts for violations of these
          terms, including but not limited to licensing or insurance lapses, consumer complaints,
          or fraudulent activity.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Changes to Terms</h2>
        <p className="text-gray-600 mb-6">
          We may modify these terms at any time. Users will be notified of significant changes,
          and continued use of the platform constitutes acceptance of modified terms.
        </p>
      </div>
    </div>
  );
}