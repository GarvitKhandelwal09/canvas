import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeIn" }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-800 flex flex-col items-center justify-center p-8 font-sans">
      
      <motion.div 
        variants={fadeIn}
        initial="initial"
        animate="animate"
        className="w-full max-w-2xl text-center"
      >
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-3xl font-light tracking-tight text-slate-900 mb-3">
            Interview <span className="font-semibold text-slate-500">Intelligence</span>
          </h1>
          <p className="text-slate-400 font-light leading-relaxed max-w-md mx-auto">
            Refine your professional narrative through AI-driven mock sessions. 
            Simple, focused, and effective.
          </p>
        </header>

        {/* Input Card */}
        <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm text-left">
          
          <div className="space-y-6">
            {/* Resume Upload */}
            <div>
              <label className="text-xs uppercase tracking-widest font-semibold text-slate-400 mb-2 block">
                Resume
              </label>
              <input
                type="file"
                className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-slate-50 file:text-slate-600 hover:file:bg-slate-100 transition-all cursor-pointer"
              />
            </div>

            {/* Job Description */}
            <div>
              <label className="text-xs uppercase tracking-widest font-semibold text-slate-400 mb-2 block">
                Target Role
              </label>
              <textarea
                placeholder="Paste the job description..."
                className="w-full bg-slate-50 border-none rounded-lg p-3 text-sm focus:ring-1 focus:ring-slate-200 outline-none transition-all h-28 resize-none"
              />
            </div>

            {/* Select & Action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <select className="flex-1 bg-slate-50 border-none rounded-lg p-3 text-sm text-slate-600 outline-none">
                <option>Frontend</option>
                <option>Backend</option>
                <option>System Design</option>
                <option>DSA</option>
                <option>Full Stack</option>
              </select>
              
              <button className="px-8 py-3 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200">
                Begin Session
              </button>
            </div>
          </div>
        </div>

        {/* Minimalist Features Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 2 }}
          className="mt-16 flex flex-wrap justify-center gap-8 border-top border-slate-100 pt-8"
        >
          {['Contextual Analysis', 'Real-time Feedback', 'Adaptive Logic'].map((feature) => (
            <span key={feature} className="text-[11px] uppercase tracking-[0.2em] text-slate-300 font-medium">
              {feature}
            </span>
          ))}
        </motion.div>
      </motion.div>

    </div>
  );
};

export default Home;