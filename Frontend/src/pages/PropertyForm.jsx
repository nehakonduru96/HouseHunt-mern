import React, { useState } from 'react';
import houseImg from './home.jpg.jpg';
const PropertyForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    location: '',
    images: [],
    name: '',
    email: '',
    mobileNumber: '',
    aadhaar: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'images') {
      setFormData({
        ...formData,
        images: Array.from(files),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });

      // Validate email format
      if (name === 'email') {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) {
          setEmailError('Please enter a valid email address.');
        } else {
          setEmailError('');
        }
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      console.log(formData);
      setSuccessMessage('Submitted successfully!');
      setIsSubmitting(false);
    }, 1000); // Simulate delay for form submission
  };

  const isMobileNumberValid = formData.mobileNumber.length === 10;
  const isAadhaarValid = formData.aadhaar.length === 12;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#ffffff]">
      <div className="w-[1440px] p-8 bg-[#EFE9E1] rounded-lg shadow-lg border border-black">
        {/* Form Width increased to 1.5 times max-w-screen-lg, approximately 1440px */}
        <h2 className="text-3xl font-bold mb-6 text-[#322d29] font-lobster text-center">Post Your Property</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="col-span-2 bg-[#ffffff] p-6 rounded-lg shadow-lg border border-black grid md:grid-cols-2 gap-4">
            <div className="relative flex items-center justify-center">
              <img
                src={houseImg} 
                alt="Property GIF"
                className="w-full h-full object-contain rounded-md"
              />
            </div>
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2">
                  <div className="p-2">
                    <label htmlFor="name" className="block text-sm font-bold text-[#72383D] font-roboto">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`mt-1 block w-full border-3 border-[#72383D] rounded-l-full rounded-r-full shadow-sm p-2 ${
                        formData.name ? 'bg-[#D1E7FF]' : 'bg-[#EFE9E1]'
                      } focus:ring-[#72383D] focus:border-[#72383D] font-roboto`}
                    />
                  </div>
                  <div className="p-2">
                    <label htmlFor="email" className="block text-sm font-bold text-[#72383D] font-roboto">Email</label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`mt-1 block w-full border-3 border-[#72383D] rounded-l-full rounded-r-full shadow-sm p-2 ${
                          formData.email ? 'bg-[#D1E7FF]' : 'bg-[#EFE9E1]'
                        } focus:ring-[#72383D] focus:border-[#72383D] font-roboto`}
                      />
                      {isEmailValid && (
                        <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <svg className="h-6 w-6 text-[#72383D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </span>
                      )}
                    </div>
                    {emailError && (
                      <p className="mt-1 text-sm text-red-600 font-roboto">{emailError}</p>
                    )}
                  </div>
                  <div className="relative col-span-2 p-2">
                    <label htmlFor="mobileNumber" className="block text-sm font-bold text-[#72383D] font-roboto">Mobile Number</label>
                    <div className="relative">
                      <input
                        type="tel"
                        id="mobileNumber"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        className={`mt-1 block w-full border-3 border-[#72383D] rounded-l-full rounded-r-full shadow-sm p-2 ${
                          formData.mobileNumber ? 'bg-[#D1E7FF]' : 'bg-[#EFE9E1]'
                        } focus:ring-[#72383D] focus:border-[#72383D] font-roboto`}
                      />
                      {isMobileNumberValid && (
                        <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none" style={{ top: '0.5rem' }}>
                          <svg className="h-6 w-6 text-[#72383D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="relative col-span-2 p-2">
                    <label htmlFor="aadhaar" className="block text-sm font-bold text-[#72383D] font-roboto">Aadhaar Number</label>
                    <div className="relative">
                      <input
                        type="text"
                        id="aadhaar"
                        name="aadhaar"
                        value={formData.aadhaar}
                        onChange={handleChange}
                        className={`mt-1 block w-full border-3 border-[#72383D] rounded-l-full rounded-r-full shadow-sm p-2 ${
                          formData.aadhaar ? 'bg-[#D1E7FF]' : 'bg-[#EFE9E1]'
                        } focus:ring-[#72383D] focus:border-[#72383D] font-roboto`}
                      />
                      {isAadhaarValid && (
                        <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none" style={{ top: '0.5rem' }}>
                          <svg className="h-6 w-6 text-[#72383D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="p-2">
                    <label htmlFor="title" className="block text-sm font-bold text-[#72383D] font-roboto">Title</label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      className={`mt-1 block w-full border-3 border-[#72383D] rounded-l-full rounded-r-full shadow-sm p-2 ${
                        formData.title ? 'bg-[#D1E7FF]' : 'bg-[#EFE9E1]'
                      } focus:ring-[#72383D] focus:border-[#72383D] font-roboto`}
                    />
                  </div>
                  <div className="p-2">
                    <label htmlFor="description" className="block text-sm font-bold text-[#72383D] font-roboto">Description</label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      className={`mt-1 block w-full border-3 border-[#72383D] rounded-l-full rounded-r-full shadow-sm p-2 ${
                        formData.description ? 'bg-[#D1E7FF]' : 'bg-[#EFE9E1]'
                      } focus:ring-[#72383D] focus:border-[#72383D] font-roboto`}
                    />
                  </div>
                  <div className="p-2">
                    <label htmlFor="price" className="block text-sm font-bold text-[#72383D] font-roboto">Price</label>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      className={`mt-1 block w-full border-3 border-[#72383D] rounded-l-full rounded-r-full shadow-sm p-2 ${
                        formData.price ? 'bg-[#D1E7FF]' : 'bg-[#EFE9E1]'
                      } focus:ring-[#72383D] focus:border-[#72383D] font-roboto`}
                    />
                  </div>
                  <div className="p-2">
                    <label htmlFor="location" className="block text-sm font-bold text-[#72383D] font-roboto">Location</label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className={`mt-1 block w-full border-3 border-[#72383D] rounded-l-full rounded-r-full shadow-sm p-2 ${
                        formData.location ? 'bg-[#D1E7FF]' : 'bg-[#EFE9E1]'
                      } focus:ring-[#72383D] focus:border-[#72383D] font-roboto`}
                    />
                  </div>
                  <div className="p-2">
                    <label htmlFor="images" className="block text-sm font-bold text-[#72383D] font-roboto">Images</label>
                    <input
                      type="file"
                      id="images"
                      name="images"
                      onChange={handleChange}
                      multiple
                      className="mt-1 block w-full border-3 border-[#72383D] rounded-l-full rounded-r-full shadow-sm p-2 focus:ring-[#72383D] focus:border-[#72383D] bg-[#EFE9E1] font-roboto"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className={`w-full py-2 px-4 rounded-md shadow-sm focus:ring-[#72383D] focus:border-[#72383D] ${
                      isSubmitting ? 'bg-[#72383D]' : 'bg-[#72383D] hover:bg-[#023020] text-white'
                    } font-roboto`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </form>
              {successMessage && (
                <div className="mt-4 text-[#72383D] font-medium text-center font-roboto">
                  {successMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyForm; 