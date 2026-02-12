import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface YesCelebrationProps {
  onNext: () => void;
}

const YesCelebration = ({ onNext }: YesCelebrationProps) => {
  const [confetti, setConfetti] = useState<
    Array<{
      id: number;
      left: number;
      color: string;
      delay: number;
      size: number;
    }>
  >([]);

  useEffect(() => {
    const pieces = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      color: ["#F472B6", "#EC4899", "#A855F7", "#F59E0B", "#EF4444", "#FB923C"][
        Math.floor(Math.random() * 6)
      ],
      delay: Math.random() * 2,
      size: Math.random() * 10 + 6,
    }));
    setConfetti(pieces);
  }, []);

  return (
    <motion.section
      className="min-h-screen flex items-center justify-center relative z-10 px-4 overflow-hidden"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, type: "spring" }}
    >
      {/* Confetti */}
      {confetti.map((c) => (
        <motion.div
          key={c.id}
          className="absolute rounded-sm"
          style={{
            left: `${c.left}%`,
            top: "-5%",
            width: c.size,
            height: c.size,
            backgroundColor: c.color,
          }}
          animate={{
            y: ["0vh", "110vh"],
            rotate: [0, 720],
            opacity: [1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: c.delay,
            ease: "easeIn",
          }}
        />
      ))}

      <div className="glass-card rounded-3xl p-8 md:p-12 max-w-md text-center relative">
        <motion.div
          className="text-6xl mb-6"
          animate={{ scale: [1, 1.3, 1], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 1, repeat: 2 }}
        >
          🎉
        </motion.div>

        <motion.h2
          className="font-script text-4xl md:text-5xl text-valentine-rose mb-6 text-glow"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          Yayyyy! 💖
        </motion.h2>

        {/* Love letter */}
        <motion.div
          className="bg-valentine-warm-white/60 rounded-2xl p-6 mb-6 text-left border border-valentine-pink/20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="font-pinyon text-xl text-valentine-deep mb-3">
            Dear Aastha,
          </p>
          <p className="font-cormorant italic text-sm md:text-base text-foreground/80 leading-relaxed">
            I don't have a grand filmy speech. I just know that talking to you
            feels easy...
          </p>
          <p className="font-cormorant italic text-sm md:text-base text-foreground/80 leading-relaxed">
            Your laugh is my favourite notification, and somehow even our
            awkward moments manage to make us both blush..
          </p>
          <p className="font-cormorant italic text-sm md:text-base text-foreground/80 leading-relaxed mt-3">
            This is just the start… and I already like where it's going. 💕
          </p>
          <p className="font-pinyon text-lg text-valentine-rose mt-4 text-right">
            — Yours ❤️
          </p>
        </motion.div>

        <motion.button
          onClick={onNext}
          className="font-dancing text-lg px-6 py-3 rounded-full glass-card text-valentine-deep hover:scale-105 transition-transform cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          whileTap={{ scale: 0.95 }}
        >
          One more thing… 🌅
        </motion.button>
      </div>
    </motion.section>
  );
};

export default YesCelebration;
