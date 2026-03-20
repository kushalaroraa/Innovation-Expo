import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const TARGET_DATE = new Date("2026-03-26T17:00:00");
const FORMS_LINK = "https://forms.office.com/r/Q4dmT4XJs3";

function getCountdown() {
  const now = new Date();
  const diff = TARGET_DATE - now;

  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function FloatingCountdown() {
  const [countdown, setCountdown] = useState(getCountdown());

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(getCountdown());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleGuidelinesClick = () => {
    const section = document.getElementById("guidelines");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 w-[95%] sm:w-11/12 max-w-2xl"
    >
      <div className="bg-gray-900/95 backdrop-blur-lg rounded-2xl sm:rounded-3xl px-4 sm:px-8 py-4 sm:py-6 shadow-2xl border border-gray-700/20">
        
        <div className="text-center mb-3 sm:mb-4">
          <p className="text-orange-400 text-xs font-semibold uppercase tracking-wider mb-1 sm:mb-2">
            REGISTRATION OFFLINE
          </p>

          <p className="text-white text-xl sm:text-2xl md:text-3xl font-bold">
            {countdown.days}d {countdown.hours}h {countdown.minutes}m {countdown.seconds}s
          </p>

          <p className="text-gray-400 text-xs mt-1 sm:mt-2">
            Closing 26 March @ 5:00 PM
          </p>
        </div>
        
        <div className="flex gap-2 sm:gap-3 justify-center flex-wrap">
          
          <button
            onClick={handleGuidelinesClick}
            className="bg-white text-gray-900 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg hover:scale-105 flex items-center gap-2 text-sm sm:text-base"
          >
            GUIDELINES
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>

          <a
            href={FORMS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold hover:bg-orange-600 transition-all shadow-lg hover:scale-105 flex items-center gap-2 text-sm sm:text-base"
          >
            REGISTER NOW
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </a>

        </div>
      </div>
    </motion.div>
  );
}