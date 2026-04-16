import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [resume, setResume] = useState(null);
  const [jd, setJd] = useState("");
  const [loading, setLoading] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const handleBeginSession = async () => {
    if (!resume || !jd) {
      alert("Please provide both a resume and a job description.");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", resume); // MUST match multer field name
      formData.append("jd", jd);

      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      console.log("Upload success:", data);

      setLoading(false);

      setTimeout(() => {
        navigate("/practice");
      }, 1500);

    } catch (error) {
      console.error("Upload error:", error);
      setLoading(false);
      alert("Upload failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-800 flex flex-col items-center justify-center p-8 font-sans">
      <motion.div
        variants={fadeIn}
        initial="initial"
        animate="animate"
        className="w-full max-w-2xl text-center"
      >
        <header className="mb-12">
          <h1 className="text-3xl font-light tracking-tight text-slate-900 mb-3">
            Interview <span className="font-semibold text-slate-500">Intelligence</span>
          </h1>
          <p className="text-slate-400 font-light leading-relaxed max-w-md mx-auto">
            Bridge the gap between your resume and the target role using generative AI.
          </p>
        </header>

        <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm text-left">
          <div className="space-y-6">

            {/* Resume Upload */}
            <div>
              <label className="text-xs uppercase tracking-widest font-semibold text-slate-400 mb-2 block">
                Resume (PDF)
              </label>
              <input
                type="file"
                accept=".pdf"
                onChange={(e) => setResume(e.target.files[0])}
                className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-slate-50 file:text-slate-600 hover:file:bg-slate-100 transition-all cursor-pointer"
              />
            </div>

            {/* JD Input */}
            <div>
              <label className="text-xs uppercase tracking-widest font-semibold text-slate-400 mb-2 block">
                Target Role / JD
              </label>
              <textarea
                value={jd}
                onChange={(e) => setJd(e.target.value)}
                placeholder="Paste the job requirements here..."
                className="w-full bg-slate-50 border-none rounded-lg p-3 text-sm focus:ring-1 focus:ring-slate-200 outline-none transition-all h-28 resize-none"
              />
            </div>

            {/* Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <select className="flex-1 bg-slate-50 border-none rounded-lg p-3 text-sm text-slate-600 outline-none">
                <option>Full Stack</option>
                <option>Frontend</option>
                <option>Backend</option>
                <option>DSA / Problem Solving</option>
              </select>

              <button
                onClick={handleBeginSession}
                disabled={loading}
                className="px-8 py-3 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 disabled:opacity-50"
              >
                {loading ? "Preparing Session..." : "Begin Session"}
              </button>
            </div>

          </div>
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 2 }}
          className="mt-16 flex flex-wrap justify-center gap-8 border-t border-slate-100 pt-8"
        >
          {["Contextual Analysis", "Real-time Feedback", "Adaptive Logic"].map((feature) => (
            <span
              key={feature}
              className="text-[11px] uppercase tracking-[0.2em] text-slate-300 font-medium"
            >
              {feature}
            </span>
          ))}
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Home;