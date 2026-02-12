import { motion } from "framer-motion";

interface PresentMomentProps {
  onNext: () => void;
}

const PresentMoment = ({ onNext }: PresentMomentProps) => {
  return (
    <motion.section
      className="min-h-screen flex items-center justify-center relative z-10 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="glass-card rounded-3xl p-8 md:p-12 max-w-md text-center">
        <motion.div
          className="text-5xl mb-6"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          📚
        </motion.div>

        <h2 className="font-script text-3xl md:text-4xl text-valentine-rose mb-4">
          Right Now…
        </h2>

        <p className="font-cormorant italic text-base md:text-lg text-foreground/80 mb-6 leading-relaxed">
          I know exams are being annoying right now…
          <br />
          but just imagine —
          <br />
          after all this…
        </p>

        <p className="font-playfair italic text-sm text-muted-foreground mb-6">
          All the fun and memories… coming soon ✨
        </p>

        <motion.button
          onClick={onNext}
          className="font-dancing text-lg px-6 py-3 rounded-full glass-card text-valentine-deep hover:scale-105 transition-transform cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Continue ✨
        </motion.button>
      </div>
    </motion.section>
  );
};

export default PresentMoment;
