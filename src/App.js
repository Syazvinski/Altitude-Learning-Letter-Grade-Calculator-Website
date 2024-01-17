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
    <div className="bg-[#2789D8] text-white font-inter min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center mt-10 md:mt-20">
        <h1 className="text-3xl md:text-6xl font-bold mb-2">Get letter grades in Altitude Learning</h1>
        <p className="text-lg md:text-xl">for students of The Mount Vernon School</p>
      </div>

      {/* Carousel */}
      <div className="my-10 w-full flex justify-center items-center">
        <div className="hover:bg-gray-300 rounded-full p-2 inline-flex items-center justify-center transition duration-300 mx-2">
          <button onClick={handlePrev} className="text-2xl md:text-3xl">&laquo;</button>
        </div>
        <img src={process.env.PUBLIC_URL + '/images/' + images[currentImageIndex]} alt="Carousel" className="rounded border-4 border-white max-w-[80vw] md:max-w-[40vw] max-h-[40vw]" />
        <div className="hover:bg-gray-300 rounded-full p-2 inline-flex items-center justify-center transition duration-300 mx-2">
          <button onClick={handleNext} className="text-2xl md:text-3xl">&raquo;</button>
        </div>
      </div>

      {/* Image Previews */}
      <div className="flex justify-center space-x-2 mb-16">
        {images.map((image, index) => (
          <img key={index} src={process.env.PUBLIC_URL + '/images/' + image} alt="Preview" onClick={() => handleImageClick(index)} className="w-12 h-auto cursor-pointer" />
        ))}
      </div>

      {/* Explanation */}
      <p className="text-center text-lg md:text-xl mb-4">Click on the button below to be taken to the Chrome Web Store to install:</p>

      <div className="flex flex-col items-center mb-4">
        {/* Install Button */}
        <a href="https://chromewebstore.google.com/detail/mount-vernon-school-altit/npejnoaeodlhhllfjdnddllhlegapdeg?hl=en">
          <img src={process.env.PUBLIC_URL + '/images/webstore_button.png'} alt="Install on Chrome Web Store" className="mt-4 hover:opacity-80 transition duration-200" style={{ width: '200px', height: 'auto', borderRadius: '10px' }} />
        </a>

        {/* GitHub Links */}
        <div className="text-xs text-center mt-2">
          <p>Open sourced on GitHub:</p>
          <div className="flex flex-wrap justify-center items-center space-x-2">
            <a href="https://github.com/Syazvinski/Altitude-Learning-Letter-Grade-Calculator-Mount-Vernon" target="_blank" rel="noopener noreferrer" className="underline text-blue-200">Extension Code</a>
            <a href="https://github.com/Syazvinski/Altitude-Learning-Letter-Grade-Calculator-Website" target="_blank" rel="noopener noreferrer" className="underline text-blue-200">Website Code</a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto py-4 flex flex-col justify-center items-center">
        <p className="text-sm mb-2 text-center">made because you shouldn't need a chart to know your grade</p>
        <div className="flex justify-center items-center space-x-4">
          <p className="text-center">Made by former student, Stephan Yazvinski. &copy; 2024</p>
          <a href="https://www.linkedin.com/in/stephan-yazvinski-2086771b8/" target="_blank" rel="noopener noreferrer" className="underline text-blue-200">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
