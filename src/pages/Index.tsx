import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import FloatingSparkles from "@/components/FloatingSparkles";
import EnvelopePage from "@/components/EnvelopePage";
import MonthsaryMessage from "@/components/MonthsaryMessage";
import ClawMachine from "@/components/ClawMachine";
import HerShrine from "@/components/HerShrine";
import LoveInNumbers from "@/components/LoveInNumbers";
import ClaimGifts from "@/components/ClaimGifts";
import TheSong from "@/components/TheSong";
import LoveLetter from "@/components/LoveLetter";

type Page = "envelope" | "monthsary" | "claw" | "slideshow";

const Index = () => {
  const [page, setPage] = useState<Page>("envelope");

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <FloatingSparkles count={15} />

      <AnimatePresence mode="wait">
        {page === "envelope" && (
          <EnvelopePage key="envelope" onComplete={() => setPage("monthsary")} />
        )}
        {page === "monthsary" && (
          <MonthsaryMessage key="monthsary" onNext={() => setPage("claw")} />
        )}
        {page === "claw" && (
          <ClawMachine key="claw" onComplete={() => setPage("slideshow")} />
        )}
      </AnimatePresence>

      {page === "slideshow" && (
        <div className="scroll-smooth">
          <HerShrine />
          <LoveInNumbers />
          <ClaimGifts />
          <TheSong />
          <LoveLetter />
        </div>
      )}
    </div>
  );
};

export default Index;
