import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, X, Image, Video } from 'lucide-react';

const Gallery = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [selectedMedia, setSelectedMedia] = useState<any>(null);
  const [filter, setFilter] = useState('all');

  const mediaItems = [
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      category: 'campus',
      title: 'Campus Life'
    },
    {
      type: 'video',
      src: 'https://cdn.pixabay.com/vimeo/479197096/college-students-31729.mp4',
      poster: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      category: 'events',
      title: 'Annual Tech Fest'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      category: 'academic',
      title: 'Laboratory'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      category: 'sports',
      title: 'Sports Meet'
    },
    {
      type: 'video',
      src: 'https://cdn.pixabay.com/vimeo/346236240/girl-169012.mp4',
      poster: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      category: 'academic',
      title: 'Study Session'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      category: 'events',
      title: 'Cultural Festival'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      category: 'academic',
      title: 'Science Lab'
    },
    {
      type: 'video',
      src: 'https://cdn.pixabay.com/vimeo/333296080/student-35033.mp4',
      poster: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      category: 'campus',
      title: 'Campus Tour'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      category: 'events',
      title: 'Graduation Day'
    }
  ];

  const filteredItems = filter === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === filter);

  const categories = [
    { id: 'all', name: 'All', icon: Image },
    { id: 'campus', name: 'Campus', icon: Image },
    { id: 'academic', name: 'Academic', icon: Image },
    { id: 'events', name: 'Events', icon: Video },
    { id: 'sports', name: 'Sports', icon: Image }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">Gallery</h1>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed">
              Explore our vibrant campus life through images and videos
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-green-50 text-green-600 hover:bg-green-100'
                }`}
              >
                <category.icon className="h-4 w-4" />
                <span>{category.name}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={`${item.title}-${index}`}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group hover:shadow-xl transition-all duration-300"
                  onClick={() => setSelectedMedia(item)}
                >
                  <div className="relative aspect-video overflow-hidden">
                    {item.type === 'video' ? (
                      <>
                        <video
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          poster={item.poster}
                          muted
                          onMouseEnter={(e) => e.currentTarget.play()}
                          onMouseLeave={(e) => {
                            e.currentTarget.pause();
                            e.currentTarget.currentTime = 0;
                          }}
                        >
                          <source src={item.src} type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Play className="h-12 w-12 text-white" />
                        </div>
                      </>
                    ) : (
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                    
                    <div className="absolute top-4 right-4">
                      <div className="bg-yellow-400 text-green-800 p-2 rounded-full">
                        {item.type === 'video' ? (
                          <Video className="h-4 w-4" />
                        ) : (
                          <Image className="h-4 w-4" />
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-bold text-green-600 text-center">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMedia(null)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-4 right-4 z-10 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              
              <div className="aspect-video">
                {selectedMedia.type === 'video' ? (
                  <video
                    className="w-full h-full object-cover"
                    controls
                    autoPlay
                  >
                    <source src={selectedMedia.src} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={selectedMedia.src}
                    alt={selectedMedia.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-green-600 text-center">
                  {selectedMedia.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;