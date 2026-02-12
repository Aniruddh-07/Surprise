import { motion } from "framer-motion";

interface LandingScreenProps {
  onBegin: () => void;
}

const LandingScreen = ({ onBegin }: LandingScreenProps) => {
  return (
    <motion.section
      className="min-h-screen flex items-center justify-center relative z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center px-6 max-w-lg">
        <motion.h1
          className="font-script text-5xl md:text-7xl text-valentine-rose mb-6 text-glow"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Hey Aastha ❤️
        </motion.h1>

        <motion.p
          className="font-playfair italic text-lg md:text-xl text-foreground/80 mb-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          I know we just started our story…
        </motion.p>

        <motion.p
          className="font-playfair italic text-lg md:text-xl text-foreground/80 mb-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          but I made something for you 🌼
        </motion.p>

        <motion.button
          onClick={onBegin}
          className="font-dancing text-xl md:text-2xl px-8 py-4 rounded-full glass-card text-valentine-deep hover:scale-105 transition-transform animate-pulse-glow cursor-pointer"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          Click to Begin 💌
        </motion.button>
      </div>
    </motion.section>
  );
};

export default LandingScreen;
