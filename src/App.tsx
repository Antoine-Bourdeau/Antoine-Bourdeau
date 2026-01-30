import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Contact />
      
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
