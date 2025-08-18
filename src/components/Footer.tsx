import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6 }
  };

  return (
    <footer className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <motion.div {...fadeInUp} className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="p-3 bg-yellow-500 rounded-full shadow-lg"
              >
                <GraduationCap className="h-8 w-8 text-green-800" />
              </motion.div>
              <div>
                <h2 className="text-2xl font-bold text-yellow-400">FARAKKA</h2>
                <p className="text-sm text-green-100">Progressive Educational Welfare Society</p>
              </div>
            </div>
            <p className="text-green-100 text-sm leading-relaxed max-w-md">
              Empowering minds, building futures. We are committed to providing quality education and fostering holistic development of students through innovative teaching methods and comprehensive skill development programs.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-yellow-500 text-green-800 rounded-full hover:bg-yellow-400 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400 border-b-2 border-yellow-500 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              {['About Us', 'Our Institutes', 'Events', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 5 }}
                    className="text-green-100 hover:text-yellow-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3 group-hover:bg-yellow-400 transition-colors duration-200"></span>
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400 border-b-2 border-yellow-500 pb-2">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="p-2 bg-yellow-500 rounded-full shadow-md group-hover:bg-yellow-400 transition-colors duration-200">
                  <MapPin className="h-4 w-4 text-green-800" />
                </div>
                <p className="text-green-100 text-sm leading-relaxed">
                  Farakka, Murshidabad District, West Bengal, India - 742202
                </p>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-yellow-500 rounded-full shadow-md group-hover:bg-yellow-400 transition-colors duration-200">
                  <Phone className="h-4 w-4 text-green-800" />
                </div>
                <p className="text-green-100 text-sm">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-yellow-500 rounded-full shadow-md group-hover:bg-yellow-400 transition-colors duration-200">
                  <Mail className="h-4 w-4 text-green-800" />
                </div>
                <p className="text-green-100 text-sm">info@farakkaeducation.org</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="border-t-2 border-yellow-500 mt-8 pt-6 text-center"
        >
          <p className="text-green-100 text-sm">
            © 2025 Farakka Progressive Educational Welfare Society. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;