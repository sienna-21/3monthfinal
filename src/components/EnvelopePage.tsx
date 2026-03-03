import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import vintageBg from "../assets/vintage-bg.jpg";

interface EnvelopePageProps {
  onComplete: () => void;
}

const EnvelopePage = ({ onComplete }: EnvelopePageProps) => {
  const [opened, setOpened] = useState(false);
  const [showHearts, setShowHearts] = useState(false);

  const hearts = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        delay: Math.random() * 1.2,
        x: Math.random() * 100,
        size: Math.random() * 18 + 14,
        drift: (Math.random() - 0.5) * 60,
      })),
    []
  );

  const handleSealClick = () => {
    if (opened) return;
    setOpened(true);
    setTimeout(() => setShowHearts(true), 600);
    setTimeout(() => onComplete(), 4500);
  };

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${vintageBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0" style={{ background: "hsla(350, 30%, 90%, 0.4)", backdropFilter: "blur(2px)" }} />

      {/* Envelope */}
      <motion.div
        className="relative z-10 cursor-pointer"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div
          className="relative w-[320px] h-[220px] md:w-[450px] md:h-[300px] rounded-lg overflow-hidden"
          style={{
            background: "linear-gradient(145deg, hsl(350, 35%, 88%), hsl(345, 30%, 82%))",
            boxShadow: "0 20px 60px hsla(345, 40%, 30%, 0.3), inset 0 1px 0 hsla(0, 0%, 100%, 0.4)",
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-4 opacity-40"
            style={{ background: "repeating-linear-gradient(90deg, transparent, transparent 6px, hsl(345, 30%, 75%) 6px, hsl(345, 30%, 75%) 8px, transparent 8px, transparent 14px)" }}
          />
          <div className="absolute bottom-0 left-0 right-0 h-4 opacity-40"
            style={{ background: "repeating-linear-gradient(90deg, transparent, transparent 6px, hsl(345, 30%, 75%) 6px, hsl(345, 30%, 75%) 8px, transparent 8px, transparent 14px)" }}
          />
          <div className="absolute top-3 left-3 text-xl opacity-40">🌹</div>
          <div className="absolute top-3 right-3 text-xl opacity-40">🌹</div>
          <div className="absolute bottom-3 left-3 text-xl opacity-40">🥀</div>
          <div className="absolute bottom-3 right-3 text-xl opacity-40">🥀</div>

          <motion.div
            className="absolute top-0 left-0 right-0 origin-top"
            animate={opened ? { rotateX: 180, opacity: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ transformStyle: "preserve-3d", perspective: 800 }}
          >
            <div
              className="w-full h-[110px] md:h-[150px]"
              style={{
                background: "linear-gradient(180deg, hsl(345, 35%, 80%), hsl(350, 30%, 85%))",
                clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                boxShadow: "inset 0 -2px 10px hsla(345, 30%, 50%, 0.15)",
              }}
            />
          </motion.div>

          <div className="absolute inset-0 flex items-center justify-center">
            <p className="font-handwritten text-lg md:text-xl opacity-60" style={{ color: "hsl(345, 40%, 40%)" }}>
              For you, my love ♡
            </p>
          </div>
        </div>

        {!opened && (
          <motion.button
            onClick={handleSealClick}
            className="absolute left-1/2 -translate-x-1/2 -bottom-6 z-20 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center"
            style={{
              background: "radial-gradient(circle at 35% 35%, hsl(0, 55%, 45%), hsl(0, 60%, 30%))",
              boxShadow: "0 4px 15px hsla(0, 60%, 25%, 0.5), inset 0 1px 2px hsla(0, 0%, 100%, 0.2)",
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{ boxShadow: ["0 4px 15px hsla(0, 60%, 25%, 0.5)", "0 4px 25px hsla(0, 60%, 25%, 0.8)", "0 4px 15px hsla(0, 60%, 25%, 0.5)"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="font-serif text-sm md:text-base font-bold" style={{ color: "hsl(40, 30%, 85%)" }}>♡</span>
          </motion.button>
        )}

        {!opened && (
          <motion.p
            className="text-center mt-10 font-handwritten text-base md:text-lg"
            style={{ color: "hsl(345, 35%, 45%)" }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Click the seal to open ♡
          </motion.p>
        )}
      </motion.div>

      {/* Floating hearts - CSS-driven for smoothness */}
      <AnimatePresence>
        {showHearts &&
          hearts.map((h) => (
            <motion.div
              key={h.id}
              className="absolute pointer-events-none"
              style={{
                left: `${h.x}%`,
                bottom: "40%",
                fontSize: h.size,
                willChange: "transform, opacity",
              }}
              initial={{ y: 0, opacity: 1, scale: 1, x: 0 }}
              animate={{
                y: -window.innerHeight * 1.2,
                x: h.drift,
                opacity: 0,
                scale: 0.4,
              }}
              transition={{
                duration: 3.5,
                delay: h.delay,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="none"
                style={{ filter: `drop-shadow(0 0 4px hsla(345, 70%, 60%, 0.5))` }}
              >
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  fill={`hsl(${345 + (h.id % 3) * 8}, ${55 + (h.id % 4) * 5}%, ${55 + (h.id % 3) * 10}%)`}
                />
              </svg>
            </motion.div>
          ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default EnvelopePage;
