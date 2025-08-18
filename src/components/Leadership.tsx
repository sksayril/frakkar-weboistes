import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Leadership = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const leaders = [
    {
      name: "Dr. Rajesh Kumar",
      position: "President",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300",
      speech: "Education is the key to unlocking human potential. At FARAKKA, we are committed to nurturing young minds and preparing them for a bright future."
    },
    {
      name: "Prof. Sunita Sharma",
      position: "Chairman",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300&h=300",
      speech: "Our institution stands as a beacon of hope and excellence in education. We believe in empowering our students with knowledge, skills, and values."
    }
  ];

  return (
    <section className="py-20 bg-green-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-green-600 mb-4">Leadership Speaks</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Inspiring words from our visionary leaders who guide our institution towards excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative"
                  >
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-yellow-400"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                      />
                    </div>
                  </motion.div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-green-600">{leader.name}</h3>
                    <p className="text-yellow-600 font-semibold">{leader.position}</p>
                  </div>
                </div>
                
                <motion.blockquote
                  whileHover={{ scale: 1.02 }}
                  className="text-gray-700 text-lg leading-relaxed italic relative"
                >
                  <span className="text-6xl text-yellow-400 absolute -top-4 -left-2 font-serif">"</span>
                  <p className="relative z-10 pl-8">{leader.speech}</p>
                  <span className="text-6xl text-yellow-400 absolute -bottom-8 -right-2 font-serif">"</span>
                </motion.blockquote>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;