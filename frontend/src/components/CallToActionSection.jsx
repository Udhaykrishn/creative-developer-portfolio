import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

const CallToActionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@portfolio.com",
      href: "mailto:hello@portfolio.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "San Francisco, CA",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Parallax Background */}
      <Parallax speed={-3} className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full blur-3xl opacity-20"></div>
      </Parallax>
      
      <Parallax speed={-6} className="absolute inset-0">
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full blur-3xl opacity-15"></div>
      </Parallax>

      <div className="relative z-10 max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Main CTA Section */}
          <div className="text-center">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 mb-6"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Let's work together</span>
            </motion.div>
            
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Ready to Start
              <span className="block text-gray-600">Your Next Project?</span>
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10"
            >
              I'm always excited to work on new projects and help bring your ideas to life. 
              Let's discuss how we can create something amazing together.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors duration-200 flex items-center space-x-2"
              >
                <span>Start a Project</span>
                <ArrowRight size={20} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-medium border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
              >
                Download CV
              </motion.button>
            </motion.div>
          </div>

          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {contactInfo.map((contact, index) => (
              <motion.a
                key={contact.title}
                variants={itemVariants}
                href={contact.href}
                className="group block text-center p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300 hover:border-gray-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-gray-900 transition-colors duration-300">
                    <contact.icon 
                      size={24} 
                      className="text-gray-600 group-hover:text-white transition-colors duration-300" 
                    />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {contact.title}
                </h3>
                <p className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  {contact.value}
                </p>
              </motion.a>
            ))}
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to my newsletter for the latest updates on new projects, 
              web development tips, and industry insights.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition-colors duration-200"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionSection;