import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { Code, Palette, Zap, Users, Award, Heart } from 'lucide-react';

const AboutSection = () => {
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

  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following best practices and modern standards."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive interfaces that provide exceptional user experiences."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency across all devices."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with teams and clients to deliver outstanding results."
    },
    {
      icon: Award,
      title: "Quality",
      description: "Delivering high-quality solutions that exceed expectations and requirements."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Bringing enthusiasm and dedication to every project and challenge."
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "5+", label: "Years Experience" },
    { number: "30+", label: "Happy Clients" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  return (
    <section id="about" className="relative py-20 bg-white overflow-hidden">
      {/* Parallax Background */}
      <Parallax speed={-5} className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full blur-3xl opacity-20"></div>
      </Parallax>
      
      <Parallax speed={-8} className="absolute inset-0">
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full blur-3xl opacity-15"></div>
      </Parallax>

      <div className="relative z-10 max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <div className="text-center">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full mb-6"
            >
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <span className="text-sm font-medium text-gray-600">About Me</span>
            </motion.div>
            
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Passionate About
              <span className="block text-gray-600">Digital Innovation</span>
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              I'm a full-stack developer with a passion for creating beautiful, functional, 
              and user-friendly digital experiences. With expertise in modern web technologies, 
              I help businesses and individuals bring their ideas to life.
            </motion.p>
          </div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="group"
              >
                <div className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300 hover:border-gray-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-gray-900 transition-colors duration-300">
                      <feature.icon 
                        size={24} 
                        className="text-gray-600 group-hover:text-white transition-colors duration-300" 
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;