import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const ClaimGifts = () => {
  const [selected, setSelected] = useState<"coupon" | "bouquet" | null>(null);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 relative"
      style={{
        background: "linear-gradient(180deg, hsl(350, 30%, 92%), hsl(345, 25%, 89%))",
      }}
    >
      <motion.h2
        className="font-serif text-3xl md:text-5xl mb-2 text-center"
        style={{ color: "hsl(345, 50%, 35%)" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Claim Your Gifts, My Love
      </motion.h2>
      <motion.p
        className="font-handwritten text-xl mb-12"
        style={{ color: "hsl(345, 40%, 55%)" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        🎀 pick one, or both ♡
      </motion.p>

      <div className="flex flex-col md:flex-row gap-8 mb-8">
        {/* Love Coupon */}
        <motion.button
          onClick={() => setSelected("coupon")}
          className="flex flex-col items-center gap-3 px-10 py-8 rounded-2xl cursor-pointer"
          style={{
            background: "hsla(0, 0%, 100%, 0.6)",
            border: "2px solid hsl(345, 30%, 82%)",
            boxShadow: "0 8px 30px hsla(345, 30%, 50%, 0.1)",
          }}
          whileHover={{ scale: 1.05, boxShadow: "0 12px 40px hsla(345, 40%, 50%, 0.2)" }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-5xl">🎟</span>
          <span className="font-handwritten text-xl" style={{ color: "hsl(345, 45%, 35%)" }}>Love Coupon</span>
        </motion.button>

        {/* Bouquet */}
        <motion.button
          onClick={() => setSelected("bouquet")}
          className="flex flex-col items-center gap-3 px-10 py-8 rounded-2xl cursor-pointer"
          style={{
            background: "hsla(0, 0%, 100%, 0.6)",
            border: "2px solid hsl(345, 30%, 82%)",
            boxShadow: "0 8px 30px hsla(345, 30%, 50%, 0.1)",
          }}
          whileHover={{ scale: 1.05, boxShadow: "0 12px 40px hsla(345, 40%, 50%, 0.2)" }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-5xl">💐</span>
          <span className="font-handwritten text-xl" style={{ color: "hsl(345, 45%, 35%)" }}>Bouquet</span>
        </motion.button>
      </div>

      {/* Revealed content */}
      <AnimatePresence mode="wait">
        {selected === "coupon" && (
          <motion.div
            key="coupon"
            className="max-w-md w-full p-8 rounded-xl text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, hsl(40, 25%, 95%), hsl(38, 20%, 90%))",
              border: "3px dashed hsl(345, 35%, 70%)",
              boxShadow: "0 10px 40px hsla(345, 30%, 40%, 0.15)",
            }}
            initial={{ opacity: 0, scale: 0.8, rotateZ: -5 }}
            animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <div className="absolute top-2 right-3 text-xs font-serif opacity-30" style={{ color: "hsl(345, 30%, 50%)" }}>
              REDEEMABLE ♡
            </div>
            <h3 className="font-serif text-2xl mb-1" style={{ color: "hsl(345, 50%, 35%)" }}>
              💌 Love Coupon
            </h3>
            <div className="w-16 h-px mx-auto my-3" style={{ background: "hsl(345, 30%, 70%)" }} />
            <p className="font-elegant text-lg leading-relaxed" style={{ color: "hsl(345, 35%, 35%)" }}>
              Redeem this coupon for a cozy movie night with unlimited cuddles and your favorite snacks ♡
            </p>
            <p className="font-handwritten text-sm mt-4 opacity-50" style={{ color: "hsl(345, 30%, 45%)" }}>
              Valid forever • No expiration • Unlimited uses
            </p>
          </motion.div>
        )}

        {selected === "bouquet" && (
          <motion.div
            key="bouquet"
            className="flex flex-col items-center gap-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <motion.div
              className="text-8xl"
              animate={{ rotate: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              💐
            </motion.div>
            <p className="font-handwritten text-xl" style={{ color: "hsl(345, 45%, 40%)" }}>
              A beautiful bouquet, just for you 🌹
            </p>
            <a
              href="https://digibouquet.vercel.app/bouquet/fc88c717-fb48-4e0a-b4c8-67d19217de73"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full font-handwritten text-lg pulse-glow inline-block"
              style={{
                background: "linear-gradient(135deg, hsl(345, 45%, 70%), hsl(350, 40%, 75%))",
                color: "hsl(345, 50%, 25%)",
                border: "1px solid hsl(345, 30%, 78%)",
              }}
            >
              Claim your bouquet 🌸
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ClaimGifts;
