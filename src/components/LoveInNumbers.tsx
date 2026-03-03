import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const LoveInNumbers = () => {
  const [time, setTime] = useState({ months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Nov 30, 2025 at 4:37 PM IST (UTC+5:30) = 11:07 AM UTC
    const startDate = new Date(Date.UTC(2025, 10, 30, 11, 7, 0));

    const update = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      const totalSeconds = Math.floor(diff / 1000);
      const totalMinutes = Math.floor(totalSeconds / 60);
      const totalHours = Math.floor(totalMinutes / 60);
      const totalDays = Math.floor(totalHours / 24);

      // Calculate months difference
      let months = (now.getFullYear() - startDate.getFullYear()) * 12 + (now.getMonth() - startDate.getMonth());
      // Adjust if we haven't reached the day yet this month
      if (now.getDate() < startDate.getDate()) months--;

      const days = totalDays % 30;
      const hours = totalHours % 24;
      const minutes = totalMinutes % 60;
      const seconds = totalSeconds % 60;

      setTime({ months, days, hours, minutes, seconds });
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { label: "Months", value: time.months },
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16"
      style={{
        background: "linear-gradient(180deg, hsl(345, 25%, 88%), hsl(350, 30%, 92%), hsl(345, 20%, 87%))",
      }}
    >
      <motion.h2
        className="font-serif text-3xl md:text-5xl mb-2 text-center"
        style={{ color: "hsl(345, 50%, 35%)" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Our Love in Numbers
      </motion.h2>
      <motion.p
        className="font-handwritten text-xl mb-12 opacity-60"
        style={{ color: "hsl(345, 40%, 45%)" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        ♡ since November 30, 2025 — 4:37 PM IST ♡
      </motion.p>

      <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl">
        {units.map((unit, i) => (
          <motion.div
            key={unit.label}
            className="flex flex-col items-center p-4 md:p-6 rounded-2xl min-w-[100px] md:min-w-[130px]"
            style={{
              background: "hsla(0, 0%, 100%, 0.5)",
              backdropFilter: "blur(10px)",
              border: "1px solid hsl(345, 25%, 85%)",
              boxShadow: "0 8px 30px hsla(345, 30%, 50%, 0.1)",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="font-serif text-3xl md:text-5xl font-bold text-glow"
              style={{ color: "hsl(345, 55%, 45%)" }}
              key={unit.value}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              {String(unit.value).padStart(2, "0")}
            </motion.span>
            <span className="font-handwritten text-sm md:text-base mt-1" style={{ color: "hsl(345, 30%, 50%)" }}>
              {unit.label}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="font-handwritten text-lg mt-10 opacity-50"
        style={{ color: "hsl(345, 40%, 45%)" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        transition={{ delay: 0.8 }}
        viewport={{ once: true }}
      >
        ...and counting forever ♡
      </motion.p>
    </div>
  );
};

export default LoveInNumbers;
