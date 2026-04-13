import React from 'react';
import { motion } from 'framer-motion';

const Outcome = () => {
  const benefits = [
    {
      label: "Psychological Edge",
      title: "Reduced Performance Anxiety",
      desc: "By simulating the exact pressure of a high-stakes interview, the 'novelty' of the real event wears off, leaving only confidence."
    },
    {
      label: "Technical Depth",
      title: "Pillar-Based Feedback",
      desc: "We categorize your performance into Technical Depth, Communication Clarity, and Behavioral Alignment."
    },
    {
      label: "Strategic ROI",
      title: "Interview Readiness Score",
      desc: "Stop guessing if you are ready. Get a definitive readiness percentage based on current industry standards."
    }
  ];

  return (
    <section className="min-h-screen bg-white px-8 md:px-24 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Side: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-[10px] tracking-[0.4em] uppercase text-slate-400 mb-6 font-bold">
            The Result
          </h3>
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-slate-900 mb-12 leading-tight">
            Transcend the <br />
            <span className="font-serif italic text-slate-500">standard applicant.</span>
          </h2>

          <div className="space-y-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="group cursor-default">
                <p className="text-[9px] uppercase tracking-[0.3em] text-slate-400 mb-2 group-hover:text-slate-900 transition-colors">
                  {benefit.label}
                </p>
                <h4 className="text-lg font-medium text-slate-800 mb-2">
                  {benefit.title}
                </h4>
                <p className="text-sm text-slate-500 font-light leading-relaxed max-w-md">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Visual Outcome Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Decorative Glow */}
          <div className="absolute -inset-10 bg-slate-100/50 rounded-full blur-3xl -z-10" />
          
          <div className="bg-[#fafafa] border border-slate-100 rounded-3xl p-12 shadow-2xl shadow-slate-200/40">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-32 h-32 rounded-full border-2 border-slate-900 border-t-slate-200 animate-[spin_3s_linear_infinite]">
                 <span className="text-3xl font-serif text-slate-900 animate-none">94%</span>
              </div>
              <p className="text-[11px] uppercase tracking-[0.4em] text-slate-400 font-medium">
                Readiness Score
              </p>
              <div className="h-px w-12 bg-slate-200 mx-auto my-6" />
              <p className="text-xs text-slate-500 font-light italic italic-serif">
                "Subject shows exceptional clarity in <br /> System Design and Scalability."
              </p>
            </div>

            {/* Micro-Metrics */}
 <div className="mt-12 grid grid-cols-2 gap-4">
  {[
    { name: 'Confidence', value: '92%' },
    { name: 'Technical', value: '84%' },
    { name: 'Speed', value: '76%' },
    { name: 'Logic', value: '98%' }
  ].map((metric) => (
    <div key={metric.name} className="p-4 bg-white rounded-xl border border-slate-50">
      <div className="flex justify-between items-end mb-1">
        <p className="text-[9px] uppercase tracking-widest text-slate-400">
          {metric.name}
        </p>
        <span className="text-[8px] font-mono text-slate-300">
          {metric.value}
        </span>
      </div>
      
      <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: metric.value }} // Pulls the specific value from the object
          transition={{ 
            duration: 1.5, 
            delay: 0.5, 
            ease: "circOut" // A smoother, "classier" animation curve
          }}
          className="h-full bg-slate-900" 
        />
      </div>
    </div>
  ))}
</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Outcome;