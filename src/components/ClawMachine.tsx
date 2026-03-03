import { motion } from "framer-motion";
import { useState, useCallback, useEffect, useRef } from "react";

interface ClawMachineProps {
  onComplete: () => void;
}

const SECRET_CODE = "ILOVEU";

const ClawMachine = ({ onComplete }: ClawMachineProps) => {
  const [clawX, setClawX] = useState(50);
  const [dropping, setDropping] = useState(false);
  const [grabbed, setGrabbed] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const [codeInput, setCodeInput] = useState("");
  const [codeCorrect, setCodeCorrect] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const specialHeartX = 50;

  const hearts = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: 15 + (i % 6) * 13,
    y: 65 + Math.random() * 15,
    emoji: i === 6 ? "💖" : ["💗", "💕", "💓", "💞", "🩷"][i % 5],
    isSpecial: i === 6,
    floatDelay: Math.random() * 3,
  }));

  const handleDrop = useCallback(() => {
    if (dropping || grabbed) return;
    setDropping(true);

    const isNearSpecial = Math.abs(clawX - specialHeartX) < 18;

    setTimeout(() => {
      if (isNearSpecial) {
        setGrabbed(true);
        setTimeout(() => setShowCode(true), 1500);
      }
      setDropping(false);
    }, 1500);
  }, [clawX, dropping, grabbed, specialHeartX]);

  const handleCodeSubmit = () => {
    if (codeInput.toUpperCase().trim() === SECRET_CODE) {
      setCodeCorrect(true);
      setTimeout(onComplete, 1500);
    }
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (showCode) return;
      if (e.key === "ArrowLeft") setClawX((x) => Math.max(10, x - 5));
      if (e.key === "ArrowRight") setClawX((x) => Math.min(90, x + 5));
      if (e.key === " " || e.key === "Enter") handleDrop();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [showCode, handleDrop]);

  const handleMove = (clientX: number) => {
    if (containerRef.current && !dropping && !showCode) {
      const rect = containerRef.current.getBoundingClientRect();
      const pct = ((clientX - rect.left) / rect.width) * 100;
      setClawX(Math.max(10, Math.min(90, pct)));
    }
  };

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(180deg, hsl(350, 30%, 92%), hsl(340, 25%, 87%))" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col items-center w-full max-w-md px-4">
        <motion.h2
          className="font-serif text-2xl md:text-3xl mb-3 text-center"
          style={{ color: "hsl(345, 45%, 35%)" }}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Grab the Special Heart! 💖
        </motion.h2>

        <p className="font-elegant text-sm mb-4 opacity-60 text-center" style={{ color: "hsl(345, 30%, 40%)" }}>
          Drag or use arrow keys to move • Tap or press space to drop
        </p>

        {/* Hint for special heart location */}
        <motion.p
          className="font-handwritten text-xs mb-3 text-center"
          style={{ color: "hsl(345, 40%, 55%)" }}
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ✨ Hint: the special 💖 is near the center ✨
        </motion.p>

        {/* Claw Machine */}
        <div
          ref={containerRef}
          className="relative w-full aspect-[3/4] max-h-[55vh] rounded-3xl overflow-hidden"
          style={{
            background: "linear-gradient(180deg, hsl(345, 20%, 88%), hsl(350, 18%, 82%))",
            border: "3px solid hsl(345, 25%, 78%)",
            boxShadow: "0 15px 50px hsla(345, 40%, 30%, 0.2), inset 0 0 80px hsla(345, 15%, 75%, 0.3), inset 0 -2px 0 hsla(0, 0%, 100%, 0.2)",
          }}
          onMouseMove={(e) => handleMove(e.clientX)}
          onTouchMove={(e) => handleMove(e.touches[0].clientX)}
          onClick={handleDrop}
        >
          {/* Glass shine */}
          <div
            className="absolute inset-0 pointer-events-none z-10 rounded-3xl"
            style={{
              background: "linear-gradient(120deg, hsla(0,0%,100%,0.18) 0%, transparent 35%, hsla(0,0%,100%,0.06) 100%)",
            }}
          />

          {/* Top decorative bar */}
          <div
            className="absolute top-0 left-0 right-0 h-8 z-10 flex items-center justify-center"
            style={{
              background: "linear-gradient(180deg, hsl(345, 30%, 75%), hsl(345, 25%, 70%))",
              borderBottom: "2px solid hsl(345, 20%, 65%)",
            }}
          >
            <span className="font-handwritten text-xs" style={{ color: "hsl(345, 50%, 40%)" }}>♡ LOVE CATCHER ♡</span>
          </div>

          {/* Claw track */}
          <div className="absolute top-10 left-4 right-4 h-1.5 rounded-full" style={{ background: "hsl(345, 18%, 72%)" }} />

          {/* Claw */}
          <motion.div
            className="absolute top-12 z-20 flex flex-col items-center"
            style={{ left: `${clawX}%`, transform: "translateX(-50%)" }}
          >
            {/* Claw rope */}
            <motion.div
              className="w-0.5 origin-top rounded-full"
              style={{ background: "hsl(345, 20%, 50%)" }}
              animate={{ height: dropping ? 150 : 30 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            />
            {/* Claw arms */}
            <motion.div
              className="flex items-start -mt-1"
              animate={{ scaleX: dropping ? 0.5 : 1 }}
              transition={{ duration: 0.3, delay: dropping ? 0.7 : 0 }}
            >
              <div className="w-3 h-7 rounded-b-full" style={{ background: "hsl(345, 28%, 50%)", transform: "rotate(-25deg)" }} />
              <div className="w-1.5 h-5 rounded-b-sm" style={{ background: "hsl(345, 28%, 50%)" }} />
              <div className="w-3 h-7 rounded-b-full" style={{ background: "hsl(345, 28%, 50%)", transform: "rotate(25deg)" }} />
            </motion.div>
            {grabbed && !showCode && (
              <motion.div
                className="text-3xl mt-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: -130 }}
                transition={{ duration: 1.5 }}
              >
                💖
              </motion.div>
            )}
          </motion.div>

          {/* Hearts inside machine */}
          {hearts.map((h) => (
            <motion.div
              key={h.id}
              className={`absolute text-2xl md:text-3xl ${h.isSpecial ? "pulse-glow" : ""}`}
              style={{
                left: `${h.x}%`,
                top: `${h.y}%`,
                filter: h.isSpecial ? "drop-shadow(0 0 10px hsla(345, 70%, 55%, 0.9))" : "none",
              }}
              animate={!grabbed || !h.isSpecial ? { y: [0, -6, 0] } : { opacity: 0 }}
              transition={{
                duration: 2.5,
                delay: h.floatDelay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {h.emoji}
            </motion.div>
          ))}

          {/* Bottom "prize area" */}
          <div
            className="absolute bottom-0 left-0 right-0 h-6 rounded-b-3xl"
            style={{ background: "linear-gradient(180deg, transparent, hsl(345, 20%, 78%))" }}
          />
        </div>

        {/* Code reveal */}
        {showCode && !codeCorrect && (
          <motion.div
            className="mt-6 flex flex-col items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="font-handwritten text-xl" style={{ color: "hsl(345, 50%, 40%)" }}>
              The heart says: <strong className="text-glow">{SECRET_CODE}</strong>
            </p>
            <div className="flex gap-2">
              <input
                type="text"
                value={codeInput}
                onChange={(e) => setCodeInput(e.target.value)}
                placeholder="Enter the code..."
                className="px-4 py-2 rounded-full font-elegant text-center outline-none"
                style={{
                  background: "hsl(350, 25%, 94%)",
                  border: "1px solid hsl(345, 30%, 82%)",
                  color: "hsl(345, 40%, 30%)",
                }}
                onKeyDown={(e) => e.key === "Enter" && handleCodeSubmit()}
              />
              <button
                onClick={handleCodeSubmit}
                className="px-6 py-2 rounded-full font-handwritten text-lg transition-all hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, hsl(345, 45%, 72%), hsl(350, 40%, 78%))",
                  color: "hsl(345, 50%, 25%)",
                  boxShadow: "0 4px 15px hsla(345, 40%, 50%, 0.2)",
                }}
              >
                Enter ♡
              </button>
            </div>
          </motion.div>
        )}

        {codeCorrect && (
          <motion.p
            className="mt-6 font-handwritten text-2xl text-glow"
            style={{ color: "hsl(345, 55%, 45%)" }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            Correct! Opening your surprise... 💕
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

export default ClawMachine;
