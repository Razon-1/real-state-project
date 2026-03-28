import React, { useState } from 'react';

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: '/admin/uploads/page/home-slider/1761742149J5lyU.jpg',
      title: 'Redefining Happiness',
      subtitle: ''
    },
    {
      id: 2,
      image: '/admin/uploads/page/home-slider/1761742149RpLRT.jpg',
      title: 'Boulevard that makes your heart sing',
      subtitle: ''
    },
    {
      id: 3,
      image: '/admin/uploads/page/home-slider/1761834315HOtcT.jpg',
      title: 'oasis of comfort',
      subtitle: ''
    }
  ];

  return (
    <section className="relative mt-16 sm:mt-20 h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen">
      {/* Slider */}
      <div className="relative h-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                <div className="text-white max-w-3xl">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase mb-2 sm:mb-4 animate-fade-in leading-tight">
                    {slide.title}
                  </h1>
                  {slide.subtitle && (
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl uppercase">{slide.subtitle}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-24 sm:bottom-28 md:bottom-32 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white bg-opacity-50'
            }`}
          ></button>
        ))}
      </div>

      {/* Bottom Menu */}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 lg:gap-10 py-3 sm:py-4 md:py-5 text-white text-xs sm:text-sm">
            <li className="flex items-center gap-1 sm:gap-2">
              <img src="/themes/cms/assets/images/static/project.svg" alt="" className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>
                <a href="/projects" className="hover:text-gray-300 transition">Explore Projects</a>
              </span>
              <img src="/themes/cms/assets/images/static/caret.svg" alt="" className="h-1.5 w-1.5 sm:h-2 sm:w-2" />
            </li>
            <li>
              <a href="/projects/ongoing" className="hover:text-gray-300 transition">Ongoing</a>
            </li>
            <li>
              <a href="/projects/completed" className="hover:text-gray-300 transition">Handed Over</a>
            </li>
            <li>
              <a href="/projects/upcoming" className="hover:text-gray-300 transition">Upcoming</a>
            </li>
            <li>
              <a href="/projects/ready" className="hover:text-gray-300 transition">Ready</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BannerSlider;
