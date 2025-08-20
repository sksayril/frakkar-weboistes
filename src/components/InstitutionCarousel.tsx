import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Users, GraduationCap, BookOpen, Award } from 'lucide-react';

const InstitutionCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const institutions = [
    {
      name: "School of Engineering & Technology",
      programs: ["Computer Science", "Electronics", "Mechanical", "Civil"],
      students: 1200,
      faculty: 45,
      image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      description: "Leading engineering education with state-of-the-art laboratories and industry partnerships.",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "School of Business Management",
      programs: ["MBA", "BBA", "Commerce", "Economics"],
      students: 800,
      faculty: 28,
      image: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      description: "Nurturing future business leaders with comprehensive management education.",
      color: "from-green-500 to-green-600"
    },
    {
      name: "School of Arts & Sciences",
      programs: ["English", "History", "Mathematics", "Physics", "Chemistry"],
      students: 600,
      faculty: 32,
      image: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      description: "Fostering critical thinking and research in liberal arts and sciences.",
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "Vocational Training Center",
      programs: ["Computer Skills", "Tailoring", "Handicrafts", "Agriculture"],
      students: 400,
      faculty: 15,
      image: "https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      description: "Practical skill development programs for employment readiness.",
      color: "from-orange-500 to-orange-600"
    },
    {
      name: "School of Medicine & Health Sciences",
      programs: ["MBBS", "Nursing", "Pharmacy", "Physiotherapy"],
      students: 300,
      faculty: 25,
      image: "https://images.pexels.com/photos/3376790/pexels-photo-3376790.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      description: "Comprehensive medical education with modern healthcare facilities.",
      color: "from-red-500 to-red-600"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % institutions.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, [institutions.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % institutions.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + institutions.length) % institutions.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-green-600 mb-4">Our Institutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse range of educational institutions and programs
          </p>
        </motion.div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="relative h-[600px] md:h-[700px] overflow-hidden rounded-2xl shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <div className="relative h-full">
                  <img
                    src={institutions[currentIndex].image}
                    alt={institutions[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent`}></div>
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="max-w-4xl"
                    >
                      <h3 className="text-3xl md:text-4xl font-bold mb-4">{institutions[currentIndex].name}</h3>
                      <p className="text-lg md:text-xl opacity-90 mb-6">{institutions[currentIndex].description}</p>
                      
                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-6 mb-6">
                        <div className="text-center">
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="bg-yellow-400 text-green-800 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2"
                          >
                            <Users className="h-6 w-6" />
                          </motion.div>
                          <p className="text-2xl font-bold">{institutions[currentIndex].students}</p>
                          <p className="text-sm opacity-80">Students</p>
                        </div>

                        <div className="text-center">
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="bg-yellow-400 text-green-800 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2"
                          >
                            <GraduationCap className="h-6 w-6" />
                          </motion.div>
                          <p className="text-2xl font-bold">{institutions[currentIndex].faculty}</p>
                          <p className="text-sm opacity-80">Faculty</p>
                        </div>

                        <div className="text-center">
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="bg-yellow-400 text-green-800 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2"
                          >
                            <BookOpen className="h-6 w-6" />
                          </motion.div>
                          <p className="text-2xl font-bold">{institutions[currentIndex].programs.length}</p>
                          <p className="text-sm opacity-80">Programs</p>
                        </div>
                      </div>

                      {/* Programs */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-yellow-400">Programs Offered:</h4>
                        <div className="flex flex-wrap gap-2">
                          {institutions[currentIndex].programs.slice(0, 4).map((program, i) => (
                            <motion.span
                              key={i}
                              whileHover={{ scale: 1.05 }}
                              className="bg-yellow-400 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {program}
                            </motion.span>
                          ))}
                          {institutions[currentIndex].programs.length > 4 && (
                            <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                              +{institutions[currentIndex].programs.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-yellow-400 text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-200"
                      >
                        Learn More
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 z-10"
              aria-label="Previous institution"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 z-10"
              aria-label="Next institution"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            {/* Progress Bar */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-2 bg-white/30 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-yellow-400"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 6, ease: "linear" }}
                key={currentIndex}
              />
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {institutions.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-yellow-400 scale-125' 
                    : 'bg-gray-400 hover:bg-gray-600'
                }`}
                aria-label={`Go to institution ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-4">
            <span className="text-gray-600 font-medium">
              {currentIndex + 1} / {institutions.length}
            </span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-8 mt-16">
          {[
            { icon: Users, title: "Total Students", value: "3,300+", color: "from-blue-500 to-blue-600" },
            { icon: GraduationCap, title: "Faculty Members", value: "145+", color: "from-green-500 to-green-600" },
            { icon: BookOpen, title: "Programs", value: "25+", color: "from-purple-500 to-purple-600" },
            { icon: Award, title: "Years of Excellence", value: "15+", color: "from-orange-500 to-orange-600" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className={`bg-gradient-to-r ${stat.color} rounded-2xl p-6 shadow-lg text-center text-white`}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="bg-white/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
              >
                <stat.icon className="h-8 w-8" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-2">{stat.value}</h3>
              <p className="text-white/90">{stat.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstitutionCarousel;
