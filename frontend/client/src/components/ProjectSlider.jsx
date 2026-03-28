import React from 'react';

const ProjectSlider = () => {
  const projects = [
    {
      id: 1,
      name: 'Edison Verona',
      location: 'Uttara',
      image: '/admin/uploads/product/edison-verona/555x900/1747801943WqsLj_l.jpg',
      description: 'Edison Verona stands as a beacon of refined living, where the romance of design and the innovation of modern architecture come together to create a space that feels both aspirational and welcoming',
      url: 'https://verona.edisonrealestatebd.com/'
    },
    {
      id: 2,
      name: 'Edison Desdemona',
      location: 'Bashundhara R/A',
      image: '/admin/uploads/product/edison-desdemona/555x900/1667716974UIMnN_l.jpg',
      description: 'A lively structure, full of exclusivity. An Edifice that encourages you to live your life in the moment.',
      url: '/projects/edison-desdemona'
    },
    {
      id: 3,
      name: 'Edison Iris',
      location: 'Bashundhara R/A',
      image: '/admin/uploads/product/edison-iris/555x900/1709632888Teupg_l.jpeg',
      description: 'Homes where modern design meets everyday living, offering spaces that are bright and naturally welcoming.',
      url: '/projects/edison-iris'
    },
    {
      id: 4,
      name: 'Edison Luciana',
      location: 'Bashundhara R/A',
      image: '/admin/uploads/product/edison-Luciana/555x900/1744112780wZ3r9_l.jpg',
      description: 'Nestled in strategic location of Bashundhara Residential Area, Dhaka; Edison Luciana stands as a testament to modern and thoughtful design.',
      url: '/projects/edison-Luciana'
    },
    {
      id: 5,
      name: 'Edison Camillo',
      location: 'Bashundhara R/A',
      image: '/admin/uploads/product/edison-camillo/555x900/1739188775N1pPD_l.jpg',
      description: 'Edison Camillo, a one-of-a-kind architectural story unfolding in every detail.',
      url: '/projects/edison-camillo'
    },
    {
      id: 6,
      name: 'Edison Portia',
      location: 'Bashundhara R/A',
      image: '/admin/uploads/product/edison-Portia/555x900/17168828187babc_l.jpg',
      description: 'Edison Portia rises as a subtle dialogue between space and thought.',
      url: '/projects/edison-Portia'
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-end mb-8 sm:mb-10 md:mb-12">
          <div>
            <h4 className="text-primary text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3">Featured projects</h4>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Bespoke Enclaves with finesse <br className="hidden sm:block" />in architecture and design
            </h2>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-lg h-80 sm:h-96 cursor-pointer"
            >
              <a href={project.url} className="block h-full">
                <div
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition duration-500"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition duration-300">
                  <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">{project.name}</h3>
                  <h4 className="text-xs sm:text-sm uppercase mb-2 sm:mb-3 text-gray-300">{project.location}</h4>
                  <p className="text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition duration-300 mb-3 sm:mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <span className="inline-block bg-primary px-4 sm:px-6 py-1.5 sm:py-2 rounded text-xs sm:text-sm uppercase font-semibold opacity-0 group-hover:opacity-100 transition duration-300">
                    Explore
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSlider;
