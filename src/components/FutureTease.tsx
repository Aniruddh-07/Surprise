import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FutureTease = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [calendarDone, setCalendarDone] = useState(false);

  const handleClick = () => {
    setShowCalendar(true);
    setTimeout(() => setCalendarDone(true), 3000);
  };

  return (
    <motion.section
      className="min-h-screen flex items-center justify-center relative z-10 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="glass-card rounded-3xl p-8 md:p-12 max-w-md text-center">
        <motion.h2
          className="font-script text-3xl md:text-4xl text-valentine-rose mb-4 text-glow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          The Future… 🌅
        </motion.h2>

        <motion.p
          className="font-cormorant italic text-base md:text-lg text-foreground/80 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Our first photos together…
          <br />
          <span className="text-valentine-rose font-bold">Loading soon… 📷</span>
        </motion.p>

        <AnimatePresence>
          {!showCalendar && (
            <motion.button
              onClick={handleClick}
              className="font-dancing text-lg px-6 py-3 rounded-full glass-card text-valentine-deep hover:scale-105 transition-transform cursor-pointer animate-pulse-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              exit={{ opacity: 0 }}
            >
              See you after exams ❤️
            </motion.button>
          )}
        </AnimatePresence>

        {/* Calendar flip animation */}
        {showCalendar && (
          <div className="mt-6">
            {!calendarDone ? (
              <div className="flex flex-wrap justify-center gap-2">
                {Array.from({ length: 12 }, (_, i) => (
                  <motion.div
                    key={i}
                    className="w-10 h-10 rounded-lg bg-valentine-blush flex items-center justify-center text-sm font-playfair text-valentine-deep"
                    initial={{ rotateX: 0, opacity: 1 }}
                    animate={{ rotateX: 180, opacity: 0 }}
                    transition={{ delay: i * 0.2, duration: 0.4 }}
                  >
                    {i + 1}
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                className="flex flex-col items-center gap-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <motion.div
                  className="w-20 h-20 rounded-2xl bg-valentine-rose/20 border-2 border-valentine-rose flex items-center justify-center"
                  animate={{
                    boxShadow: [
                      "0 0 10px hsl(340 82% 76% / 0.3)",
                      "0 0 30px hsl(340 82% 76% / 0.6)",
                      "0 0 10px hsl(340 82% 76% / 0.3)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-3xl">❤️</span>
                </motion.div>

                <p className="font-script text-2xl text-valentine-rose text-glow">
                  Soon… 💕
                </p>

                <p className="font-cormorant italic text-sm text-muted-foreground">
                  The best chapters are yet to come.
                </p>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default FutureTease;
