import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    timeSlot: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Meeting scheduled:', formData);
    setShowSuccess(true);
    setFormData({
      fullName: '',
      phoneNumber: '',
      emailAddress: '',
      timeSlot: ''
    });
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img 
                src="/themes/cms/assets/images/static/appointment.jpg" 
                alt="Schedule Meeting"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Form */}
          <div className="order-1 lg:order-2 bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-lg shadow-xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">Schedule a meeting</h2>
            
            {showSuccess && (
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm sm:text-base">
                ✓ Meeting scheduled successfully!
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
              <div>
                <input 
                  type="text" 
                  name="fullName"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  placeholder="Full Name*"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <input 
                  type="tel" 
                  name="phoneNumber"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  placeholder="Phone Number*"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <input 
                  type="email" 
                  name="emailAddress"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  placeholder="Email Address"
                  value={formData.emailAddress}
                  onChange={handleChange}
                />
              </div>

              <div>
                <select 
                  name="timeSlot"
                  value={formData.timeSlot}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition appearance-none bg-white"
                  required
                >
                  <option value="">Select a time</option>
                  <option value="10AM">10AM</option>
                  <option value="12PM">12PM</option>
                  <option value="2PM">2PM</option>
                  <option value="4PM">4PM</option>
                  <option value="6PM">6PM</option>
                </select>
              </div>

              <button 
                type="submit" 
                className="w-full bg-primary text-white py-3 sm:py-4 rounded-lg uppercase text-sm sm:text-base font-semibold hover:bg-blue-900 transition transform hover:scale-105 duration-200"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
