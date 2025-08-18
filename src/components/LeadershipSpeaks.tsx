import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote, Award, Users } from 'lucide-react';

const LeadershipSpeaks = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const messages = [
    {
      type: "FOUNDER'S MESSAGE",
      name: "Jakir Hossain",
      title: "Founder, FARAKKA Progressive Educational Welfare Society",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600&h=800",
      greeting: "Dear Friends, Supporters, and Community Members,",
      content: [
        "With immense pride, I extend my heartfelt greetings to you all. The FARAKKA Progressive Educational Welfare Society was founded with a deep commitment to education and social upliftment, ensuring that every individual, regardless of their background, has the opportunity to lead a life of dignity and purpose. We believe education is the key to empowerment, transforming communities and shaping a brighter future. Our programs focus on academic excellence while fostering values of integrity, empathy, and social responsibility.",
        "Our journey has been driven by the unwavering support of our dedicated team, generous benefactors, and the community at large. Their contributions have been instrumental in achieving our mission. As we look ahead, we remain committed to expanding our reach, creating more opportunities, and driving positive change across communities. Together, let's build a society where education and social welfare are not privileges but fundamental rights accessible to all. Thank you for your continued support."
      ]
    },
    {
      type: "PRESIDENT'S MESSAGE",
      name: "Dipak Kumar Das",
      title: "President, FARAKKA Progressive Educational Welfare Society",
      image: "https://images.pexels.com/photos/1181681/pexels-photo-1181681.jpeg?auto=compress&cs=tinysrgb&w=600&h=800",
      greeting: "Dear Students, Educators, Benefactors, and Community Members,",
      content: [
        "At FARAKKA Progressive Educational Welfare Society, we are committed to empowering lives through education and community service. Our goal is to provide quality education that nurtures intellectual growth, character, and leadership. With a focus on holistic development, we ensure that every student receives the skills and values needed to succeed in life.",
        "Beyond education, we actively work on health, vocational training, and social welfare to uplift communities. Our vision is to create a society where education and opportunity are accessible to all. With the support of our dedicated team, donors, and community, we continue to make a difference, shaping a future built on learning, compassion, and progress."
      ]
    }
  ];

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-green-600 mb-4">Leadership Speaks</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Messages from our visionary leaders guiding the future of education
          </p>
        </motion.div>

        <div className="space-y-20">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className={`flex flex-col lg:flex-row gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Section */}
              <div className="lg:w-1/2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <img
                    src={message.image}
                    alt={message.name}
                    className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-2xl"></div>
                  
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 bg-yellow-400 text-green-600 p-3 rounded-full shadow-lg">
                    <Quote className="h-6 w-6" />
                  </div>
                </motion.div>
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2 space-y-6">
                {/* Header */}
                <div>
                  <span className="text-sm font-semibold text-red-600 uppercase tracking-wider">
                    {message.type}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-bold text-green-600 mt-2">
                    {message.greeting}
                  </h3>
                </div>

                {/* Message Content */}
                <div className="space-y-4">
                  {message.content.map((paragraph, pIndex) => (
                    <motion.p
                      key={pIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.8, delay: index * 0.3 + pIndex * 0.2 }}
                      className="text-gray-700 leading-relaxed text-lg"
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>

                {/* Signature */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.3 + 0.6 }}
                  className="pt-6 border-t border-gray-200"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-0.5 bg-red-600"></div>
                    <div>
                      <p className="text-lg font-bold text-green-600">- {message.name}</p>
                      <p className="text-gray-600">{message.title}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Leadership Info */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 bg-gradient-to-r from-green-50 to-yellow-50 rounded-2xl p-12"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: Award,
                title: "Visionary Leadership",
                description: "Guided by experienced leaders with decades of educational expertise"
              },
              {
                icon: Users,
                title: "Community Focus",
                description: "Dedicated to serving and uplifting local communities through education"
              },
              {
                icon: Quote,
                title: "Student-Centric",
                description: "Every decision made with student success and well-being in mind"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                whileHover={{ y: -5 }}
                className="space-y-4"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="bg-yellow-400 text-green-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto"
                >
                  <item.icon className="h-8 w-8" />
                </motion.div>
                <h3 className="text-xl font-bold text-green-600">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadershipSpeaks;
