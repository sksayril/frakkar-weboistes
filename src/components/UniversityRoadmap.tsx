import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Target, Award, Users, BookOpen, TrendingUp, Globe, Star } from 'lucide-react';

const UniversityRoadmap = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const roadmapData = [
    {
      year: "2020-2022",
      phase: "Foundation Phase",
      title: "Establishment & Growth",
      description: "Launched initial programs with focus on quality education and community development",
      achievements: [
        "Established core academic programs",
        "Built first campus infrastructure",
        "Recruited founding faculty members",
        "Achieved initial accreditation"
      ],
      icon: BookOpen,
      status: "completed"
    },
    {
      year: "2023-2024",
      phase: "Expansion Phase",
      title: "Program Diversification",
      description: "Expanded academic offerings and enhanced infrastructure",
      achievements: [
        "Added new schools and departments",
        "Enhanced research facilities",
        "Increased student enrollment",
        "Partnerships with industry leaders"
      ],
      icon: TrendingUp,
      status: "completed"
    },
    {
      year: "2025-2026",
      phase: "Innovation Phase",
      title: "Technology Integration",
      description: "Implementing cutting-edge technology and digital learning platforms",
      achievements: [
        "Smart campus implementation",
        "Online learning platforms",
        "AI-powered education tools",
        "Virtual reality labs"
      ],
      icon: Target,
      status: "current"
    },
    {
      year: "2027-2028",
      phase: "Global Phase",
      title: "International Recognition",
      description: "Establishing global partnerships and achieving international standards",
      achievements: [
        "International student exchange programs",
        "Global research collaborations",
        "World-class accreditation",
        "Multilingual education programs"
      ],
      icon: Globe,
      status: "upcoming"
    },
    {
      year: "2029-2030",
      phase: "Excellence Phase",
      title: "Leadership in Education",
      description: "Becoming a leading educational institution with global impact",
      achievements: [
        "Top-ranked university status",
        "Nobel laureate faculty",
        "Breakthrough research discoveries",
        "Global alumni network"
      ],
      icon: Star,
      status: "upcoming"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'current':
        return 'bg-yellow-400';
      case 'upcoming':
        return 'bg-gray-400';
      default:
        return 'bg-gray-400';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'current':
        return 'In Progress';
      case 'upcoming':
        return 'Planned';
      default:
        return 'Planned';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-yellow-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-green-600 mb-4">University Roadmap</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our journey towards becoming a world-class educational institution
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-green-200 h-full hidden lg:block"></div>

          <div className="space-y-12">
            {roadmapData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:gap-8`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-green-500 rounded-full z-10 hidden lg:block">
                  <div className={`w-3 h-3 rounded-full ${getStatusColor(item.status)} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}></div>
                </div>

                {/* Content Card */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'} w-full`}>
                  <motion.div
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-green-500"
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.8 }}
                          className="bg-yellow-400 text-green-600 p-3 rounded-full"
                        >
                          <item.icon className="h-6 w-6" />
                        </motion.div>
                        <div>
                          <span className="text-sm font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full">
                            {item.phase}
                          </span>
                        </div>
                      </div>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full text-white ${getStatusColor(item.status)}`}>
                        {getStatusText(item.status)}
                      </span>
                    </div>

                    {/* Year and Title */}
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-green-600 mb-2">{item.title}</h3>
                      <p className="text-lg font-semibold text-gray-500">{item.year}</p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mb-6 leading-relaxed">{item.description}</p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-green-600 mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.2 + i * 0.1 }}
                            className="flex items-center gap-2 text-gray-700"
                          >
                            <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">Our Vision for 2030</h3>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed">
              By 2030, FARAKKA Progressive Educational Welfare Society aims to be recognized as a premier 
              educational institution, fostering innovation, research excellence, and global leadership. 
              We envision creating a sustainable future through education that empowers individuals and 
              transforms communities worldwide.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UniversityRoadmap;
