import { motion } from "framer-motion";

const GoodbyeHugAnim = () => (
  <div className="relative flex items-center justify-center">
    {/* Two figures hugging awkwardly mirrored */}
    <motion.span
      className="text-5xl"
      animate={{ x: [0, 10, 5], rotate: [0, 5, -3, 0] }}
      transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 0.5 }}
    >
      🫂
    </motion.span>

    {/* Sparkles around */}
    {[...Array(5)].map((_, i) => (
      <motion.span
        key={i}
        className="absolute text-lg text-valentine-gold"
        style={{
          top: `${20 + Math.sin(i * 1.2) * 30}%`,
          left: `${20 + Math.cos(i * 1.5) * 40}%`,
        }}
        animate={{ opacity: [0, 1, 0], scale: [0, 1.2, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: i * 0.3,
        }}
      >
        ✨
      </motion.span>
    ))}
  </div>
);

export default GoodbyeHugAnim;
