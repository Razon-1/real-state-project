import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Logo */}
          <div className="w-24 sm:w-28 md:w-32">
            <a href="/">
              <img src="/assets/images/static/logo.svg" alt="Logo" className="h-8 sm:h-10 md:h-11 w-full" />
            </a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="/" className="text-sm uppercase text-gray-800 hover:text-primary transition">Home</a>
            
            <div className="relative group">
              <a href="/about-us" className="text-sm uppercase text-gray-800 hover:text-primary transition">About</a>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <a href="/about-us/team" className="block px-4 py-2 text-sm hover:bg-gray-100">Our Team</a>
                <a href="/about-us/privacy-policy" className="block px-4 py-2 text-sm hover:bg-gray-100">Privacy Policy</a>
                <a href="https://edisonrealestatebd.com/royalclub/" target="_blank" rel="noreferrer" className="block px-4 py-2 text-sm hover:bg-gray-100">Edison Royal Club</a>
              </div>
            </div>

            <div className="relative group">
              <a href="/projects" className="text-sm uppercase text-gray-800 hover:text-primary transition">Projects</a>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <a href="/projects/ongoing" className="block px-4 py-2 text-sm hover:bg-gray-100">Ongoing</a>
                <a href="/projects/upcoming" className="block px-4 py-2 text-sm hover:bg-gray-100">Upcoming</a>
                <a href="/projects/completed" className="block px-4 py-2 text-sm hover:bg-gray-100">Handed Over</a>
                <a href="/projects/ready" className="block px-4 py-2 text-sm hover:bg-gray-100">Ready</a>
              </div>
            </div>

            <a href="/blog" className="text-sm uppercase text-gray-800 hover:text-primary transition">Blog</a>

            <div className="relative group">
              <button className="text-sm uppercase text-gray-800 hover:text-primary transition">Gallery</button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <a href="/newsletter" className="block px-4 py-2 text-sm hover:bg-gray-100">Newsletter</a>
                <a href="/image-gallery" className="block px-4 py-2 text-sm hover:bg-gray-100">Image Gallery</a>
                <a href="/video-gallery" className="block px-4 py-2 text-sm hover:bg-gray-100">Video Gallery</a>
              </div>
            </div>

            <a href="/career" className="text-sm uppercase text-gray-800 hover:text-primary transition">Career</a>

            <div className="relative group">
              <a href="/contact-us" className="text-sm uppercase text-gray-800 hover:text-primary transition">Contact</a>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <button data-suggestion-trigger className="block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left">Suggestion</button>
              </div>
            </div>

            <a href="/landowner" className="text-sm uppercase text-gray-800 hover:text-primary transition">Landowner</a>
          </nav>

          {/* Call Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:16760" className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded hover:bg-blue-900 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="18.64" height="20" viewBox="0 0 18.64 20">
                <path d="M17.424,13.92c-1.208-1.033-2.434-1.659-3.628-.628l-.713.624c-.521.453-1.491,2.568-5.239-1.744S6.328,7.2,6.85,6.747l.716-.624c1.187-1.034.739-2.336-.117-3.676l-.517-.812C6.072.3,5.136-.58,3.946.453L3.3,1.015a6.037,6.037,0,0,0-2.353,4C.52,7.849,1.874,11.1,4.977,14.669S11.109,20.031,13.983,20a6.053,6.053,0,0,0,4.282-1.773l.645-.563c1.187-1.032.45-2.082-.759-3.118Z" transform="translate(-0.872 0)" fill="#f8f8f8"></path>
              </svg>
              16760
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1.5 cursor-pointer p-2 hover:bg-gray-100 rounded transition"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-gray-800 transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-800 transition-opacity ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-800 transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden pb-4 animate-fade-in">
            <nav className="flex flex-col space-y-1">
              <a href="/" className="text-sm uppercase text-gray-800 py-3 px-2 hover:bg-gray-100 rounded transition">Home</a>
              <a href="/about-us" className="text-sm uppercase text-gray-800 py-3 px-2 hover:bg-gray-100 rounded transition">About</a>
              <a href="/projects" className="text-sm uppercase text-gray-800 py-3 px-2 hover:bg-gray-100 rounded transition">Projects</a>
              <a href="/blog" className="text-sm uppercase text-gray-800 py-3 px-2 hover:bg-gray-100 rounded transition">Blog</a>
              <a href="/career" className="text-sm uppercase text-gray-800 py-3 px-2 hover:bg-gray-100 rounded transition">Career</a>
              <a href="/contact-us" className="text-sm uppercase text-gray-800 py-3 px-2 hover:bg-gray-100 rounded transition">Contact</a>
              <a href="/landowner" className="text-sm uppercase text-gray-800 py-3 px-2 hover:bg-gray-100 rounded transition">Landowner</a>
              <a href="tel:16760" className="text-sm uppercase text-white bg-primary py-3 px-2 rounded hover:bg-blue-900 transition text-center mt-2">Call 16760</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
