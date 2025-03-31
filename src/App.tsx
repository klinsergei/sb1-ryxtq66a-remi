import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import RemiWorld from './pages/RemiWorld';
import About from './pages/About';
import Careers from './pages/Careers';
import Legal from './pages/Legal';
import Compliance from './pages/Compliance';
import PciDss from './pages/PciDss';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AmlPolicy from './pages/AmlPolicy';
import ContactFormPopup from './components/ContactFormPopup';
import CookiesPolicyPopup from './components/CookiesPolicyPopup';
import AnimatedBackground from './components/AnimatedBackground';

// ScrollToTop component to ensure pages start at the top when navigated to
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    try {
      window.scrollTo(0, 0);
    } catch (error) {
      console.error('Error scrolling to top:', error);
    }
  }, [pathname]);
  
  return null;
};

// Add a global error boundary to catch and handle any errors
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="p-8 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
            <p className="mb-4">There was an error loading this page. Please try refreshing.</p>
            <button 
              onClick={() => {
                this.setState({ hasError: false });
                window.location.reload();
              }}
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  // Add a defensive effect to handle potential DOM conflicts with extensions
  useEffect(() => {
    // Create a handler for any uncaught errors
    const handleError = (event) => {
      // Only log errors not coming from extensions
      if (!event.filename || !event.filename.includes('chrome-extension')) {
        console.error('Uncaught error:', event.message);
      }
      
      // Prevent the default to handle it ourselves
      event.preventDefault();
    };

    // Add the global error handler
    window.addEventListener('error', handleError);

    // Cleanup
    return () => {
      window.removeEventListener('error', handleError);
    };
  }, []);

  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col relative">
          <AnimatedBackground />
          <Navbar onContactClick={() => setIsContactFormOpen(true)} />
          <main className="flex-grow relative z-10">
            <Routes>
              <Route path="/" element={<Home onContactClick={() => setIsContactFormOpen(true)} />} />
              <Route path="/remi-world" element={<RemiWorld />} />
              <Route path="/about" element={<About />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/legal" element={<Legal />} />
              <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/legal/aml-policy" element={<AmlPolicy />} />
              <Route path="/compliance" element={<Compliance />} />
              <Route path="/pci-dss" element={<PciDss />} />
            </Routes>
          </main>
          <Footer />
          <ContactFormPopup 
            isOpen={isContactFormOpen} 
            onClose={() => setIsContactFormOpen(false)} 
          />
          <CookiesPolicyPopup />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;