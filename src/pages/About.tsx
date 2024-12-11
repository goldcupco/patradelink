import React from 'react';

export function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About PA TradeLink</h1>
      
      <div className="prose prose-lg">
        <p className="text-gray-600 mb-6">
          PA TradeLink is Pennsylvania's premier platform connecting homeowners and businesses
          with skilled, verified tradespeople. Our mission is to make it simple and safe to
          find reliable professionals for all your trade service needs.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Vision</h2>
        <p className="text-gray-600 mb-6">
          We envision a community where finding skilled trade professionals is as easy as
          a few clicks, where quality work is recognized and rewarded, and where both
          customers and tradespeople can build lasting, trusted relationships.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Why Choose Us</h2>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li>Verified professionals with proven track records</li>
          <li>Transparent pricing and reviews</li>
          <li>Quick response times and reliable service</li>
          <li>Coverage across all Pennsylvania regions</li>
          <li>Secure messaging and booking system</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Commitment</h2>
        <p className="text-gray-600">
          We're committed to maintaining the highest standards of service quality and
          customer satisfaction. Every tradesperson on our platform is thoroughly vetted,
          and we continuously monitor performance to ensure excellent service delivery.
        </p>
      </div>
    </div>
  );
}