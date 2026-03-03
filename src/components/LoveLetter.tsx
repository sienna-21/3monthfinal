import { motion } from "framer-motion";
import vintagePaper from "@/assets/vintage-paper.jpg";

const LoveLetter = () => {
  const floatingHearts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 8,
    duration: 6 + Math.random() * 6,
    size: 12 + Math.random() * 16,
  }));

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden"
      style={{
        backgroundImage: `url(${vintagePaper})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Warm candle overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 30%, hsla(38, 70%, 65%, 0.15), transparent 60%)",
          animation: "candle-flicker 4s ease-in-out infinite",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 30%, hsla(30, 20%, 15%, 0.2) 100%)",
        }}
      />

      <motion.div
        className="max-w-2xl w-full relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="font-serif text-3xl md:text-5xl text-center mb-8 italic"
          style={{ color: "hsl(345, 40%, 35%)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          A Letter For You
        </motion.h2>

        <div className="space-y-6">
          {[
            "My love,",
            "Happy monthsary to the most beautiful soul I have ever known.",
            "Sometimes I sit and think about us, about how we started, about everything we've been through in such a short time, and it honestly amazes me. You didn't just walk into my life — you changed it. You made it softer, warmer, brighter. Before you, things felt normal. After you, everything felt meaningful.",
            "I love you in a way that feels calm and powerful at the same time. It's not just butterflies or cute moments — it's deeper than that. It's the way my heart feels at peace when I talk to you. It's the way your voice can quiet my worst thoughts. It's the way your presence, even through a screen or a simple message, makes everything feel okay again.",
            "You make me feel safe. And that's something I don't take lightly. With you, I don't feel judged. I don't feel like I have to pretend. I can be completely myself — my flaws, my overthinking, my emotions — and you still stay. You still choose me. That means more to me than you'll ever fully understand.",
            "We've had our ups and downs. We've argued. We've misunderstood each other. We've had moments where things felt hard. But what makes us different is that we never walked away. We fought for each other, not against each other. And every time we chose to stay, we became stronger.",
            "That's what makes me believe in us.",
            "I don't just love you when things are easy. I love you when it's messy. I love you when we're figuring things out. I love you when we're learning. I love you when we're growing. And I know, with all my heart, that whatever comes our way, we'll keep choosing each other.",
            "When I think about the future, I see you in it. I see us growing older, still teasing each other, still holding hands, still choosing love every single day. I see us building a life that feels warm and safe and full of laughter. I see us standing together through everything — the storms, the sunshine, the quiet days, and the loud ones.",
            "And even beyond this life, if there's something after, if there are stars waiting for us somewhere — I would search for you there too. Not because I need you to survive, but because loving you feels like the most natural thing my heart has ever done. If souls are real, then mine will always recognize yours.",
            "You mean more to me than just a girlfriend. You are my partner, my comfort, my happiness, my safe place. You've made me better. You've made me more patient, more understanding, more open. You've shown me what it feels like to care for someone so deeply that their happiness becomes important to you too.",
            "Thank you for loving me.\nThank you for staying.\nThank you for choosing me.",
            "Three months is just the beginning. We have so many memories left to create, so many moments left to experience, so much love left to give each other. And I promise you this — I will keep choosing you. I will keep fighting for us. I will keep loving you with honesty, patience, and loyalty.",
            "Happy monthsary, my love.",
          ].map((paragraph, i) => (
            <motion.p
              key={i}
              className={`font-elegant text-lg md:text-xl leading-relaxed whitespace-pre-line ${i === 0 ? "font-handwritten text-2xl" : ""} ${i === 14 ? "font-handwritten text-xl" : ""}`}
              style={{ color: "hsl(345, 35%, 30%)" }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              {paragraph}
            </motion.p>
          ))}

          <motion.p
            className="font-handwritten text-3xl md:text-4xl text-center mt-12 text-glow"
            style={{ color: "hsl(345, 50%, 40%)" }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1 }}
            viewport={{ once: true }}
          >
            Forever yours ♡
          </motion.p>
        </div>
      </motion.div>

      {/* Floating hearts */}
      {floatingHearts.map((h) => (
        <motion.div
          key={h.id}
          className="absolute pointer-events-none opacity-20"
          style={{
            left: `${h.x}%`,
            bottom: -30,
            fontSize: h.size,
          }}
          animate={{
            y: [0, -window.innerHeight - 100],
            opacity: [0.3, 0],
            rotate: [0, Math.random() * 30 - 15],
          }}
          transition={{
            duration: h.duration,
            delay: h.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          ♡
        </motion.div>
      ))}
    </div>
  );
};

export default LoveLetter;
