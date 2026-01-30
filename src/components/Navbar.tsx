import { useState } from 'react'
import Button from './Button'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Processus', href: '#processus' }
  ]

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className="relative pt-14 pb-8">
        <div className="max-w-[80%] mx-auto border-2 rounded-3xl px-10 py-4 bg-white/80 backdrop-blur-sm" style={{ borderColor: '#226DE0' }}>
          <div className="flex items-center justify-between">
            {/* Left Block: Logo + Navigation Links */}
            <div className="flex items-center gap-10">
              {/* Logo */}
              <a href="#accueil">
                <img 
                  src="/logo-navbar.svg" 
                  alt="Logo" 
                  className="h-16 w-18"
                />
              </a>

              {/* Desktop Navigation Links */}
              <div className="hidden md:flex items-center gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="transition-colors duration-200 text-xl font-normal"
                  style={{ color: link.href === window.location.hash ? '#226DE0' : '#3F4C61' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#226DE0'}
                  onMouseLeave={(e) => e.currentTarget.style.color = link.href === window.location.hash ? '#226DE0' : '#3F4C61'}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right Block: CTA Button */}
          <div className="hidden md:block">
            <Button 
              href="#contact"
              icon={<img src="/arrow.svg" alt="arrow" className="w-8 h-8" />}
            >
              Prendre rendez-vous
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 transition-colors"
            style={{ color: '#3F4C61' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#226DE0'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#3F4C61'}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="block transition-colors duration-200 font-medium py-2"
                style={{ color: '#3F4C61' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#226DE0'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#3F4C61'}
              >
                {link.name}
              </a>
            ))}
            <Button 
              href="#contact"
              className="w-full justify-center"
              icon={<img src="/arrow.svg" alt="arrow" className="w-8 h-8" />}
            >
              Prendre rendez-vous
            </Button>
          </div>
        )}
    </nav>
  )
}
