import React, { useState } from 'react';

const SuggestionModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    message: '',
    name: '',
    phone: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Suggestion submitted:', formData);
    setShowSuccess(true);
    setFormData({ message: '', name: '', phone: '', email: '' });
    setTimeout(() => {
      setShowSuccess(false);
      setIsOpen(false);
    }, 2000);
  };

  // Listen for suggestion button clicks
  React.useEffect(() => {
    const handleSuggestionClick = (e) => {
      if (e.target.closest('[data-suggestion-trigger]')) {
        e.preventDefault();
        setIsOpen(true);
      }
    };
    document.addEventListener('click', handleSuggestionClick);
    return () => document.removeEventListener('click', handleSuggestionClick);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1050] flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-end mb-4">
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
              <img 
                src="/themes/cms/assets/images/static/modal-close.svg" 
                alt="Close" 
                className="w-8 h-8"
              />
            </button>
          </div>

          {/* Body */}
          <div className="px-4">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Fill Up the Information
            </h2>

            {showSuccess && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
                ✓ Suggestion submitted successfully!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <textarea 
                  name="message" 
                  rows="5" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none" 
                  placeholder="Write your message here*"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <div>
                <input 
                  type="text" 
                  name="name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition" 
                  placeholder="Full Name*"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <input 
                  type="tel" 
                  name="phone" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition" 
                  placeholder="Phone Number*"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <input 
                  type="email" 
                  name="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition" 
                  placeholder="Email Address*"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <button 
                  type="submit" 
                  className="w-full bg-primary text-white py-4 rounded-lg uppercase font-semibold hover:bg-blue-900 transition transform hover:scale-105 duration-200"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestionModal;
