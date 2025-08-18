import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Target, Heart, GraduationCap, Globe, BookOpen } from 'lucide-react';
import UniversityRoadmap from '../components/UniversityRoadmap';
import TeamSection from '../components/TeamSection';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.warn('Video autoplay failed:', error);
      });
    }
  }, []);

  const values = [
    {
      icon: Target,
      title: "Excellence in Education",
      description: "We strive to provide world-class education that prepares students for global challenges and opportunities."
    },
    {
      icon: Heart,
      title: "Student-Centric Approach",
      description: "Every decision we make is centered around the well-being and success of our students."
    },
    {
      icon: Users,
      title: "Inclusive Community",
      description: "We foster an inclusive environment where diversity is celebrated and everyone has equal opportunities."
    },
    {
      icon: Award,
      title: "Innovation & Research",
      description: "We encourage innovative thinking and research-based learning to solve real-world problems."
    }
  ];

  const achievements = [
    {
      number: "5000+",
      label: "Students Enrolled",
      icon: Users,
      description: "Growing community of learners"
    },
    {
      number: "50+",
      label: "Academic Programs",
      icon: BookOpen,
      description: "Diverse educational offerings"
    },
    {
      number: "95%",
      label: "Success Rate",
      icon: Award,
      description: "Outstanding student outcomes"
    },
    {
      number: "25+",
      label: "Years of Excellence",
      icon: GraduationCap,
      description: "Proven track record"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section with Video Background */}
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
            <source src="https://videos.pexels.com/video-files/2002527/2002527-hd_1920_1080_30fps.mp4" type="video/mp4" />
            <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">About FARAKKA</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
              Progressive Educational Welfare Society - Nurturing minds, building character, and creating leaders for tomorrow
            </p>
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

      {/* Mission & Vision */}
      <section className="py-20 bg-white" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
                alt="Campus"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-green-600 mb-4">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed">
                  To provide accessible, quality education that empowers individuals to reach their full potential and contribute meaningfully to society. We are committed to fostering critical thinking, creativity, and ethical leadership.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-green-600 mb-4">Our Vision</h2>
                <p className="text-gray-700 leading-relaxed">
                  To be a leading educational institution that transforms lives through innovative learning experiences, research excellence, and community engagement, creating a better world for future generations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Achievements Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-green-600 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Milestones that reflect our commitment to educational excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="bg-yellow-400 text-green-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6"
                >
                  <achievement.icon className="h-8 w-8" />
                </motion.div>
                <h3 className="text-3xl font-bold text-green-600 mb-2">{achievement.number}</h3>
                <p className="text-lg font-semibold text-gray-700 mb-2">{achievement.label}</p>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-green-600 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-green-50 rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="bg-yellow-400 text-green-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6"
                >
                  <value.icon className="h-8 w-8" />
                </motion.div>
                <h3 className="text-xl font-bold text-green-600 mb-4">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* University Roadmap */}
      <UniversityRoadmap />

      {/* History */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-green-600 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proud legacy of educational excellence spanning decades
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-green-50 rounded-2xl p-8 shadow-lg"
            >
              <p className="text-gray-700 text-lg leading-relaxed">
                Founded with the vision of providing quality education to the rural communities of West Bengal, 
                FARAKKA Progressive Educational Welfare Society has grown from a small initiative to a comprehensive 
                educational institution. Our commitment to excellence, innovation, and social responsibility has 
                made us a trusted name in education.
              </p>
              <br />
              <p className="text-gray-700 text-lg leading-relaxed">
                Over the years, we have expanded our offerings to include various undergraduate and postgraduate programs, 
                skill development courses, and research opportunities. Our graduates have gone on to achieve success 
                in diverse fields, contributing to the progress of our nation and beyond.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;