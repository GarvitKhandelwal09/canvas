import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-100 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Copyright */}
        <p className="text-[10px] tracking-[0.3em] text-slate-400 uppercase font-light">
          © 2026 Intl. Systems. Developed for excellence.
        </p>

        {/* Links */}
        <div className="flex gap-10">
          <a href="#" className="text-[10px] tracking-[0.2em] text-slate-400 hover:text-slate-900 transition-colors uppercase font-medium">
            Twitter
          </a>
          <a href="#" className="text-[10px] tracking-[0.2em] text-slate-400 hover:text-slate-900 transition-colors uppercase font-medium">
            Privacy
          </a>
          <a href="#" className="text-[10px] tracking-[0.2em] text-slate-400 hover:text-slate-900 transition-colors uppercase font-medium">
            Terms
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;