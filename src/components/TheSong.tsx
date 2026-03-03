import { motion } from "framer-motion";
import kenCarson from '../assets/ken-carson.jpg';

const TheSong = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at center, hsl(0, 10%, 12%), hsl(0, 5%, 6%))",
      }}
    >
      {/* Deep red ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 60%, hsla(0, 60%, 25%, 0.2), transparent 70%)",
        }}
      />

      <motion.h2
        className="font-serif text-3xl md:text-5xl mb-2 text-center z-10"
        style={{ color: "hsl(0, 40%, 70%)" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Our Song
      </motion.h2>
      <motion.p
        className="font-handwritten text-xl mb-10 z-10"
        style={{ color: "hsl(0, 30%, 55%)" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        ♡ I Need U — Ken Carson ♡
      </motion.p>

      {/* Vinyl record */}
      <motion.div
        className="relative z-10 w-60 h-60 md:w-80 md:h-80 rounded-full mb-10"
        style={{
          background: `url(${kenCarson}) center/cover`,
          boxShadow: "0 0 60px hsla(0, 0%, 0%, 0.9), 0 0 40px hsla(0, 60%, 20%, 0.4)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        {/* Dark overlay for vinyl feel */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(circle, transparent 20%, hsla(0, 0%, 0%, 0.45) 45%, hsla(0, 0%, 0%, 0.7) 100%)",
          }}
        />
        {/* Grooves */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              inset: `${10 + i * 4}%`,
              border: "1px solid hsla(0, 0%, 100%, 0.06)",
            }}
          />
        ))}
        {/* Center hole */}
        <div
          className="absolute rounded-full"
          style={{
            inset: "44%",
            background: "hsl(0, 0%, 3%)",
            boxShadow: "inset 0 2px 6px hsla(0, 0%, 0%, 0.8), 0 0 8px hsla(0, 0%, 0%, 0.6)",
          }}
        />
        {/* Glossy reflection */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: "linear-gradient(135deg, hsla(0, 0%, 100%, 0.12) 0%, transparent 40%, transparent 60%, hsla(0, 0%, 100%, 0.05) 100%)",
          }}
        />
      </motion.div>

      {/* Song description */}
      <motion.p
        className="font-elegant text-lg md:text-xl max-w-lg text-center leading-relaxed z-10 mb-8"
        style={{ color: "hsl(0, 20%, 60%)" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
      >
        It's because I NEED you. You're all I ever needed and wanted in this life, and life finally feels complete with you. Thank you for everything, my love.
      </motion.p>

      {/* Spotify link */}
      <motion.a
        href="https://open.spotify.com/playlist/6em2yaIucR9Uz1PoMlGVFI?si=4yWc-uxYSFKrE6SEj5dbSw"
        target="_blank"
        rel="noopener noreferrer"
        className="z-10 px-8 py-3 rounded-full font-handwritten text-lg inline-flex items-center gap-2"
        style={{
          background: "linear-gradient(135deg, hsl(0, 50%, 30%), hsl(0, 60%, 25%))",
          color: "hsl(0, 30%, 75%)",
          border: "1px solid hsl(0, 40%, 35%)",
          boxShadow: "0 4px 20px hsla(0, 60%, 25%, 0.4)",
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        viewport={{ once: true }}
      >
        🎵 Listen on Spotify
      </motion.a>
    </div>
  );
};

export default TheSong;
