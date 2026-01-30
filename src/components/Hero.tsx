function Hero() {
  return (
    <section id="accueil" className="min-h-screen flex items-center pt-[150px] md:pt-[160px] lg:pt-[170px] pb-20 px-6 bg-linear-to-b from-white to-gray-50 relative">
      {/* Stronger Grid Overlay for Hero Section */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(34, 109, 224, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(34, 109, 224, 0.08) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Additional Blue Blur for Hero */}
      <div 
        className="absolute top-1/2 right-10 w-[400px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(34, 109, 224, 0.12) 0%, transparent 70%)',
          filter: 'blur(100px)',
          transform: 'translateY(-50%)'
        }}
      />
      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 bg-[#226DE0] text-white px-4 py-2 rounded-full text-sm font-semibold">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 1L10.163 5.38L15 6.12L11.5 9.54L12.326 14.36L8 12.1L3.674 14.36L4.5 9.54L1 6.12L5.837 5.38L8 1Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            </svg>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 1L10.163 5.38L15 6.12L11.5 9.54L12.326 14.36L8 12.1L3.674 14.36L4.5 9.54L1 6.12L5.837 5.38L8 1Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            </svg>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 1L10.163 5.38L15 6.12L11.5 9.54L12.326 14.36L8 12.1L3.674 14.36L4.5 9.54L1 6.12L5.837 5.38L8 1Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            </svg>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 1L10.163 5.38L15 6.12L11.5 9.54L12.326 14.36L8 12.1L3.674 14.36L4.5 9.54L1 6.12L5.837 5.38L8 1Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            </svg>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 1L10.163 5.38L15 6.12L11.5 9.54L12.326 14.36L8 12.1L3.674 14.36L4.5 9.54L1 6.12L5.837 5.38L8 1Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            </svg>
            +20 PROJETS RÉALISÉS
          </span>
        </div>

        {/* Main Title with Outline Effect */}
        <h1 
          className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            color: 'transparent',
            WebkitTextStroke: '2px #000000',
            textStroke: '2px #000000',
            paintOrder: 'stroke fill'
          }}
        >
          Antoine Bourdeau
        </h1>

        {/* Feature Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <span className="inline-flex items-center gap-2 bg-white border-2 border-[#226DE0] px-4 py-2 rounded-full text-sm font-medium text-gray-900">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 2L6 9L3 6" stroke="#226DE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Livraison rapide
          </span>
          <span className="inline-flex items-center gap-2 bg-white border-2 border-[#226DE0] px-4 py-2 rounded-full text-sm font-medium text-gray-900">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 2L6 9L3 6" stroke="#226DE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Prix transparent
          </span>
          <span className="inline-flex items-center gap-2 bg-white border-2 border-[#226DE0] px-4 py-2 rounded-full text-sm font-medium text-gray-900">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 2L6 9L3 6" stroke="#226DE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Support 7j/7
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a 
            href="#contact" 
            className="bg-[#226DE0] border-[3px] border-[#FAF9F7] text-white px-8 py-4 rounded-[25px] font-semibold hover:bg-[#1a5bc0] transition-all inline-flex items-center justify-center gap-2"
            style={{ fontFamily: "'Space Grotesk', sans-serif", boxShadow: '0px -1px 20px 0px rgba(0, 0, 0, 0.16)' }}
          >
            Prendre rendez-vous
            <img 
              src="/arrow-icon.svg" 
              alt="Arrow" 
              className="w-[20px] h-[20px]"
            />
          </a>
          <a 
            href="#services" 
            className="bg-white border-[4px] border-[#226DE0] text-[#3F4C61] px-10 py-4 rounded-[25px] font-bold hover:bg-[#226DE0] hover:text-white transition-all inline-flex items-center justify-center text-lg"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Découvrir les services
          </a>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Site vitrine Card */}
          <div className="bg-white border-2 border-[#226DE0] rounded-[20px] p-6 hover:shadow-lg transition-all">
            <div className="mb-4">
              <span className="inline-block bg-white border-2 border-[#226DE0] rounded-[15px] px-4 py-2 text-sm font-medium text-[#3F4C61]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Site vitrine
              </span>
            </div>
            <div className="mb-4 flex justify-center">
              <div className="bg-[#226DE0] rounded-[15px] p-3 w-[60px] h-[60px] flex items-center justify-center">
                <img src="/icon-code.svg" alt="Code icon" className="w-[32px] h-[32px]" />
              </div>
            </div>
            <p className="text-[#3F4C61] text-sm text-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Design moderne et responsive adapté à votre image
            </p>
          </div>

          {/* Automatisation Card */}
          <div className="bg-white border-2 border-[#226DE0] rounded-[20px] p-6 hover:shadow-lg transition-all">
            <div className="mb-4">
              <span className="inline-block bg-white border-2 border-[#226DE0] rounded-[15px] px-4 py-2 text-sm font-medium text-[#3F4C61]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Automatisation
              </span>
            </div>
            <div className="mb-4 flex justify-center">
              <div className="bg-[#226DE0] rounded-[15px] p-3 w-[60px] h-[60px] flex items-center justify-center">
                <img src="/icon-automation.svg" alt="Automation icon" className="w-[32px] h-[32px]" />
              </div>
            </div>
            <p className="text-[#3F4C61] text-sm text-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Optimisez vos processus avec l'intelligence artificielle
            </p>
          </div>

          {/* Full-Stack Card */}
          <div className="bg-white border-2 border-[#226DE0] rounded-[20px] p-6 hover:shadow-lg transition-all">
            <div className="mb-4">
              <span className="inline-block bg-white border-2 border-[#226DE0] rounded-[15px] px-4 py-2 text-sm font-medium text-[#3F4C61]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Full-Stack
              </span>
            </div>
            <div className="mb-4 flex justify-center">
              <div className="bg-[#226DE0] rounded-[15px] p-3 w-[60px] h-[60px] flex items-center justify-center">
                <img src="/icon-fullstack.svg" alt="Full-stack icon" className="w-[32px] h-[32px]" />
              </div>
            </div>
            <p className="text-[#3F4C61] text-sm text-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Solutions complètes avec backend et base de données
            </p>
          </div>

          {/* SEO Card */}
          <div className="bg-white border-2 border-[#226DE0] rounded-[20px] p-6 hover:shadow-lg transition-all">
            <div className="mb-4">
              <span className="inline-block bg-white border-2 border-[#226DE0] rounded-[15px] px-4 py-2 text-sm font-medium text-[#3F4C61]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                SEO
              </span>
            </div>
            <div className="mb-4 flex justify-center">
              <div className="bg-[#226DE0] rounded-[15px] p-3 w-[60px] h-[60px] flex items-center justify-center">
                <img src="/icon-seo.svg" alt="SEO icon" className="w-[32px] h-[32px]" />
              </div>
            </div>
            <p className="text-[#3F4C61] text-sm text-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Optimisation pour être visible sur Google
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

