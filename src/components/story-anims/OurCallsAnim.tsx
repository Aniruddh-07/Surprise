import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const OurCallsAnim = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => (s >= 10800 ? 0 : s + 47)); // fast forward to 3hrs
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  const fmt = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="flex flex-col items-center gap-3">
      {/* Phone icon with glow */}
      <motion.div
        className="text-4xl"
        animate={{
          filter: [
            "drop-shadow(0 0 5px hsl(340 82% 76% / 0.3))",
            "drop-shadow(0 0 20px hsl(340 82% 76% / 0.8))",
            "drop-shadow(0 0 5px hsl(340 82% 76% / 0.3))",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        📞
      </motion.div>

      {/* Call timer */}
      <motion.div
        className="font-mono text-lg text-valentine-rose font-bold tracking-wider"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        {fmt(hrs)}:{fmt(mins)}:{fmt(secs)}
      </motion.div>
    </div>
  );
};

export default OurCallsAnim;
