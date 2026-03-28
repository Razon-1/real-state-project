import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h3 className="text-primary text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3">About Us</h3>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Redefining your standard of living
            </h2>
            <p className="text-sm sm:text-base text-gray-700 text-justify mb-3 sm:mb-4 leading-relaxed">
              Edison Group was founded in 2009 with the aim to enhance aspects of life for people by providing powerful brands, reliable products and a wide range of services. It ventured into the real estate sector in 2015 with its "dream team" dedicated to merge value and innovation in the evolving real estate sector of Bangladesh. Through considerable focus on design, structural dimension, and feasibility in the sense of space and resource conservation; as well as environmental soundness; we deliver you optimum support in residential and commercial accommodation.
            </p>
            <p className="text-sm sm:text-base text-gray-700 text-justify mb-6 sm:mb-8 leading-relaxed">
              Conjoining the expertise of different fields to develop and bring in the quintessence of contemporary lifestyle, we provide distinguished services and strictly maintain project handover deadlines. We assure you to be your most reliable developer in Dhaka in terms of integrity and credibility.
            </p>
            <a 
              href="/about-us" 
              className="inline-block bg-primary text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded uppercase text-xs sm:text-sm font-semibold hover:bg-blue-900 transition"
            >
              Learn More
            </a>
          </div>

          {/* Image with Video */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative overflow-hidden rounded-lg shadow-2xl group">
              <img 
                src="/admin/uploads/page/redefining-your-standard-of-living/855x690/1680672143UxU6f_l.jpg" 
                alt="Redefining Your Standard of Living"
                className="w-full h-auto transform group-hover:scale-105 transition duration-500"
              />
              <a 
                href="https://www.youtube.com/watch?v=BU_s5NhMLvc"
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-red-600 rounded-full animate-ping opacity-75"></div>
                  <div className="relative bg-red-600 rounded-full p-4 sm:p-5 md:p-6 hover:bg-red-700 transition">
                    <svg 
                      className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white ml-1" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
