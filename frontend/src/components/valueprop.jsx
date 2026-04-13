import React from 'react';
import { motion } from 'framer-motion';

const ValueProp = () => {
  const features = [
    {
      title: "Semantic Resume Parsing",
      benefit: "Beyond Keywords",
      desc: "Our AI doesn't just look for buzzwords. It understands the context of your projects, mapping your actual impact to the specific requirements of the job description.",
      icon: "◈"
    },
    {
      title: "Adaptive Question Branching",
      benefit: "Dynamic Difficulty",
      desc: "If you answer a technical question perfectly, the AI pushes deeper into system design. If you struggle, it pivots to fundamental concepts to find your true knowledge ceiling.",
      icon: "◇"
    },
    {
      title: "Sentiment & Tone Analysis",
      benefit: "Soft Skill Precision",
      desc: "Get feedback on your confidence levels, speaking pace, and the clarity of your explanations. We help you sound like a lead, not just a coder.",
      icon: "○"
    }
  ];

  return (
    <section className="min-h-screen bg-[#fafafa] py-24 px-8 flex flex-col items-center justify-center">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="max-w-6xl w-full"
      >
        <div className="mb-20">
          <h2 className="text-[10px] tracking-[0.4em] uppercase text-slate-400 mb-4">Core Capabilities</h2>
          <h3 className="text-4xl font-light text-slate-900 leading-tight">
            Designed for the <span className="font-serif italic text-slate-500">modern engineer.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeInOut" }}
              className="p-10 bg-white border border-slate-100 rounded-3xl hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 group"
            >
              <div className="text-2xl text-slate-300 mb-6 group-hover:text-slate-900 transition-colors">
                {f.icon}
              </div>
              <h4 className="text-[10px] tracking-widest uppercase text-slate-400 mb-2 font-bold">
                {f.benefit}
              </h4>
              <h5 className="text-xl font-medium text-slate-900 mb-4">
                {f.title}
              </h5>
              <p className="text-slate-500 font-light text-sm leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ValueProp;