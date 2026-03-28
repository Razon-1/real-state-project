import React from 'react';

const VideoSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-lg shadow-2xl">
          <div 
            className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] bg-cover bg-center"
            style={{background: "url('/admin/uploads/page/home-video/1170x500/1682834056o1Lm0_l.jpg')"}}
          >
            <a 
              href="https://youtu.be/qTQF9q21kOw?t=4"
              target="_blank"
              rel="noreferrer"
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-40 transition group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-red-600 rounded-full animate-ping opacity-75"></div>
                <div className="relative bg-red-600 rounded-full p-5 sm:p-6 md:p-8 hover:bg-red-700 transition transform group-hover:scale-110 duration-300">
                  <svg 
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white ml-1" 
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
    </section>
  );
};

export default VideoSection;
