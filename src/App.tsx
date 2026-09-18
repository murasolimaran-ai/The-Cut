import { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MobileStickyCTA } from './components/MobileStickyCTA';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Pricing } from './pages/Pricing';
import { Gallery } from './pages/Gallery';
import { Team } from './pages/Team';
import { Booking } from './pages/Booking';
import { Contact } from './pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [preselectedService, setPreselectedService] = useState<string>('');
  const [preselectedStylist, setPreselectedStylist] = useState<string>('');

  // Handle browser URL hash or path synchronization
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home',
        'about',
        'services',
        'pricing',
        'gallery',
        'team',
        'booking',
        'contact',
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    // Initial check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectServiceToBook = (serviceName: string) => {
    setPreselectedService(serviceName);
  };

  const handleSelectStylistToBook = (stylistName: string) => {
    setPreselectedStylist(stylistName);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F5F2EA] flex flex-col selection:bg-[#D6A85F] selection:text-[#0B0B0B]">
      {/* Global Sticky Navigation */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* Dynamic Page Views */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <Home
            onNavigate={navigateTo}
            onSelectServiceToBook={handleSelectServiceToBook}
          />
        )}
        {currentPage === 'about' && <About onNavigate={navigateTo} />}
        {currentPage === 'services' && (
          <Services
            onNavigate={navigateTo}
            onSelectServiceToBook={handleSelectServiceToBook}
          />
        )}
        {currentPage === 'pricing' && (
          <Pricing
            onNavigate={navigateTo}
            onSelectServiceToBook={handleSelectServiceToBook}
          />
        )}
        {currentPage === 'gallery' && <Gallery onNavigate={navigateTo} />}
        {currentPage === 'team' && (
          <Team
            onNavigate={navigateTo}
            onSelectStylistToBook={handleSelectStylistToBook}
          />
        )}
        {currentPage === 'booking' && (
          <Booking
            onNavigate={navigateTo}
            preselectedService={preselectedService}
            preselectedStylist={preselectedStylist}
          />
        )}
        {currentPage === 'contact' && <Contact onNavigate={navigateTo} />}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Mobile Sticky CTA */}
      <MobileStickyCTA currentPage={currentPage} onNavigate={navigateTo} />
    </div>
  );
}
