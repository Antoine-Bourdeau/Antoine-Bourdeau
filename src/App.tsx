import Navbar from './components/Navbar'
import Button from './components/Button'

function App() {
  return (
    <div 
      className="min-h-screen"
      style={{
        backgroundImage: `
          linear-gradient(rgba(34, 109, 224, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(34, 109, 224, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        backgroundColor: 'var(--color-abc-white)'
      }}
    >
      <Navbar />
      
      {/* Accueil Section */}
      <section id="accueil" className="h-screen relative flex flex-col justify-between overflow-hidden">
        <div className="flex-1 flex flex-col justify-center items-center w-full mx-auto text-center space-y-6 -mt-12">
          {/* Trust Badge */}
          <div className="flex justify-center ">
            <Button 
              variant="primary" 
              borderRadius="16px"
              padding="px-8 py-2"
              className="cursor-default hover:scale-100 active:scale-100"
            >
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-abc-white fill-abc-white stroke-abc-white stroke-1" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-abc-white font-bold text-base">+20 PROJETS RÉALISÉS</span>
              </div>
            </Button>
          </div>

          {/* Hero Title */}
          <h1 className="text-5xl md:text-[80px] lg:text-[100px] font-bold tracking-tight leading-[0.9] text-transparent text-stroke-black pt-2 pb-4">
            Antoine Bourdeau
          </h1>

          {/* Feature Tags */}
          <div className="flex flex-wrap justify-center gap-10">
            {['Livraison rapide', 'Prix transparent', 'Support 7j/7'].map((tag) => (
              <div key={tag} className="flex items-center gap-5 px-5 py-2.5 rounded-2xl border-2 border-abc-blue bg-abc-white/50 backdrop-blur-sm shadow-sm">
                <svg className="w-4 h-4 text-abc-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-abc-black font-normal">{tag}</span>
              </div>
            ))}
          </div>

          {/* Hero CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
               href="#contact"
               icon={<img src="/arrow.svg" alt="arrow" className="w-6 h-6" />}
            >
              Prendre rendez-vous
            </Button>
            <Button 
               href="#services"
               variant="secondary"
            >
              Découvrir les services
            </Button>
          </div>

          {/* Activity Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 items-end w-full max-w-[80%] mx-auto pt-12 pb-8">
            {[
              { 
                title: 'Site vitrine', 
                desc: 'Design moderne et responsive adapté à votre image.',
                rotate: '-rotate-z-12',
                isSmall: false,
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 21h6l-.75-4M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              },
              { 
                title: 'Automatisation', 
                desc: 'Optimisez vos processus avec l\'intelligence artificielle.',
                rotate: 'rotate-z-2',
                isSmall: false,
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              { 
                title: 'Full-Stack', 
                desc: 'Solutions complètes sur-mesure avec backend et base de données.',
                rotate: '-rotate-z-6',
                isSmall: false,
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                )
              },
              { 
                title: 'SEO', 
                desc: 'Optimisez votre présence en ligne et sur google avec des stratégies SEO.',
                rotate: 'rotate-z-3',
                isSmall: false,
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                )
              }
            ].map((activity) => (
              <div 
                key={activity.title} 
                className="relative group h-full"
              >
                {/* Tab Header */}
                <div className={`absolute -top-6 left-1/2 -translate-x-1/2 z-10 w-full flex justify-center px-4 transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1 ${activity.rotate}`}>
                  <Button 
                    variant="secondary"
                    className="pointer-events-none w-48"
                    padding="px-4 py-1.5"
                  >
                    <span className="text-xs uppercase tracking-wider">{activity.title}</span>
                  </Button>
                </div>

                {/* Card Body */}
                <div className="h-full border-2 border-abc-blue bg-abc-white shadow-xl transition-all duration-300 group-hover:shadow-2xl flex flex-col items-center text-center space-y-4 rounded-[32px] pt-12 pb-8 px-6">
                  {/* Icon Badge */}
                  <div className="p-3 px-8 bg-abc-blue rounded-xl text-abc-white shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                    {activity.icon}
                  </div>
                  
                  <div className="space-y-2 px-4 flex-1 flex flex-col justify-center">
                    <p className="text-abc-black text-sm leading-relaxed max-w-[180px] mx-auto">
                      {activity.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen py-32 px-6 flex items-center justify-center bg-abc-white">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-abc-black">Services Sur-Mesure</h2>
            <p className="text-xl text-abc-black/60 max-w-2xl mx-auto">Des solutions concrètes pour accélérer votre croissance digitale.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { 
                title: 'Site vitrine', 
                desc: 'Design moderne et responsive adapté à votre image',
                rotate: '-rotate-z-12',
                translate: 'translate-y-0',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-2m0 0l4-2m-4 2l-4-2M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3" />
                  </svg>
                )
              },
              { 
                title: 'Automatisation', 
                desc: 'Optimisez vos processus avec l\'intelligence artificielle',
                rotate: 'rotate-z-2',
                translate: 'translate-y-12',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              { 
                title: 'Full-Stack', 
                desc: 'Solutions complètes avec backend et base de données',
                rotate: '-rotate-z-6',
                translate: 'translate-y-0',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                )
              },
              { 
                title: 'SEO', 
                desc: 'Optimisation pour être visible sur Google',
                rotate: 'rotate-z-3',
                translate: 'translate-y-12',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                )
              }
            ].map((service) => (
              <div key={service.title} className={`relative group ${service.translate}`}>
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10 w-full px-8">
                  <div className={`bg-abc-white border-2 border-abc-blue rounded-2xl py-2 px-4 shadow-md transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1 ${service.rotate}`}>
                    <span className="text-abc-black font-bold text-lg block text-center truncate">{service.title}</span>
                  </div>
                </div>
                <div className="h-full pt-12 pb-10 px-8 rounded-[40px] border-2 border-abc-blue bg-abc-white shadow-xl transition-all duration-300 group-hover:shadow-2xl flex flex-col items-center text-center space-y-6">
                  <div className="bg-abc-blue p-3 px-8 rounded-2xl text-abc-white shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                    {service.icon}
                  </div>
                  <p className="text-abc-black font-medium leading-relaxed max-w-[200px]">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="min-h-screen pt-20 px-6 flex items-center justify-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-abc-black mb-12 text-center">
            Portfolio
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-video bg-linear-to-br from-abc-blue to-abc-blue/60 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"></div>
            <div className="aspect-video bg-linear-to-br from-abc-black to-abc-black/60 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"></div>
            <div className="aspect-video bg-linear-to-br from-abc-blue/80 to-abc-black/80 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"></div>
            <div className="aspect-video bg-linear-to-br from-abc-black/40 to-abc-blue/40 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"></div>
          </div>
        </div>
      </section>

      {/* Processus Section */}
      <section id="processus" className="min-h-screen pt-20 px-6 flex items-center justify-center bg-abc-white/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-abc-black mb-12 text-center">
            Processus
          </h2>
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 text-abc-white rounded-full flex items-center justify-center font-bold text-xl shrink-0" style={{ backgroundColor: '#226DE0' }}>1</div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-abc-black">Découverte</h3>
                <p className="text-abc-black/80">Analyse de vos besoins et objectifs</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 text-abc-white rounded-full flex items-center justify-center font-bold text-xl shrink-0" style={{ backgroundColor: '#226DE0' }}>2</div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-abc-black">Conception</h3>
                <p className="text-abc-black/80">Design et architecture de la solution</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 text-abc-white rounded-full flex items-center justify-center font-bold text-xl shrink-0" style={{ backgroundColor: '#226DE0' }}>3</div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-abc-black">Développement</h3>
                <p className="text-abc-black/80">Création de votre projet avec les meilleures technologies</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 text-abc-white rounded-full flex items-center justify-center font-bold text-xl shrink-0" style={{ backgroundColor: '#226DE0' }}>4</div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-abc-black">Livraison</h3>
                <p className="text-abc-black/80">Déploiement et accompagnement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen pt-20 px-6 flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-abc-black mb-6">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-xl text-abc-black/80 mb-8">
            Contactez-moi pour discuter de vos besoins
          </p>
          <Button 
            href="#contact"
            icon={<img src="/arrow.svg" alt="arrow" className="w-8 h-8" />}
          >
            Prendre rendez-vous
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-abc-black text-abc-white py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-abc-white/60">
            © 2026 Antoine Bourdeau. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
