import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PoemExperienceProps {
  onNext: () => void;
}

const poemLines = [
  "We didn't start with fireworks,",
  "or a scene from a movie…",
  "Just two awkward smiles,",
  "and a hug that missed its cue.",
  "",
  "But somewhere between the calls,",
  "the yapping, and the silence…",
  "I started looking forward",
  "to every little moment with you.",
  "",
  "So here's my little secret,",
  "wrapped in stars tonight —",
  "You make the ordinary days",
  "feel like something bright. ✨",
];

const PoemExperience = ({ onNext }: PoemExperienceProps) => {
  const [revealedLines, setRevealedLines] = useState(0);
  const allRevealed = revealedLines >= poemLines.length;

  const revealNext = () => {
    if (!allRevealed) {
      setRevealedLines((p) => Math.min(p + 3, poemLines.length));
    }
  };

  return (
    <motion.section
      className="min-h-screen flex items-center justify-center relative z-10 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Night sky background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(250,30%,12%)] to-[hsl(280,20%,18%)] overflow-hidden">
        {/* Stars */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-md text-center">
        <motion.h2
          className="font-script text-4xl md:text-5xl text-valentine-pink mb-8 text-glow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          A Little Poem 🌙
        </motion.h2>

        <div
          className="glass-card rounded-3xl p-6 md:p-8 mb-6 min-h-[280px] flex flex-col justify-center cursor-pointer"
          onClick={revealNext}
        >
          <AnimatePresence>
            {poemLines.slice(0, revealedLines).map((line, i) => (
              <motion.p
                key={i}
                className={`font-cormorant text-lg md:text-xl ${
                  line === "" ? "h-4" : "text-white/90"
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {line}
              </motion.p>
            ))}
          </AnimatePresence>

          {!allRevealed && (
            <motion.p
              className="text-white/40 text-sm mt-4 font-cormorant italic"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              tap to reveal…
            </motion.p>
          )}
        </div>

        {allRevealed && (
          <motion.button
            onClick={onNext}
            className="font-dancing text-lg px-6 py-3 rounded-full glass-card text-valentine-pink hover:scale-105 transition-transform cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileTap={{ scale: 0.95 }}
          >
            Continue 💫
          </motion.button>
        )}
      </div>
    </motion.section>
  );
};

export default PoemExperience;
