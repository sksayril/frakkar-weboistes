import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, GraduationCap, Star, Heart, Target } from 'lucide-react';

const TeamSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const leadership = [
    {
      name: "Jakir Hossain",
      position: "Founder & Chairman",
      image: "/img12.jpg",
      description: "Visionary leader with over 20 years of experience in educational development and community welfare.",
      achievements: ["Educational Excellence Award", "Community Service Recognition", "Leadership in Education"],
      icon: Award
    },
    {
      name: "Dipak Kumar Das",
      position: "President",
      image: "/img13.jpg",
      description: "Dedicated leader committed to advancing educational opportunities and fostering academic excellence.",
      achievements: ["Academic Leadership Award", "Innovation in Education", "Student Success Champion"],
      icon: Star
    }
  ];

  const teachers = [
    {
      name: "Dr. ....",
      position: "Head of Computer Science",
      image: "https://media.istockphoto.com/id/1220827245/vector/anonymous-gender-neutral-face-avatar-incognito-head-silhouette.jpg?s=612x612&w=0&k=20&c=GMdiPt_h8exnrAQnNo7dIKjwZyYqjH4lRQqV8AOx4QU=",
      specialization: "Artificial Intelligence & Machine Learning",
      experience: "15+ years",
      icon: GraduationCap
    },
    {
      name: "Prof. ......",
      position: "Head of Business Management",
      image: "https://media.istockphoto.com/id/1220827245/vector/anonymous-gender-neutral-face-avatar-incognito-head-silhouette.jpg?s=612x612&w=0&k=20&c=GMdiPt_h8exnrAQnNo7dIKjwZyYqjH4lRQqV8AOx4QU=",
      specialization: "Strategic Management & Finance",
      experience: "12+ years",
      icon: Target
    },
    {
      name: "Dr. ......",
      position: "Head of Arts & Sciences",
      image: "https://media.istockphoto.com/id/1220827245/vector/anonymous-gender-neutral-face-avatar-incognito-head-silhouette.jpg?s=612x612&w=0&k=20&c=GMdiPt_h8exnrAQnNo7dIKjwZyYqjH4lRQqV8AOx4QU=",
      specialization: "Literature & Cultural Studies",
      experience: "18+ years",
      icon: Heart
    },
    {
      name: "Prof. ......",
      position: "Head of Engineering",
      image: "https://media.istockphoto.com/id/1220827245/vector/anonymous-gender-neutral-face-avatar-incognito-head-silhouette.jpg?s=612x612&w=0&k=20&c=GMdiPt_h8exnrAQnNo7dIKjwZyYqjH4lRQqV8AOx4QU=",
      specialization: "Mechanical Engineering & Robotics",
      experience: "14+ years",
      icon: Users
    },
    {
      name: "Dr. ........",
      position: "Head of Vocational Training",
      image: "https://media.istockphoto.com/id/1220827245/vector/anonymous-gender-neutral-face-avatar-incognito-head-silhouette.jpg?s=612x612&w=0&k=20&c=GMdiPt_h8exnrAQnNo7dIKjwZyYqjH4lRQqV8AOx4QU=",
      specialization: "Skill Development & Training",
      experience: "10+ years",
      icon: Award
    },
    {
      name: "Prof. .....",
      position: "Head of Research & Development",
      image: "https://media.istockphoto.com/id/1220827245/vector/anonymous-gender-neutral-face-avatar-incognito-head-silhouette.jpg?s=612x612&w=0&k=20&c=GMdiPt_h8exnrAQnNo7dIKjwZyYqjH4lRQqV8AOx4QU=",
      specialization: "Research Methodology & Innovation",
      experience: "16+ years",
      icon: Star
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-yellow-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Leadership Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-green-600 mb-4">Our Leadership</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our visionary leaders who guide FARAKKA towards educational excellence
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {leadership.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="relative">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-48 h-48 object-cover rounded-full shadow-lg"
                  />
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className="absolute -bottom-2 -right-2 bg-yellow-400 text-green-600 p-3 rounded-full shadow-lg"
                  >
                    <leader.icon className="h-6 w-6" />
                  </motion.div>
                </div>
                <div className="text-center lg:text-left flex-1">
                  <h3 className="text-2xl font-bold text-green-600 mb-2">{leader.name}</h3>
                  <p className="text-lg font-semibold text-yellow-600 mb-4">{leader.position}</p>
                  <p className="text-gray-700 mb-6 leading-relaxed">{leader.description}</p>
                  <div className="space-y-2">
                    {leader.achievements.map((achievement, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.2 + i * 0.1 }}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Teachers Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-green-600 mb-4">Our Distinguished Faculty</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experienced educators dedicated to nurturing the next generation of leaders
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="relative mb-6">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto shadow-lg"
                />
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="absolute -bottom-2 -right-2 bg-yellow-400 text-green-600 p-2 rounded-full shadow-lg"
                >
                  <teacher.icon className="h-4 w-4" />
                </motion.div>
              </div>
              
              <h3 className="text-xl font-bold text-green-600 mb-2">{teacher.name}</h3>
              <p className="text-lg font-semibold text-yellow-600 mb-2">{teacher.position}</p>
              <p className="text-sm text-gray-600 mb-3">{teacher.specialization}</p>
              <div className="bg-green-50 rounded-lg p-3">
                <span className="text-sm font-medium text-green-600">{teacher.experience} Experience</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Faculty Stats */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 bg-white rounded-2xl p-12 shadow-xl"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Expert Faculty", icon: GraduationCap },
              { number: "15+", label: "Years Average Experience", icon: Award },
              { number: "95%", label: "Student Satisfaction", icon: Heart },
              { number: "25+", label: "Research Publications", icon: Star }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="space-y-4"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="bg-yellow-400 text-green-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto"
                >
                  <stat.icon className="h-8 w-8" />
                </motion.div>
                <h3 className="text-3xl font-bold text-green-600">{stat.number}</h3>
                <p className="text-gray-700 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
