function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-[#226DE0] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 1L10.163 5.38L15 6.12L11.5 9.54L12.326 14.36L8 12.1L3.674 14.36L4.5 9.54L1 6.12L5.837 5.38L8 1Z" fill="currentColor"/>
            </svg>
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Discutons de votre projet
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Parlons ensemble de vos besoins et de comment je peux vous aider
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#226DE0] focus:outline-none transition-colors"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#226DE0] focus:outline-none transition-colors"
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#226DE0] focus:outline-none transition-colors resize-none"
                placeholder="Parlez-moi de votre projet..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#226DE0] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1a5bc0] transition-all hover:shadow-lg inline-flex items-center justify-center gap-2"
            >
              Envoyer le message
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
