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
        backgroundSize: '50px 50px'
      }}
    >
      <Navbar />
      
      {/* Accueil Section */}
      <section id="accueil" className="min-h-screen px-6 flex items-center justify-center">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Bienvenue chez Antoine Bourdeau
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Développeur web passionné, créateur de solutions digitales innovantes
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen pt-20 px-6 flex items-center justify-center bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4">Développement Web</h3>
              <p className="text-gray-600">Solutions web modernes et performantes</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4">Design UI/UX</h3>
              <p className="text-gray-600">Interfaces élégantes et intuitives</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4">Consulting</h3>
              <p className="text-gray-600">Accompagnement sur vos projets digitaux</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="min-h-screen pt-20 px-6 flex items-center justify-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Portfolio
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-video bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"></div>
            <div className="aspect-video bg-linear-to-br from-purple-500 to-pink-600 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"></div>
            <div className="aspect-video bg-linear-to-br from-green-500 to-teal-600 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"></div>
            <div className="aspect-video bg-linear-to-br from-orange-500 to-red-600 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"></div>
          </div>
        </div>
      </section>

      {/* Processus Section */}
      <section id="processus" className="min-h-screen pt-20 px-6 flex items-center justify-center bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Processus
          </h2>
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0" style={{ backgroundColor: '#226DE0' }}>1</div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Découverte</h3>
                <p className="text-gray-600">Analyse de vos besoins et objectifs</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0" style={{ backgroundColor: '#226DE0' }}>2</div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Conception</h3>
                <p className="text-gray-600">Design et architecture de la solution</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0" style={{ backgroundColor: '#226DE0' }}>3</div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Développement</h3>
                <p className="text-gray-600">Création de votre projet avec les meilleures technologies</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0" style={{ backgroundColor: '#226DE0' }}>4</div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Livraison</h3>
                <p className="text-gray-600">Déploiement et accompagnement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen pt-20 px-6 flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
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
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2026 Antoine Bourdeau. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
