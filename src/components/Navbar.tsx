import { useState } from 'react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-[40px] px-4 md:px-8 lg:px-[108px]">
        <div className="bg-[#FAF9F7] border-2 border-[#226DE0] rounded-[24px] shadow-md px-6 md:px-8 lg:px-10 py-3 flex items-center justify-between w-full max-w-[1512px] h-[80px]">
          {/* Logo and Navigation Links */}
          <div className="flex items-center gap-3 md:gap-4 lg:gap-6 flex-1">
            {/* Logo */}
            <div className="w-[50px] h-[40px] md:w-[60px] md:h-[50px]">
              <img 
                src="/logo-navbar.svg" 
                alt="ABC Logo" 
                className="w-full h-full object-contain"
              />
            </div>

            {/* Navigation Links - Desktop */}
            <nav className="hidden lg:flex items-center gap-3 lg:gap-4">
              <a 
                href="#accueil" 
                className="text-[#3F4C61] text-[16px] lg:text-[18px] font-medium hover:text-[#226DE0] transition-colors"
                style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-0.18px' }}
              >
                Accueil
              </a>
              <a 
                href="#services" 
                className="text-[#3F4C61] text-[16px] lg:text-[18px] font-medium hover:text-[#226DE0] transition-colors"
                style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-0.18px' }}
              >
                Services
              </a>
              <a 
                href="#portfolio" 
                className="text-[#3F4C61] text-[16px] lg:text-[18px] font-medium hover:text-[#226DE0] transition-colors"
                style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-0.18px' }}
              >
                Portfolio
              </a>
              <a 
                href="#processus" 
                className="text-[#3F4C61] text-[16px] lg:text-[18px] font-medium hover:text-[#226DE0] transition-colors"
                style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-0.18px' }}
              >
                Processus
              </a>
            </nav>
          </div>

          {/* Burger Menu Button - Mobile/Tablet */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center mr-3"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-[#3F4C61] transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-[#3F4C61] transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-[#3F4C61] transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>

          {/* CTA Button - Desktop */}
          <a 
            href="#contact" 
            className="hidden lg:flex bg-[#226DE0] border-[3px] border-[#FAF9F7] rounded-[20px] px-4 md:px-6 items-center gap-2 hover:bg-[#1a5bc0] transition-all h-[56px]"
            style={{ boxShadow: '0px -1px 20px 0px rgba(0, 0, 0, 0.16)' }}
          >
            <span 
              className="text-[#FAF9F7] text-[16px] md:text-[18px] lg:text-[20px] font-bold whitespace-nowrap"
              style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-0.2px' }}
            >
              Prendre rendez-vous
            </span>
            <img 
              src="/arrow-icon.svg" 
              alt="Arrow" 
              className="w-[24px] h-[24px] md:w-[28px] md:h-[28px]"
            />
          </a>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-[280px] bg-[#FAF9F7] z-50 lg:hidden transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-[80px] px-6">
          {/* Close Button */}
          <button
            onClick={closeMobileMenu}
            className="absolute top-8 right-6 w-10 h-10 flex items-center justify-center hover:bg-gray-200 rounded-full transition-colors"
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="#3F4C61" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Mobile Navigation Links */}
          <nav className="flex flex-col gap-6 mb-8">
            <a 
              href="#accueil" 
              onClick={closeMobileMenu}
              className="text-[#3F4C61] text-[22px] font-medium hover:text-[#226DE0] transition-colors"
              style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-0.22px' }}
            >
              Accueil
            </a>
            <a 
              href="#services" 
              onClick={closeMobileMenu}
              className="text-[#3F4C61] text-[22px] font-medium hover:text-[#226DE0] transition-colors"
              style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-0.22px' }}
            >
              Services
            </a>
            <a 
              href="#portfolio" 
              onClick={closeMobileMenu}
              className="text-[#3F4C61] text-[22px] font-medium hover:text-[#226DE0] transition-colors"
              style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-0.22px' }}
            >
              Portfolio
            </a>
            <a 
              href="#processus" 
              onClick={closeMobileMenu}
              className="text-[#3F4C61] text-[22px] font-medium hover:text-[#226DE0] transition-colors"
              style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-0.22px' }}
            >
              Processus
            </a>
          </nav>

          {/* Mobile CTA Button */}
          <a 
            href="#contact" 
            onClick={closeMobileMenu}
            className="bg-[#226DE0] border-[3px] border-[#FAF9F7] rounded-[18px] px-5 py-3.5 flex items-center justify-center gap-2 hover:bg-[#1a5bc0] transition-all w-full"
            style={{ boxShadow: '0px -1px 20px 0px rgba(0, 0, 0, 0.16)' }}
          >
            <span 
              className="text-[#FAF9F7] text-[16px] font-bold whitespace-nowrap"
              style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-0.16px' }}
            >
              Prendre rendez-vous
            </span>
            <img 
              src="/arrow-icon.svg" 
              alt="Arrow" 
              className="w-[20px] h-[20px]"
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
