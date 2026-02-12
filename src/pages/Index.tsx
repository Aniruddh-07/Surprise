import { useState, useRef, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import FloatingHearts from "@/components/FloatingHearts";
import LandingScreen from "@/components/LandingScreen";
import StoryCarousel from "@/components/StoryCarousel";
import PresentMoment from "@/components/PresentMoment";
import PoemExperience from "@/components/PoemExperience";
import GoogleSearch from "@/components/GoogleSearch";
import BigQuestion from "@/components/BigQuestion";
import YesCelebration from "@/components/YesCelebration";
import FutureTease from "@/components/FutureTease";
import { Volume2, VolumeX } from "lucide-react";

type Section =
  | "landing"
  | "story"
  | "present"
  | "poem"
  | "google"
  | "question"
  | "celebration"
  | "future";

const Index = () => {
  const [section, setSection] = useState<Section>("landing");
  const [muted, setMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const startMusic = useCallback(() => {
    if (!audioRef.current) {
      const audio = new Audio(
        "https://cdn.pixabay.com/download/audio/2022/10/30/audio_946b4f2e7b.mp3",
      );
      audio.loop = true;
      audio.volume = 0.3;
      audioRef.current = audio;
    }
    audioRef.current.play().catch(() => {});
  }, []);

  const toggleMute = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setMuted(!muted);
    }
  }, [muted]);

  const handleBegin = () => {
    startMusic();
    setSection("story");
  };

  return (
    <div className="valentine-gradient min-h-screen relative overflow-hidden">
      <FloatingHearts />

      {/* Mute toggle */}
      {section !== "landing" && (
        <button
          onClick={toggleMute}
          className="fixed top-4 right-4 z-50 glass-card rounded-full p-3 hover:scale-110 transition-transform cursor-pointer"
          aria-label={muted ? "Unmute" : "Mute"}
        >
          {muted ? (
            <VolumeX className="w-5 h-5 text-valentine-deep" />
          ) : (
            <Volume2 className="w-5 h-5 text-valentine-deep" />
          )}
        </button>
      )}

      <AnimatePresence mode="wait">
        {section === "landing" && (
          <LandingScreen key="landing" onBegin={handleBegin} />
        )}
        {section === "story" && (
          <StoryCarousel key="story" onComplete={() => setSection("present")} />
        )}
        {section === "present" && (
          <PresentMoment key="present" onNext={() => setSection("poem")} />
        )}
        {section === "poem" && (
          <PoemExperience key="poem" onNext={() => setSection("google")} />
        )}
        {section === "google" && (
          <GoogleSearch key="google" onNext={() => setSection("question")} />
        )}
        {section === "question" && (
          <BigQuestion key="question" onYes={() => setSection("celebration")} />
        )}
        {section === "celebration" && (
          <YesCelebration
            key="celebration"
            onNext={() => setSection("future")}
          />
        )}
        {section === "future" && <FutureTease key="future" />}
      </AnimatePresence>
    </div>
  );
};

export default Index;
