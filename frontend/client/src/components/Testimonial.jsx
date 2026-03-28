import React, { useState } from 'react';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Farzana Khalid',
      role: 'Apartment Owner',
      title: 'Cherished Moments from Our Homeowner',
      description: 'Hear from Edison Adelia homeowners as they share their stories about their homes. Their experiences inspire us to keep providing the best for everyone we serve.',
      image: '/admin/uploads/page/testimonial/705x480/1732089604IgY98_l.jpg',
      videoUrl: 'https://youtu.be/LoH98RHthY4?si=Y2KEtSjYaSaTpB0b'
    },
    {
      id: 2,
      name: 'A.S.M Faizullah & AL Batul Sabera',
      role: 'Apartment Owner',
      title: 'Heartfelt Tales of Our Happy Homeowners',
      description: 'Hear from Edison Adelia homeowners as they share their stories about their homes. Their experiences inspire us to keep providing the best for everyone we serve.',
      image: '/admin/uploads/page/testimonial/705x480/1732089932ZOPHr_l.jpg',
      videoUrl: 'https://youtu.be/8Io_q6Bgijg?si=2v9pg1ZSFSY5bPzt'
    },
    {
      id: 3,
      name: 'Dr. Abu Naser Muhammad',
      role: 'Apartment Owner',
      title: 'Homeowner\'s Reflections on Apartments',
      description: 'Tune in to what homeowners have to say about their experience with Edison Real Estate.',
      image: '/admin/uploads/page/testimonial/705x480/1708428820jMUXM_l.jpeg',
      videoUrl: 'https://youtu.be/5a3gNCIkxls'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <h4 className="text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3 text-gray-300">Testimonial</h4>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            What customers <br className="hidden sm:block" /> say about us
          </h2>
        </div>

        {/* Testimonial Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Image with Video */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img 
                src={current.image} 
                alt={current.name}
                className="w-full h-auto"
              />
              <a 
                href={current.videoUrl}
                target="_blank"
                rel="noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition"
              >
                <div className="bg-white rounded-full p-5 hover:bg-gray-100 transition">
                  <svg className="w-8 h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <svg className="w-10 h-8 sm:w-12 sm:h-10 mb-4 sm:mb-6 text-gray-300" fill="currentColor" viewBox="0 0 46.75 40">
              <g transform="translate(-674.623 -3249)">
                <path d="M411.174,390.694v20.047h19.953V390.694H421.1q.374-9.6,10.023-9.93V370.741Q411.174,373.037,411.174,390.694Z" transform="translate(263.449 2878.259)"></path>
                <path d="M515.432,380.765V370.741q-19.953,2.3-19.953,19.953v20.047h19.953V390.694H505.409Q505.783,381.093,515.432,380.765Z" transform="translate(205.941 2878.259)"></path>
              </g>
            </svg>
            
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{current.title}</h3>
            <p className="text-sm sm:text-base text-gray-200 mb-4 sm:mb-6 leading-relaxed">{current.description}</p>
            <p className="font-bold text-base sm:text-lg">{current.name}</p>
            <p className="text-gray-300 text-xs sm:text-sm">{current.role}</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center lg:justify-end gap-3 sm:gap-4 mt-8 sm:mt-10 md:mt-12">
          <button 
            onClick={prevTestimonial}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-primary transition"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextTestimonial}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-primary transition"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition ${
                index === currentIndex ? 'bg-white w-8' : 'bg-white bg-opacity-50'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
