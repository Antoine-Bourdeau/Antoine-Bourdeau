function Process() {
  const steps = [
    {
      number: "1",
      title: "Brief",
      description: "Nous discutons ensemble de votre projet et de vos besoins"
    },
    {
      number: "2",
      title: "Conception",
      description: "Je crée une maquette de votre site web"
    },
    {
      number: "3",
      title: "Lancement",
      description: "Votre site est en ligne et prêt à être utilisé"
    }
  ];

  return (
    <section id="processus" className="py-20 px-6 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Badge */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 bg-[#226DE0] text-white px-4 py-2 rounded-full text-sm font-semibold">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 1L10.163 5.38L15 6.12L11.5 9.54L12.326 14.36L8 12.1L3.674 14.36L4.5 9.54L1 6.12L5.837 5.38L8 1Z" fill="currentColor"/>
            </svg>
            Processus
          </span>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          De l'idée au lancement en <span className="text-[#226DE0]">7 étapes.</span>
        </h2>

        {/* Subtitle */}
        <div className="mb-12">
          <span className="inline-block bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium">
            Comment se passe le process
          </span>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#226DE0] text-white rounded-full text-2xl font-bold mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
