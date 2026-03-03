import { motion } from "framer-motion";

interface MonthsaryMessageProps {
  onNext: () => void;
}

const MonthsaryMessage = ({ onNext }: MonthsaryMessageProps) => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 6 + 2,
    delay: Math.random() * 5,
    duration: Math.random() * 4 + 3,
  }));

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, hsl(350, 35%, 92%), hsl(345, 40%, 88%), hsl(340, 30%, 90%))" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(8px)" }}
      transition={{ duration: 1 }}
    >
      {/* Floating particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full float"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: `radial-gradient(circle, hsla(345, 60%, 75%, 0.6), hsla(345, 50%, 65%, 0.1))`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}

      {/* Main text */}
      <motion.h1
        className="font-serif text-4xl md:text-6xl lg:text-7xl text-center px-6 text-glow leading-tight"
        style={{ color: "hsl(345, 50%, 40%)" }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      >
        HAPPY 3 MONTHSARY
        <br />
        <span className="font-handwritten text-5xl md:text-7xl lg:text-8xl" style={{ color: "hsl(345, 55%, 50%)" }}>
          MY LOVEEEE
        </span>
        <span className="ml-3">💕</span>
      </motion.h1>

      {/* Decorative elements */}
      <motion.div
        className="mt-8 flex gap-4 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-2xl">🌹</span>
        <div className="w-24 h-px" style={{ background: "hsl(345, 40%, 70%)" }} />
        <span className="text-2xl">♡</span>
        <div className="w-24 h-px" style={{ background: "hsl(345, 40%, 70%)" }} />
        <span className="text-2xl">🌹</span>
      </motion.div>

      {/* Next button */}
      <motion.button
        onClick={onNext}
        className="absolute bottom-12 right-8 md:bottom-16 md:right-16 px-8 py-3 rounded-full font-handwritten text-xl md:text-2xl pulse-glow"
        style={{
          background: "linear-gradient(135deg, hsl(345, 45%, 75%), hsl(350, 40%, 80%))",
          color: "hsl(345, 50%, 30%)",
          border: "1px solid hsl(345, 30%, 80%)",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        What&apos;s next? ♡
      </motion.button>
    </motion.div>
  );
};

export default MonthsaryMessage;
