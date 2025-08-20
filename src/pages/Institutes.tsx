import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Users, Award, BookOpen, Globe, Target } from 'lucide-react';
import UniversityRoadmap from '../components/UniversityRoadmap';
import InstitutesCarousel from '../components/InstitutesCarousel';

const Institutes = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const institutes = [
    {
      name: "School of Engineering & Technology",
      programs: ["Computer Science", "Electronics", "Mechanical", "Civil"],
      students: 1200,
      faculty: 45,
      image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      description: "Leading engineering education with state-of-the-art laboratories and industry partnerships."
    },
    {
      name: "School of Business Management",
      programs: ["MBA", "BBA", "Commerce", "Economics"],
      students: 800,
      faculty: 28,
      image: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      description: "Nurturing future business leaders with comprehensive management education."
    },
    {
      name: "School of Arts & Sciences",
      programs: ["English", "History", "Mathematics", "Physics", "Chemistry"],
      students: 600,
      faculty: 32,
      image: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      description: "Fostering critical thinking and research in liberal arts and sciences."
    },
    {
      name: "Vocational Training Center",
      programs: ["Computer Skills", "Tailoring", "Handicrafts", "Agriculture"],
      students: 400,
      faculty: 15,
      image: "https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      description: "Practical skill development programs for employment readiness."
    }
  ];

  const upcomingInstitutes = [
    {
      name: "School of Medicine & Health Sciences",
      status: "Coming Soon",
      description: "Comprehensive medical education with modern healthcare facilities",
      icon: Target
    },
    {
      name: "School of Law & Justice",
      status: "In Planning",
      description: "Legal education focused on justice, ethics, and human rights",
      icon: Globe
    },
    {
      name: "School of Agriculture & Rural Development",
      status: "In Development",
      description: "Sustainable agriculture and rural community development",
      icon: BookOpen
    }
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
            <h1 className="text-5xl font-bold mb-6">Our Institutes</h1>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed">
              Comprehensive educational programs across multiple disciplines
            </p>
          </motion.div>
        </div>
      </section>

      {/* Institutes Carousel */}
      <section className="py-20 bg-white" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-green-600 mb-4">Current Institutes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Established schools and departments offering quality education
            </p>
          </motion.div>

          {/* Import and use InstitutesCarousel component */}
          <InstitutesCarousel />
        </div>
      </section>

      {/* Upcoming Institutes */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-green-600 mb-4">Upcoming Institutes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Exciting new schools and departments in development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingInstitutes.map((institute, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-dashed border-green-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="bg-yellow-400 text-green-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6"
                >
                  <institute.icon className="h-8 w-8" />
                </motion.div>
                <h3 className="text-xl font-bold text-green-600 mb-2">{institute.name}</h3>
                <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {institute.status}
                </span>
                <p className="text-gray-700">{institute.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* University Roadmap */}
      <UniversityRoadmap />

      {/* Facilities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-green-600 mb-4">World-Class Facilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art infrastructure supporting excellence in education
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BookOpen, title: "Modern Libraries", desc: "Digital and physical resources" },
              { icon: Award, title: "Research Labs", desc: "Advanced equipment and facilities" },
              { icon: Users, title: "Smart Classrooms", desc: "Technology-enabled learning" },
              { icon: GraduationCap, title: "Sports Complex", desc: "Complete recreational facilities" }
            ].map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-green-50 rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="bg-yellow-400 text-green-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                >
                  <facility.icon className="h-8 w-8" />
                </motion.div>
                <h3 className="text-xl font-bold text-green-600 mb-2">{facility.title}</h3>
                <p className="text-gray-700">{facility.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Institutes;