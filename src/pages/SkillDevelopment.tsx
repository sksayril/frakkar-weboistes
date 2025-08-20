import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Monitor, Wrench, PaintBucket, Cpu, Globe, Camera, Briefcase, Trophy } from 'lucide-react';

const SkillDevelopment = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const skillPrograms = [
    {
      icon: Monitor,
      title: "Computer Skills",
      duration: "3-6 months",
      level: "Beginner to Advanced",
      description: "Master essential computer skills including MS Office, internet navigation, and basic programming.",
      modules: ["Basic Computing", "MS Office Suite", "Internet & Email", "Data Entry"],
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600&h=400"
    },
    {
      icon: Globe,
      title: "Digital Marketing",
      duration: "4 months",
      level: "Intermediate",
      description: "Learn modern digital marketing strategies including SEO, social media, and online advertising.",
      modules: ["SEO Basics", "Social Media Marketing", "Google Ads", "Content Creation"],
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600&h=400"
    },
    {
      icon: Wrench,
      title: "Technical Trades",
      duration: "6-12 months",
      level: "All Levels",
      description: "Hands-on training in electrical work, plumbing, carpentry, and other technical trades.",
      modules: ["Electrical Basics", "Plumbing", "Carpentry", "Safety Protocols"],
      image: "https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&w=600&h=400"
    },
    {
      icon: PaintBucket,
      title: "Creative Arts",
      duration: "3-8 months",
      level: "All Levels",
      description: "Develop artistic skills in painting, crafts, design, and other creative disciplines.",
      modules: ["Basic Drawing", "Painting Techniques", "Handicrafts", "Design Principles"],
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600&h=400"
    },
    {
      icon: Cpu,
      title: "Programming",
      duration: "6-12 months",
      level: "Beginner to Advanced",
      description: "Learn popular programming languages and software development skills.",
      modules: ["Python Basics", "Web Development", "Database Management", "Project Work"],
      image: "https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=600&h=400"
    },
    {
      icon: Camera,
      title: "Photography & Videography",
      duration: "4-6 months",
      level: "All Levels",
      description: "Master the art of photography and video production for professional opportunities.",
      modules: ["Camera Basics", "Composition", "Editing", "Portfolio Building"],
      image: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600&h=400"
    }
  ];

  const benefits = [
    { icon: Briefcase, title: "Job Placement", desc: "90% placement rate in relevant industries" },
    { icon: Trophy, title: "Certification", desc: "Industry-recognized certificates" },
    { icon: Monitor, title: "Practical Training", desc: "Hands-on learning approach" },
    { icon: Globe, title: "Industry Connect", desc: "Direct connections with employers" }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const heroVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center"
          >
            <motion.h1 
              className="text-5xl font-bold mb-6"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Skill Development Programs
            </motion.h1>
            <motion.p 
              className="text-xl max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Empowering you with practical skills for a successful career
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Programs Grid */}
      <section className="py-20 bg-white" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl font-bold text-green-600 mb-4"
              initial={{ scale: 0.9 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Available Programs
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Choose from our comprehensive range of skill development programs
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid lg:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {skillPrograms.map((program, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -15,
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20 
                }}
                className="bg-green-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-48 object-cover"
                  />
                  <motion.div 
                    className="absolute top-4 right-4 bg-yellow-400 text-green-800 px-3 py-1 rounded-full font-bold text-sm"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={inView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                  >
                    {program.duration}
                  </motion.div>
                </motion.div>

                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <motion.div
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.1,
                        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)"
                      }}
                      transition={{ duration: 0.6 }}
                      className="bg-yellow-400 text-green-600 p-3 rounded-full mr-4"
                    >
                      <program.icon className="h-6 w-6" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-green-600">{program.title}</h3>
                      <p className="text-yellow-600 font-semibold text-sm">{program.level}</p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6">{program.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-green-600 mb-3">Course Modules:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {program.modules.map((module, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.4, delay: index * 0.1 + i * 0.1 + 0.8 }}
                          whileHover={{ 
                            scale: 1.05,
                            backgroundColor: "#fef3c7",
                            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)"
                          }}
                          className="bg-yellow-100 text-green-800 px-3 py-2 rounded-lg text-sm font-medium text-center transition-all duration-200"
                        >
                          {module}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-200"
                  >
                    Enroll Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl font-bold text-green-600 mb-4"
              initial={{ scale: 0.9 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Program Benefits
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Why choose our skill development programs
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -15, 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20 
                }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1,
                    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)"
                  }}
                  transition={{ duration: 0.6 }}
                  className="bg-yellow-400 text-green-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                >
                  <benefit.icon className="h-8 w-8" />
                </motion.div>
                <h3 className="text-xl font-bold text-green-600 mb-2">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl font-bold mb-6"
              initial={{ scale: 0.9 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ready to Start Your Journey?
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Join thousands of students who have transformed their careers through our skill development programs
            </motion.p>
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 text-green-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-200"
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SkillDevelopment;