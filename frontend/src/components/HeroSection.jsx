import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { ArrowDown, Play } from 'lucide-react';

const HeroSection = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Parallax Background Elements */}
      <Parallax speed={-20} className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full blur-3xl opacity-30"></div>
      </Parallax>
      
      <Parallax speed={-15} className="absolute inset-0">
        <div className="absolute top-60 right-10 w-96 h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full blur-3xl opacity-20"></div>
      </Parallax>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Subtitle */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Available for freelance work</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight tracking-tight"
          >
            <span className="block">Creative</span>
            <span className="block text-gray-600">Developer</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Crafting beautiful digital experiences with modern web technologies. 
            Specializing in React, TypeScript, and cutting-edge animations.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors duration-200 flex items-center space-x-2"
            >
              <span>View My Work</span>
              <ArrowDown size={20} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-medium border border-gray-200 hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-2"
            >
              <Play size={20} />
              <span>Watch Demo</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToNext}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
        >
          <ArrowDown size={24} />
        </motion.button>
      </motion.div>

      {/* Decorative Elements */}
      <Parallax speed={-10} className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <div className="w-1 h-32 bg-gradient-to-b from-gray-300 to-transparent rounded-full opacity-30"></div>
      </Parallax>
      
      <Parallax speed={-8} className="absolute top-1/3 right-8 transform -translate-y-1/2">
        <div className="w-4 h-4 bg-gray-300 rounded-full opacity-40"></div>
      </Parallax>
    </section>
  );
};

export default HeroSection;