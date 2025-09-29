import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, Target, Users, Heart, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const Mission = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showAllImages, setShowAllImages] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const missionPoints = [
    "Improve access to quality, affordable education",
    "Help students develop skills for the workforce",
    "Improve social welfare and health programmes"
  ];

  // Fixed image array with unique images and better descriptions
  const allImages = [
    {
      src: "/img12.jpg",
      alt: "Leadership addressing community",
      title: "Leadership Address",
      description: "Our leaders addressing the community and sharing our vision for educational excellence and social welfare."
    },
    {
      src: "/img13.jpg",
      alt: "Community engagement event",
      title: "Community Engagement",
      description: "Active participation in community events and educational programs that bring people together."
    },
    {
      src: "/img15.jpg",
      alt: "Felicitation ceremony",
      title: "Recognition Ceremony",
      description: "Honoring achievements and contributions in our annual felicitation ceremony celebrating excellence."
    },
    {
      src: "/img16.jpg",
      alt: "Educational workshop",
      title: "Educational Workshop",
      description: "Conducting interactive workshops to enhance learning experiences and skill development."
    },
    {
      src: "/img11.jpg",
      alt: "Community gathering",
      title: "Community Gathering",
      description: "Bringing together community members for collaborative learning and development initiatives."
    },
    {
      src: "/img14.jpg",
      alt: "Student activities",
      title: "Student Activities",
      description: "Engaging students in various activities that promote holistic development and learning."
    }
  ];


  const openModal = (index: number) => {
    setSelectedImage(index);
    setIsModalOpen(true);
    setImageLoaded(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setImageLoaded(false);
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % allImages.length);
    setImageLoaded(false);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + allImages.length) % allImages.length);
    setImageLoaded(false);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-green-50 to-white" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Header */}
              <div>
                <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">
                  OUR MISSION
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-green-600 mt-2">
                  Our Mission - 2025 & Beyond
                </h2>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-gray-700 leading-relaxed"
              >
                FARAKKA Progressive Educational Welfare Society empowers students with quality education, 
                workforce skills, and social welfare support, fostering sustainable growth and equal opportunities.
              </motion.p>

              {/* Mission Points */}
              <div className="space-y-4">
                {missionPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                      className="bg-green-600 text-white p-2 rounded-full flex-shrink-0"
                    >
                      <Check className="h-4 w-4" />
                    </motion.div>
                    <span className="text-gray-700 font-medium">{point}</span>
                  </motion.div>
                ))}
              </div>

              {/* Call to Action */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg"
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Images Section */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              {/* Top Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative cursor-pointer group bg-gray-100 rounded-2xl overflow-hidden"
                onClick={() => openModal(0)}
              >
                <div className="w-full h-64 flex items-center justify-center">
                  <img
                    src={allImages[0].src}
                    alt={allImages[0].alt}
                    className="w-full h-full object-contain rounded-2xl transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-2xl pointer-events-none"></div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-2xl flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 text-white font-semibold">
                    <ZoomIn className="h-5 w-5" />
                    <span>Click to view details</span>
                  </div>
                </div>
              </motion.div>

              {/* Bottom Image Grid */}
              <div className="grid grid-cols-2 gap-4">
                {allImages.slice(1, 3).map((image, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative cursor-pointer group bg-gray-100 rounded-2xl overflow-hidden"
                    onClick={() => openModal(index + 1)}
                  >
                    <div className="w-full h-48 flex items-center justify-center">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-contain rounded-2xl transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-2xl pointer-events-none"></div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-2xl flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 text-white font-semibold text-sm">
                        <ZoomIn className="h-4 w-4" />
                        <span>View details</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Load More Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.9 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAllImages(!showAllImages)}
                className="w-full bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-lg"
              >
                {showAllImages ? 'Show Less' : 'Load More Images'}
              </motion.button>
            </motion.div>
          </div>

          {/* Additional Images Grid */}
          {showAllImages && (
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-16 grid md:grid-cols-3 gap-6"
            >
              {allImages.slice(3).map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="relative cursor-pointer group bg-gray-100 rounded-2xl overflow-hidden"
                  onClick={() => openModal(index + 3)}
                >
                  <div className="w-full h-64 flex items-center justify-center">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-contain rounded-2xl transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-2xl pointer-events-none"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                    <p className="text-white/90 text-sm mt-1">{image.description}</p>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-2xl flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 text-white font-semibold">
                      <ZoomIn className="h-5 w-5" />
                      <span>View details</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Additional Mission Features */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Target,
                title: "Clear Vision",
                description: "Focused on creating lasting impact through education and community development"
              },
              {
                icon: Users,
                title: "Community Focus",
                description: "Dedicated to serving and uplifting local communities through various programs"
              },
              {
                icon: Heart,
                title: "Social Welfare",
                description: "Committed to improving health, education, and overall well-being of society"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center border-2 border-green-100"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="bg-yellow-400 text-green-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6"
                >
                  <feature.icon className="h-8 w-8" />
                </motion.div>
                <h3 className="text-xl font-bold text-green-600 mb-4">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Modal with Better Image Display */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl max-w-6xl w-full max-h-[95vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gray-50">
                <h3 className="text-2xl font-bold text-green-600">
                  {allImages[selectedImage].title}
                </h3>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 transition-colors p-2 hover:bg-gray-200 rounded-full"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Modal Content with Improved Image Display */}
              <div className="relative bg-gray-100">
                {/* Loading State */}
                {!imageLoaded && (
                  <div className="flex items-center justify-center h-96">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
                  </div>
                )}
                
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={allImages[selectedImage].src}
                    alt={allImages[selectedImage].alt}
                    className={`w-full transition-opacity duration-300 ${
                      imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                      maxHeight: '70vh',
                      objectFit: 'contain',
                      objectPosition: 'center'
                    }}
                    onLoad={handleImageLoad}
                  />
                </div>
                
                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-xl z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-xl z-10"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>

              {/* Modal Footer */}
              <div className="p-6 bg-white">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {allImages[selectedImage].description}
                </p>
                <div className="flex justify-between items-center mt-6">
                  <span className="text-sm text-gray-500 font-medium">
                    {selectedImage + 1} of {allImages.length}
                  </span>
                  <div className="flex space-x-2">
                    {allImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setSelectedImage(index);
                          setImageLoaded(false);
                        }}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === selectedImage 
                            ? 'bg-green-600' 
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Mission;
