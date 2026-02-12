import { motion } from "framer-motion";

const bubbles = ["omg listen na…", "so then right…", "wait wait wait…"];

const YapMachineAnim = () => (
  <div className="flex flex-col gap-2 w-full">
    {bubbles.map((text, i) => (
      <motion.div
        key={i}
        className={`px-3 py-1.5 rounded-2xl text-xs font-cormorant italic max-w-[70%] ${
          i % 2 === 0
            ? "bg-valentine-pink/30 self-start rounded-bl-sm"
            : "bg-valentine-lavender/50 self-end rounded-br-sm"
        }`}
        initial={{ opacity: 0, y: 10, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: i * 0.8, duration: 0.5 }}
      >
        {text}
      </motion.div>
    ))}

    {/* Typing indicator */}
    <motion.div
      className="flex gap-1 px-3 py-2 bg-valentine-pink/20 rounded-2xl rounded-bl-sm self-start w-fit"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.4 }}
    >
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-valentine-rose"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </motion.div>
  </div>
);

export default YapMachineAnim;
