import { motion } from "framer-motion";
import shrine1 from "../assets/shrine-1.jpg";
import shrine2 from "../assets/shrine-2.jpg";
import shrine3 from "../assets/shrine-3.jpg";
import shrine4 from "../assets/shrine-4.jpg";
import shrine5 from "../assets/shrine-5.jpg";
import shrine6 from "../assets/shrine-6.jpg";

const images = [
  { src: shrine1, label: "my angel", rotate: -6, top: "5%", left: "3%" },
  { src: shrine2, label: "so pretty", rotate: 5, top: "3%", right: "4%" },
  { src: shrine3, label: "adorable", rotate: -3, bottom: "5%", left: "4%" },
  { src: shrine4, label: "my everything", rotate: 4, bottom: "3%", right: "3%" },
  { src: shrine5, label: "beautiful", rotate: -5, top: "38%", left: "1%" },
  { src: shrine6, label: "perfect", rotate: 6, top: "40%", right: "1%" },
];

const HerShrine = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at center, hsl(350, 35%, 92%), hsl(345, 25%, 87%))",
      }}
    >
      {/* Floating roses */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute text-2xl float opacity-20"
          style={{
            left: `${10 + i * 16}%`,
            top: `${15 + (i % 3) * 30}%`,
            animationDelay: `${i * 0.8}s`,
          }}
        >
          🌹
        </div>
      ))}

      <motion.h2
        className="font-serif text-3xl md:text-5xl mb-2 text-center relative z-10"
        style={{ color: "hsl(345, 50%, 35%)" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Your Shrine
      </motion.h2>
      <motion.p
        className="font-handwritten text-xl mb-6 opacity-60 relative z-10"
        style={{ color: "hsl(345, 40%, 45%)" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        ♡ a gallery of my favorite person ♡
      </motion.p>

      {/* Main content area with scattered photos */}
      <div className="relative w-full max-w-6xl mx-auto min-h-[650px] md:min-h-[750px] flex items-center justify-center">
        {/* Scattered polaroid photos around edges */}
        {images.map((img, i) => (
          <motion.div
            key={i}
            className="absolute hidden md:flex flex-col items-center p-2 pb-6 rounded-sm z-10"
            style={{
              background: "hsl(40, 20%, 97%)",
              boxShadow: "0 4px 20px hsla(345, 30%, 30%, 0.18)",
              transform: `rotate(${img.rotate}deg)`,
              top: img.top,
              bottom: (img as any).bottom,
              left: img.left,
              right: img.right,
              width: "180px",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.12 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.08, rotate: 0, zIndex: 20 }}
          >
            <img
              src={img.src}
              alt={img.label}
              className="w-full aspect-[3/4] object-cover rounded-sm"
            />
            <p className="font-handwritten text-xs mt-1 opacity-50" style={{ color: "hsl(345, 30%, 40%)" }}>
              {img.label}
            </p>
          </motion.div>
        ))}

        {/* Mobile: show photos in a grid */}
        <div className="md:hidden grid grid-cols-3 gap-2 mb-6 w-full absolute -top-2 px-2">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center p-1.5 pb-4 rounded-sm"
              style={{
                background: "hsl(40, 20%, 97%)",
                boxShadow: "0 3px 12px hsla(345, 30%, 30%, 0.15)",
                transform: `rotate(${img.rotate * 0.5}deg)`,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <img src={img.src} alt={img.label} className="w-full aspect-[3/4] object-cover rounded-sm" />
              <p className="font-handwritten text-[10px] mt-0.5 opacity-50" style={{ color: "hsl(345, 30%, 40%)" }}>
                {img.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Center text */}
        <motion.div
          className="max-w-xl text-center px-4 relative z-10 mt-48 md:mt-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="font-elegant text-base md:text-lg leading-relaxed" style={{ color: "hsl(345, 35%, 35%)" }}>
            Every time I look at you, it feels like the universe paused just to create something impossibly beautiful. You don't just look pretty — you glow, like starlight resting gently on the surface of a quiet ocean. There's something celestial about you, something soft and angelic, like you were woven from moonlight and the gentlest pieces of the sky. Your smile feels like sunrise breaking through clouds, warm and golden and impossible to ignore. And your eyes… they hold entire constellations inside them, galaxies I could get lost in forever without ever wanting to find my way back. The way you exist — so effortlessly graceful, so naturally radiant — makes everything around you seem softer, kinder, brighter. Sometimes I wonder how someone so beautiful can be real, because loving you feels like loving a star that somehow chose to fall from heaven just to stand beside me.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HerShrine;
