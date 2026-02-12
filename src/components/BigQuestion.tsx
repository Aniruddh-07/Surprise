import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";

interface BigQuestionProps {
  onYes: () => void;
}

const teasingMessages = [
  "Soch lo ek baar phir 💭",
  "Hmmm… nahi manogi matlab? 👀",
  "Arre yaar please 🙏",
  "Maan jao na 🥺",
  "maan jao Toffee dunga 😋",
];

const BigQuestion = ({ onYes }: BigQuestionProps) => {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [msgIndex, setMsgIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const dodgeNo = useCallback(() => {
    setMsgIndex((p) => (p + 1) % teasingMessages.length);
    if (isMobile) return; // on mobile, just cycle messages
    const range = 200;
    setNoPos({
      x: (Math.random() - 0.5) * range,
      y: (Math.random() - 0.5) * range,
    });
  }, [isMobile]);

  return (
    <motion.section
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative z-10 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="glass-card rounded-3xl p-8 md:p-12 max-w-md text-center relative overflow-hidden">
        <motion.h2
          className="font-script text-4xl md:text-5xl text-valentine-rose mb-2 text-glow"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Will you be
        </motion.h2>
        <motion.h2
          className="font-script text-4xl md:text-5xl text-valentine-rose mb-8 text-glow"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        >
          my Valentine? 💘
        </motion.h2>

        {/* Teasing message */}
        {msgIndex >= 0 && (
          <motion.p
            key={msgIndex}
            className="font-dancing text-lg text-valentine-deep mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {teasingMessages[msgIndex]}
          </motion.p>
        )}

        <div className="flex justify-center gap-6 items-center relative min-h-[80px]">
          {/* YES button */}
          <motion.button
            onClick={onYes}
            className="px-8 py-3 bg-valentine-rose text-white font-dancing text-xl rounded-full shadow-lg hover:shadow-xl transition-shadow cursor-pointer z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Yes! 💖
          </motion.button>

          {/* NO button - dodges */}
          <motion.button
            onMouseEnter={!isMobile ? dodgeNo : undefined}
            onClick={isMobile ? dodgeNo : dodgeNo}
            className="px-8 py-3 bg-muted text-muted-foreground font-dancing text-xl rounded-full shadow cursor-pointer z-10"
            animate={{ x: noPos.x, y: noPos.y }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            No 😅
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default BigQuestion;
