import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation = () => {
  // Styles for the links to keep the JSX clean
  const baseStyle = "relative text-[11px] uppercase tracking-[0.2em] transition-all duration-300 pb-1";
  const activeStyle = "text-slate-900 font-medium";
  const inactiveStyle = "text-slate-400 hover:text-slate-600";

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-[#fafafa]/80 backdrop-blur-md border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <div className="text-sm font-semibold tracking-tighter text-slate-900">
          INTL. <span className="text-slate-400 font-light">v1.0</span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-8">
          {[
            { name: 'Practice', path: '/' },
            { name: 'History', path: '/history' },
            { name: 'Account', path: '/account' }
          ].map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => 
                `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {/* Minimalist active dot indicator */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeDot"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-slate-900 rounded-full"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
          
          <button className="ml-4 px-5 py-2 border border-slate-200 rounded-full text-[10px] uppercase tracking-[0.2em] text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-500">
            Sign In
          </button>
        </div>

      </div>
    </motion.nav>
  );
};

export default Navigation;