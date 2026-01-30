function Services() {
  const services = [
    {
      tag: "Site vitrine",
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="12" fill="#226DE0" fillOpacity="0.1"/>
          <path d="M12 14C12 12.8954 12.8954 12 14 12H26C27.1046 12 28 12.8954 28 14V26C28 27.1046 27.1046 28 26 28H14C12.8954 28 12 27.1046 12 26V14Z" stroke="#226DE0" strokeWidth="2"/>
          <path d="M16 16H24M16 20H22M16 24H20" stroke="#226DE0" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "UX",
      description: "Design moderne et responsive adapté à votre image"
    },
    {
      tag: "Automatisation",
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="12" fill="#226DE0" fillOpacity="0.1"/>
          <path d="M20 12V28M20 12L16 16M20 12L24 16" stroke="#226DE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="20" cy="20" r="3" stroke="#226DE0" strokeWidth="2"/>
        </svg>
      ),
      title: "Automatisation",
      description: "Optimisez vos processus avec une intelligence artificielle"
    },
    {
      tag: "Full-Stack",
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="12" fill="#226DE0" fillOpacity="0.1"/>
          <rect x="14" y="14" width="12" height="12" rx="2" stroke="#226DE0" strokeWidth="2"/>
          <path d="M18 18L22 22M22 18L18 22" stroke="#226DE0" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Full-Stack",
      description: "Solutions complètes avec backend et base de données"
    },
    {
      tag: "SEO",
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="12" fill="#226DE0" fillOpacity="0.1"/>
          <circle cx="18" cy="18" r="5" stroke="#226DE0" strokeWidth="2"/>
          <path d="M22 22L27 27" stroke="#226DE0" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "SEO",
      description: "Optimisation pour être visible sur Google"
    }
  ];

  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-[#226DE0] hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="mb-4">
                <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                  {service.tag}
                </span>
              </div>
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
