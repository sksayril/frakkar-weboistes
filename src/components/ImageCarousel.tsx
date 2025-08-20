import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: "/img6.jpg",
      title: "Student Assembly",
      description: "Vibrant student community gathered for learning and growth"
    },
    {
      src: "/img8.jpg",
      title: "Faculty Excellence",
      description: "Our dedicated team of educators and staff members"
    },
    {
      src: "/img9.jpg",
      title: "Academic Leadership",
      description: "Experienced faculty committed to student success"
    },
    {
      src: "/img10.jpg",
      title: "Professional Team",
      description: "Skilled educators and administrators working together"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-green-600 mb-4">Campus Highlights</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our beautiful campus and world-class facilities
          </p>
        </motion.div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <img
                  src={images[currentIndex].src}
                  alt={images[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">{images[currentIndex].title}</h3>
                    <p className="text-lg md:text-xl opacity-90">{images[currentIndex].description}</p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Progress Bar */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-yellow-400"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
                key={currentIndex}
              />
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-yellow-400 scale-125' 
                    : 'bg-gray-400 hover:bg-gray-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-4">
            <span className="text-gray-600 font-medium">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              title: "Modern Infrastructure",
              description: "State-of-the-art facilities designed for optimal learning experience",
              icon: "🏢"
            },
            {
              title: "Expert Faculty",
              description: "Experienced educators committed to student success and development",
              icon: "👨‍🏫"
            },
            {
              title: "Career Support",
              description: "Comprehensive placement assistance and career guidance services",
              icon: "💼"
            }
          ].map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="text-4xl mb-4">{info.icon}</div>
              <h3 className="text-xl font-bold text-green-600 mb-4">{info.title}</h3>
              <p className="text-gray-700">{info.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
