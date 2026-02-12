import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface GoogleSearchProps {
  onNext: () => void;
}

const GoogleSearch = ({ onNext }: GoogleSearchProps) => {
  const query = "Who talks a lot and is still adorable";
  const [typed, setTyped] = useState("");
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= query.length) {
        setTyped(query.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowResult(true), 600);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="min-h-screen flex items-center justify-center relative z-10 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full max-w-xl">
        {/* Google-style logo */}
        <div className="text-center mb-6">
          <span className="text-3xl font-bold tracking-tight">
            <span style={{ color: "#4285F4" }}>G</span>
            <span style={{ color: "#EA4335" }}>o</span>
            <span style={{ color: "#FBBC05" }}>o</span>
            <span style={{ color: "#4285F4" }}>g</span>
            <span style={{ color: "#34A853" }}>l</span>
            <span style={{ color: "#EA4335" }}>e</span>
          </span>
        </div>

        {/* Search bar */}
        <div className="bg-white rounded-full shadow-lg border border-gray-200 px-5 py-3 flex items-center gap-3 mb-6">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" strokeWidth="2" />
            <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="text-gray-800 text-sm md:text-base font-sans flex-1">
            {typed}
            <span className="animate-pulse text-gray-400">|</span>
          </span>
        </div>

        {/* Search result */}
        {showResult && (
          <motion.div
            className="bg-white rounded-xl shadow-md p-5 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs text-green-700 font-sans mb-1">
              www.universe.com/best-people
            </p>
            <h3 className="text-lg text-blue-700 font-sans font-medium mb-2 hover:underline cursor-pointer">
              Best Girlfriend Material — Aastha
            </h3>
            <p className="text-sm text-gray-600 font-sans leading-relaxed">
              Verified by excessive talking, honesty, cute awkward hugs, and the
              Endless Chat Expansion Pack. Known side effects include: smiling
              for no reason, re-reading chats, and wanting to call at 2 AM
              during exams 🥲
            </p>

            <motion.button
              onClick={onNext}
              className="mt-6 font-dancing text-lg px-6 py-3 rounded-full glass-card text-valentine-deep hover:scale-105 transition-transform cursor-pointer block mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              whileTap={{ scale: 0.95 }}
            >
              Continue 💕
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default GoogleSearch;
