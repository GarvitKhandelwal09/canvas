import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import Login from './login';
const HeroSection = () => {
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
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  const navigate = useNavigate();

   const handleGetStarted = () => {
    navigate("/login");
  };

  return (
    <section className="min-h-screen relative w-full pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center bg-[#fafafa] overflow-hidden">

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl w-full text-center"
      >

        {/* Badge */}
        <motion.span
          variants={itemVariants}
          className="inline-block px-3 py-1 rounded-full bg-slate-100 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-slate-500 mb-4 sm:mb-6"
        >
          Next Generation Practice
        </motion.span>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-slate-900 mb-6 sm:mb-8 leading-tight sm:leading-[1.1]"
        >
          Master your narrative <br />
          <span className="font-serif italic text-slate-400">
            with precision.
          </span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          variants={itemVariants}
          className="text-slate-500 text-sm sm:text-base md:text-lg lg:text-xl font-light max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2 sm:px-0"
        >
          An elevated interview experience powered by AI. We help you bridge the gap between
          your experience and your dream role through adaptive, real-time feedback.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0"
        >
          
          <button onClick={handleGetStarted} className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-slate-900 text-white text-[10px] sm:text-xs uppercase tracking-widest rounded-full hover:bg-slate-800 transition-all shadow-lg sm:shadow-xl shadow-slate-200">
            Get Started
          </button>

          <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white border border-slate-200 text-slate-600 text-[10px] sm:text-xs uppercase tracking-widest rounded-full hover:bg-slate-50 transition-all">
            View Methodology
          </button>
        </motion.div>

        {/* Background glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ duration: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[300px] sm:w-[450px] md:w-[600px] h-[300px] sm:h-[450px] md:h-[600px] bg-gradient-to-tr from-slate-100 to-transparent rounded-full blur-3xl"
        />

      </motion.div>
    </section>
  );
};

export default HeroSection;