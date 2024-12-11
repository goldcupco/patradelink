import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Blog } from './pages/Blog';
import { Login } from './pages/Login';
import { Messages } from './pages/Messages';
import { TermsOfService } from './pages/TermsOfService';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { AuthCallback } from './components/AuthCallback';
import { AuthError } from './components/AuthError';
import { AuthGuard } from './auth/components/AuthGuard';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/messages" 
          element={
            <AuthGuard>
              <Messages />
            </AuthGuard>
          } 
        />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/callback" element={<AuthCallback />} />
        <Route path="/error" element={<AuthError />} />
      </Routes>
    </Layout>
  );
}

export default App;