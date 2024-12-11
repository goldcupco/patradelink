import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Wrench className="h-8 w-8 mr-3" />
              <span className="text-xl font-bold">PA TradeLink</span>
            </div>
            <p className="text-gray-400">
              Connecting Pennsylvania homeowners with trusted trade professionals.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/terms" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <a href="mailto:support@patradelink.com" className="hover:text-white transition-colors">
                  support@patradelink.com
                </a>
              </li>
              <li className="text-gray-300">1-800-XXX-XXXX</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} PA TradeLink. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}