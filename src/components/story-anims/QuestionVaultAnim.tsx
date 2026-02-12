import { motion } from "framer-motion";

const questions = ["Why?", "When?", "How?", "Really?", "Tell me…"];

const QuestionVaultAnim = () => (
  <div className="relative flex items-center justify-center w-full h-full">
    {/* Vault door */}
    <motion.div
      className="text-5xl"
      animate={{ rotateY: [0, 0, -90, -90, 0] }}
      transition={{ duration: 4, repeat: Infinity }}
    >
      🔐
    </motion.div>

    {/* Floating questions */}
    {questions.map((q, i) => (
      <motion.span
        key={i}
        className="absolute text-xs font-playfair italic text-valentine-deep/60"
        style={{
          top: `${10 + (i * 18)}%`,
          left: `${15 + (i % 3) * 25}%`,
        }}
        animate={{
          y: [0, -10, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: i * 0.6 + 1,
        }}
      >
        {q}
      </motion.span>
    ))}
  </div>
);

export default QuestionVaultAnim;
