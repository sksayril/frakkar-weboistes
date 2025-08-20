import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Award, BookOpen, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Counter from './Counter';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Ensure video plays when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.warn('Video autoplay failed:', error);
      });
    }
  }, []);

  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="https://videos.pexels.com/video-files/7490429/7490429-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-8"
        >
          {/* Main Heading */}
          <motion.div variants={fadeInUp}>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-yellow-400 drop-shadow-lg">FARAKKA</span>
              <br />
              <span className="text-2xl md:text-4xl text-white drop-shadow-lg">Progressive Educational Welfare Society</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl font-light max-w-3xl mx-auto text-white drop-shadow-lg"
          >
            Empowering Dreams, Building Futures Through Quality Education
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/gallery')}
              className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300 shadow-lg drop-shadow-lg"
            >
              Explore Programs
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://www.google.com/maps/place/24%C2%B036%2747.4%22N+88%C2%B000%2711.5%22E/@24.6128777,88.0027633,3a,90y,27.3h,90.04t/data=!3m7!1e1!3m5!1sqxUDT04EuSuNfr94WzlrIg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-0.042456695864132143%26panoid%3DqxUDT04EuSuNfr94WzlrIg%26yaw%3D27.299438060731415!7i13312!8i6656!4m4!3m3!8m2!3d24.6131692!4d88.0031848?hl=en&entry=ttu&g_ep=EgoyMDI1MDgxNy4wIKXMDSoASAFQAw%3D%3D', '_blank')}
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300 drop-shadow-lg"
            >
              Virtual Tour
            </motion.button>
          </motion.div>

          {/* Stats Counter */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-yellow-400 text-black p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg"
              >
                <Users className="h-8 w-8" />
              </motion.div>
              <Counter end={5000} duration={2} />
              <p className="text-yellow-400 mt-2 drop-shadow-lg font-semibold">Students</p>
            </div>
            
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-yellow-400 text-black p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg"
              >
                <Award className="h-8 w-8" />
              </motion.div>
              <Counter end={50} duration={2} />
              <p className="text-yellow-400 mt-2 drop-shadow-lg font-semibold">Awards</p>
            </div>
            
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-yellow-400 text-black p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg"
              >
                <BookOpen className="h-8 w-8" />
              </motion.div>
              <Counter end={25} duration={2} />
              <p className="text-yellow-400 mt-2 drop-shadow-lg font-semibold">Programs</p>
            </div>
            
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-yellow-400 text-black p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg"
              >
                <TrendingUp className="h-8 w-8" />
              </motion.div>
              <Counter end={95} duration={2} />
              <p className="text-yellow-400 mt-2 drop-shadow-lg font-semibold">% Success Rate</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <div className="w-1 h-12 bg-yellow-400 rounded-full"></div>
      </motion.div>
    </section>
  );
};

export default Hero;