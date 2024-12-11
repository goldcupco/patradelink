import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Wrench, User, Menu, X } from 'lucide-react';
import { useAuth } from '../auth/context/AuthContext';
import { SignInButton } from './buttons/SignInButton';
import { SignOutButton } from './buttons/SignOutButton';
import { SignUpModal } from './SignUpModal';

export function Header() {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

  useEffect(() => {
    const handleOpenAuthModal = (event: CustomEvent<{ isSignIn: boolean }>) => {
      setIsSignIn(event.detail.isSignIn);
      setIsSignUpOpen(true);
    };

    window.addEventListener('openAuthModal', handleOpenAuthModal as EventListener);
    return () => {
      window.removeEventListener('openAuthModal', handleOpenAuthModal as EventListener);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className="bg-red-600">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <Wrench className="h-8 w-8 text-white mr-3" />
              <h1 className="text-2xl font-bold text-white">
                PA TradeLink
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link 
                to="/" 
                className={`text-white hover:text-gray-200 transition-colors ${
                  location.pathname === '/' ? 'font-semibold' : ''
                }`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`text-white hover:text-gray-200 transition-colors ${
                  location.pathname === '/about' ? 'font-semibold' : ''
                }`}
              >
                About
              </Link>
              <Link 
                to="/blog" 
                className={`text-white hover:text-gray-200 transition-colors ${
                  location.pathname === '/blog' ? 'font-semibold' : ''
                }`}
              >
                Blog
              </Link>
              {user ? (
                <div className="flex items-center space-x-4">
                  <span className="text-white">{user.email}</span>
                  <SignOutButton />
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <SignInButton />
                  <button 
                    onClick={() => {
                      setIsSignIn(false);
                      setIsSignUpOpen(true);
                    }}
                    className="bg-white text-red-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-4">
                <Link 
                  to="/" 
                  className={`text-white hover:text-gray-200 transition-colors ${
                    location.pathname === '/' ? 'font-semibold' : ''
                  }`}
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className={`text-white hover:text-gray-200 transition-colors ${
                    location.pathname === '/about' ? 'font-semibold' : ''
                  }`}
                >
                  About
                </Link>
                <Link 
                  to="/blog" 
                  className={`text-white hover:text-gray-200 transition-colors ${
                    location.pathname === '/blog' ? 'font-semibold' : ''
                  }`}
                >
                  Blog
                </Link>
                {user ? (
                  <div className="flex flex-col space-y-4">
                    <span className="text-white">{user.email}</span>
                    <SignOutButton />
                  </div>
                ) : (
                  <div className="flex flex-col space-y-4">
                    <SignInButton />
                    <button 
                      onClick={() => {
                        setIsSignIn(false);
                        setIsSignUpOpen(true);
                        setIsMobileMenuOpen(false);
                      }}
                      className="bg-white text-red-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors"
                    >
                      Sign Up
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </nav>
      </header>

      <SignUpModal 
        isOpen={isSignUpOpen} 
        onClose={() => setIsSignUpOpen(false)} 
        initialMode={isSignIn ? 'signin' : 'signup'}
      />
    </>
  );
}