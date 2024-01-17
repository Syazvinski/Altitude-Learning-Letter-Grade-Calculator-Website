import React, { useState, useEffect } from 'react';
import './App.css';

const images = [
  'image_1.png',
  'image_2.png',
  'image_3.png',
  'image_4.png',
];

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleNext = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-[#2789D8] text-white font-inter min-h-screen flex flex-col items-center justify-center">
      <div className="text-center mt-20">
        <h1 className="text-6xl font-bold mb-2">Get letter grades in Altitude Learning</h1>
        <p className="text-xl">for students of The Mount Vernon School</p>
      </div>

      {/* Carousel */}
      <div className="my-10 w-full flex justify-center items-center">
        <div className="hover:bg-gray-300 rounded-full p-2 inline-flex items-center justify-center" style={{ transition: 'background-color 0.3s', marginRight: '20px' }}>
          <button onClick={handlePrev} style={{ fontSize: '24px' }}>&laquo;</button>
        </div>
        <img src={process.env.PUBLIC_URL + '/images/' + images[currentImageIndex]} alt="Carousel" className="rounded" style={{ maxWidth: '45vw', maxHeight: '45vw', border: '5px solid #FFF' }} />
        <div className="hover:bg-gray-300 rounded-full p-2 inline-flex items-center justify-center" style={{ transition: 'background-color 0.3s', marginLeft: '20px' }}>
          <button onClick={handleNext} style={{ fontSize: '24px' }}>&raquo;</button>
        </div>
      </div>
      {/* Image Previews */}
      <div className="flex justify-center space-x-2">
        {images.map((image, index) => (
          <img key={index} src={process.env.PUBLIC_URL + '/images/' + image} alt="Preview" onClick={() => handleImageClick(index)} style={{ width: '50px', height: 'auto', cursor: 'pointer' }} />
        ))}
      </div>

      {/* Explanation */}
      <p className="text-center text-xl mt-10">Click on the button below to be taken to the Chrome Web Store to install:</p>

      <div className="flex flex-col items-center">
        {/* Install Button */}
        <a href="https://chromewebstore.google.com/detail/mount-vernon-school-altit/npejnoaeodlhhllfjdnddllhlegapdeg?hl=en">
          <img src={process.env.PUBLIC_URL + '/images/webstore_button.png'} alt="Install on Chrome Web Store" className="mt-4 hover:opacity-80 transition duration-200" style={{ width: '200px', height: 'auto', borderRadius: '10px' }} />
        </a>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 text-xs text-white mt-2 max-w-[200px] text-center whitespace-nowrap">
          <p>Open sourced on GitHub:</p>
          <a href="https://github.com/Syazvinski/Altitude-Learning-Letter-Grade-Calculator-Mount-Vernon" target="_blank" rel="noopener noreferrer" className="underline text-blue-200">Extension Code</a>
          <a href="https://github.com/Syazvinski/Altitude-Learning-Letter-Grade-Calculator-Website" target="_blank" rel="noopener noreferrer" className="underline text-blue-200">Website Code</a>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto py-4 whitespace-nowrap flex flex-col justify-center items-center">
        <p className="text-sm mb-2">made because you shouldn't need a chart to know your grade</p>
        <div className="flex justify-center items-center space-x-4">
          <p className="mr-2">Made by former student, Stephan Yazvinski. &copy; 2024</p>
          <a href="https://www.linkedin.com/in/stephan-yazvinski-2086771b8/" target="_blank" rel="noopener noreferrer" className="underline text-blue-200">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default App;