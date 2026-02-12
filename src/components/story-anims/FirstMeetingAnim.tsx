import { motion } from "framer-motion";

const FirstMeetingAnim = () => (
  <div className="relative flex items-center justify-center gap-2">
    {/* Left hand */}
    <motion.div
      className="text-4xl"
      animate={{
        x: [0, 20, 15, 10],
        rotate: [0, -10, 5, 0],
      }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
    >
      🤚
    </motion.div>

    {/* Right hand */}
    <motion.div
      className="text-4xl"
      animate={{
        x: [0, -20, -15, -10],
        rotate: [0, 10, -5, 0],
      }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
    >
      🤚
    </motion.div>

    {/* Blush */}
    <motion.span
      className="absolute -bottom-2 text-2xl"
      animate={{ scale: [0, 1, 0.8, 1], opacity: [0, 1, 0.8, 1] }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 1.5 }}
    >
      😊
    </motion.span>
  </div>
);

export default FirstMeetingAnim;
