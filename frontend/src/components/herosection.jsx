import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  // Animation variants for staggered text entry
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  return (
    <section className="relative w-full pt-32 pb-20 px-8 flex flex-col items-center justify-center bg-[#fafafa]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl w-full text-center"
      >
        {/* Subtle Badge */}
        <motion.span 
          variants={itemVariants}
          className="inline-block px-3 py-1 rounded-full bg-slate-100 text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-6"
        >
          Next Generation Practice
        </motion.span>

        {/* Main Headline */}
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-light tracking-tight text-slate-900 mb-8 leading-[1.1]"
        >
          Master your narrative <br />
          <span className="font-serif italic text-slate-400">with precision.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p 
          variants={itemVariants}
          className="text-slate-500 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          An elevated interview experience powered by AI. We help you bridge the gap between 
          your experience and your dream role through adaptive, real-time feedback.
        </motion.p>

        {/* Primary Actions */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="px-8 py-4 bg-slate-900 text-white text-xs uppercase tracking-widest rounded-full hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">
            Get Started
          </button>
          <button className="px-8 py-4 bg-white border border-slate-200 text-slate-600 text-xs uppercase tracking-widest rounded-full hover:bg-slate-50 transition-all">
            View Methodology
          </button>
        </motion.div>

        {/* Decorative Background Element (Optional) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[600px] h-[600px] bg-gradient-to-tr from-slate-100 to-transparent rounded-full blur-3xl"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;