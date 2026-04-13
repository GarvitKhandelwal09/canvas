import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Login() {
  // Removed name state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }), // Now only sending email and password
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Success ✅");
        console.log("User info:", data);
        // localStorage.setItem("token", data.token);
      } else {
        setMessage(data.message || "Authentication failed ❌");
      }
    } catch (error) {
      setMessage("Connection error ❌");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col items-center justify-center p-6 font-sans text-slate-900">
      
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="absolute top-8 left-8"
      >
        <Link to="/" className="text-[10px] uppercase tracking-[0.3em] text-slate-400 hover:text-slate-900 transition-colors">
          ← Back
        </Link>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-[400px]"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl font-light tracking-tight mb-2">
            Welcome <span className="font-serif italic text-slate-400">Back</span>
          </h2>
          <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
            Secure Access to INTL.
          </p>
        </div>

        <div className="bg-white border border-slate-100 rounded-3xl p-10 shadow-sm">
          {message && (
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className={`mb-6 text-center text-[10px] uppercase tracking-widest font-bold ${message.includes('Success') ? 'text-emerald-500' : 'text-rose-500'}`}
            >
              {message}
            </motion.p>
          )}

          <form onSubmit={handleLogin} className="flex flex-col gap-6">
            {/* Email Field */}
            <div className="space-y-1">
              <label className="text-[9px] uppercase tracking-[0.2em] font-bold text-slate-400 ml-1">Email Address</label>
              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-slate-200 outline-none transition-all placeholder:text-slate-300"
                required
              />
            </div>

            {/* Password Field */}
            <div className="space-y-1">
              <label className="text-[9px] uppercase tracking-[0.2em] font-bold text-slate-400 ml-1">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-slate-200 outline-none transition-all placeholder:text-slate-300"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full bg-slate-900 text-white py-4 rounded-xl text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-slate-800 shadow-xl shadow-slate-200 transition-all duration-300 active:scale-[0.98]"
            >
             Login In
            </button>
          </form>
        </div>

        <p className="mt-8 text-center text-[11px] text-slate-400 tracking-wide">
          Don't have an account? <Link to="/signup" className="text-slate-900 font-semibold hover:underline">Create one</Link>
        </p>
      </motion.div>
    </div>
  );
}

export default Login;