import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const questions = [
  "Tell me about yourself.",
  "What is your strongest project and why?",
  "Explain a challenge you faced and how you solved it.",
  "Why should we hire you?"
];

const PracticePage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Welcome to your AI interview. I will be evaluating your responses based on clarity, logic, and technical depth. Let's begin." }
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const handleSend = () => {
    if (!input.trim() || timeLeft <= 0) return;

    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      setTyping(false);
      const next = step + 1;

      if (next < questions.length) {
        setStep(next);
        setMessages((prev) => [
          ...prev,
          { role: "bot", text: `Understood. Moving to the next area: ${questions[next]}` }
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "bot", text: "Interview complete. Analyzing your performance now..." }
        ]);
      }
    }, 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-screen bg-[#F8FAFC] flex overflow-hidden font-sans text-slate-900"
    >
      
      {/* LEFT: SIDEBAR */}
      <div className="hidden lg:flex w-1/3 flex-col border-r border-slate-200 bg-white p-8">
        <div className="flex items-center gap-2 mb-12">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold">Session Active</span>
        </div>

        <div className="flex-1 flex flex-col">
          {/* Visual Interviewer Dot Matrix */}
          <div className="relative aspect-video bg-slate-950 rounded-3xl overflow-hidden shadow-2xl mb-8 flex items-center justify-center border-4 border-white">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10" />
            
            <div className="absolute inset-0 grid grid-cols-10 gap-2 p-8 opacity-40 content-center justify-items-center">
              {Array.from({ length: 40 }).map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    scale: typing ? [1, 1.5, 1] : [1, 1.1, 1],
                    opacity: typing ? [0.2, 0.8, 0.2] : [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: typing ? 0.8 : 3,
                    repeat: Infinity,
                    delay: i * 0.05,
                  }}
                  className="w-1 h-1 bg-white rounded-full"
                />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <motion.div
              key={step}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-2">Current Focus</p>
              <h3 className="text-xl font-light leading-snug text-slate-800">
                {step < questions.length ? questions[step] : "Evaluation Phase"}
              </h3>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-100">
              <div>
                <p className="text-[9px] uppercase tracking-widest text-slate-400">Progress</p>
                <p className="text-lg font-serif italic">{step + 1} of {questions.length}</p>
              </div>
              <motion.div
                animate={timeLeft < 60 ? { scale: [1, 1.05, 1] } : {}}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                <p className="text-[9px] uppercase tracking-widest text-slate-400">Time Left</p>
                <p className={`text-lg font-mono ${timeLeft < 60 ? "text-rose-500 font-bold" : "text-slate-800"}`}>
                  {formatTime(timeLeft)}
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        <button 
          onClick={() => navigate("/")}
          className="mt-8 py-4 border border-slate-200 rounded-2xl text-[11px] uppercase tracking-widest hover:bg-rose-50 hover:text-rose-600 hover:border-rose-100 transition-all active:scale-95"
        >
          Terminate Session
        </button>
      </div>

      {/* RIGHT: CHAT AREA */}
      <div className="flex-1 flex flex-col h-full bg-slate-50 lg:bg-[#F8FAFC]">
        <div className="flex-1 overflow-y-auto px-6 py-12 md:px-20 space-y-8">
          <AnimatePresence mode="popLayout">
            {messages.map((msg, i) => (
              <motion.div
                key={`${i}-${msg.role}`}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className={`
                  max-w-[85%] md:max-w-[70%] px-6 py-4 text-sm leading-relaxed shadow-sm
                  ${msg.role === "user" 
                    ? "bg-slate-900 text-slate-100 rounded-2xl rounded-tr-none" 
                    : "bg-white border border-slate-100 text-slate-700 rounded-2xl rounded-tl-none"}
                `}>
                  {msg.text}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {typing && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="flex gap-2 items-center px-2"
            >
              <div className="flex gap-1">
                {[0, 1, 2].map((dot) => (
                  <motion.div
                    key={dot}
                    animate={{ opacity: [0.2, 1, 0.2] }}
                    transition={{ repeat: Infinity, duration: 1.2, delay: dot * 0.2 }}
                    className="w-1.5 h-1.5 bg-slate-400 rounded-full"
                  />
                ))}
              </div>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-medium">AI Evaluating</span>
            </motion.div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* INPUT DOCK */}
        <motion.div 
          layout
          className="p-6 md:p-12 md:pt-0"
        >
          <div className="max-w-4xl mx-auto relative">
            <input
              value={input}
              disabled={timeLeft <= 0}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your response..."
              className="w-full bg-white border border-slate-200 rounded-3xl px-8 py-6 text-sm outline-none focus:ring-4 focus:ring-slate-900/5 transition-all shadow-xl shadow-slate-200/50"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSend}
              disabled={!input.trim() || timeLeft <= 0}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white px-6 py-3 rounded-2xl text-[10px] uppercase tracking-widest font-bold disabled:opacity-20 disabled:grayscale transition-all"
            >
              Send
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PracticePage;