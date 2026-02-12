import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FirstMeetingAnim from "./story-anims/FirstMeetingAnim";
import GoodbyeHugAnim from "./story-anims/GoodbyeHugAnim";
import YapMachineAnim from "./story-anims/YapMachineAnim";
import QuestionVaultAnim from "./story-anims/QuestionVaultAnim";
import OurCallsAnim from "./story-anims/OurCallsAnim";

interface StoryCarouselProps {
  onComplete: () => void;
}

const slides = [
  {
    heading: "The First Meeting",
    text: "The day we met…\nI went for a handshake…\nYou didn't saw…\nAnd somehow…\nit turned into an awkward half hug 😂",
    Anim: GoodbyeHugAnim,
  },
  {
    heading: "The Goodbye Hug",
    text: "Later, when I told you about it…\nYou smiled and said —\nyou did the SAME awkward hug while leaving too 😂",
    Anim: GoodbyeHugAnim,
  },
  {
    heading: "Yap Machine™",
    text: "You always have a story…\nActually, correction —\nyou ALWAYS have stories.\nFulltime unlimited podcast installed 🤪",
    Anim: YapMachineAnim,
  },
  {
    heading: "The Question Vault",
    text: "When we talked about my past…\nyou asked everything honestly.\nAnd when I asked — 'Anything else?'\nyou said —\n'Not now… I'll remember when the phone is down.'",
    Anim: QuestionVaultAnim,
  },
  {
    heading: "Our Calls",
    text: "I disappear sometimes…\nBut when we talk again…\nwe talk for HOURS.",
    Anim: OurCallsAnim,
  },
];

const StoryCarousel = ({ onComplete }: StoryCarouselProps) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const goNext = useCallback(() => {
    if (current === slides.length - 1) {
      onComplete();
      return;
    }
    setDirection(1);
    setCurrent((p) => p + 1);
  }, [current, onComplete]);

  const goPrev = useCallback(() => {
    if (current === 0) return;
    setDirection(-1);
    setCurrent((p) => p - 1);
  }, [current]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev]);

  // Swipe support
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) =>
    setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (diff > 50) goNext();
    if (diff < -50) goPrev();
    setTouchStart(null);
  };

  const slide = slides[current];
  const AnimComponent = slide.Anim;

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center relative z-10 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Progress indicator */}
      <div className="flex gap-2 mb-8">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === current
                ? "w-8 bg-valentine-rose"
                : "w-3 bg-valentine-pink/30"
            }`}
          />
        ))}
      </div>

      <div className="relative w-full max-w-md md:max-w-lg">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="glass-card rounded-3xl p-6 md:p-8"
          >
            <h2 className="font-script text-3xl md:text-4xl text-valentine-rose mb-4 text-center">
              {slide.heading}
            </h2>

            <div className="flex justify-center mb-4">
              <div className="w-48 h-32 md:w-56 md:h-36 flex items-center justify-center">
                <AnimComponent />
              </div>
            </div>

            <p className="font-cormorant italic text-base md:text-lg text-foreground/80 text-center whitespace-pre-line leading-relaxed">
              {slide.text}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex gap-6 mt-8">
        {current > 0 && (
          <button
            onClick={goPrev}
            className="glass-card rounded-full p-3 hover:scale-110 transition-transform cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 text-valentine-deep" />
          </button>
        )}
        <button
          onClick={goNext}
          className="glass-card rounded-full p-3 hover:scale-110 transition-transform cursor-pointer"
        >
          <ChevronRight className="w-5 h-5 text-valentine-deep" />
        </button>
      </div>
    </motion.section>
  );
};

export default StoryCarousel;
