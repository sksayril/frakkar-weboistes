import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const testimonials = [
    {
      name: "Amit Kumar",
      course: "B.Tech Computer Science",
      year: "2023",
      image: "/img13.jpg",
      rating: 5,
      text: "FARAKKA has provided me with excellent education and opportunities. The faculty is highly supportive and the infrastructure is top-notch. I'm grateful for the holistic development I received here."
    },
    {
      name: "Priya Sharma",
      course: "MBA Marketing",
      year: "2022",
      image: "/img12.jpg",
      rating: 5,
      text: "The skill development programs and industry connections at FARAKKA helped me secure a great job immediately after graduation. The practical approach to learning is exceptional."
    },
    {
      name: "Rahul Singh",
      course: "Diploma in Engineering",
      year: "2023",
      image: "/img3.jpg",
      rating: 5,
      text: "Best decision of my life was choosing FARAKKA. The teachers are not just educators but mentors who guide you at every step. The campus life and learning environment are amazing."
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
          <h2 className="text-4xl font-bold text-green-600 mb-4">Student Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our accomplished alumni who have made their mark in various fields
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-green-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-20 h-20 border-4 border-yellow-400/20 rounded-full"
              />
              
              <div className="relative z-10">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-yellow-400 mb-4" />
                
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: index * 0.2 + i * 0.1 }}
                    >
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Student Info */}
                <div className="flex items-center">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-3 border-yellow-400 mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-green-600">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.course}</p>
                    <p className="text-xs text-yellow-600 font-semibold">Batch {testimonial.year}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;