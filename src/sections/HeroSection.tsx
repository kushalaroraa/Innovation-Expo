import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { useState, useEffect } from "react";

const TARGET_DATE = new Date("2026-03-29T00:00:00");

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

export default function HeroSection() {
  const [countdown, setCountdown] = useState(getCountdown());

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(getCountdown());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-orange-50 to-orange-100"></div>

      {/* BLOBS */}
      <div className="absolute top-20 -left-40 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute top-40 -right-40 w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-40 left-1/2 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>

      <motion.div
          className="absolute right-[7%] top-[14%] z-10 hidden md:block"
          animate={{ rotate: [0, 10, 0, -8, 0], scale: [1, 1.05, 1, 0.97, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="96" height="104" viewBox="0 0 96 104" fill="none">
            {/* Petal 1 — pointing upper-right */}
            <path d="M48 58 C 52 40, 68 18, 76 8 C 72 26, 58 46, 48 58Z" fill="#f97316" opacity="0.92"/>
            {/* Petal 2 — pointing right */}
            <path d="M48 58 C 62 50, 82 46, 92 44 C 80 52, 64 54, 48 58Z" fill="#fb923c" opacity="0.80"/>
            {/* Petal 3 — pointing upper-left */}
            <path d="M48 58 C 38 40, 30 16, 28 6 C 36 22, 44 42, 48 58Z" fill="#fdba74" opacity="0.85"/>
            {/* small center dot */}
            <circle cx="48" cy="58" r="5" fill="#f97316" opacity="0.95"/>
          </svg>
        </motion.div>

        {/* ── DOODLE: Left side orange swoosh / curl with arrowhead ── */}
        <motion.div
          className="absolute left-[5%] top-[38%] z-10 hidden lg:block"
          animate={{ y: [0, -10, 0], rotate: [0, 3, 0, -3, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="110" height="120" viewBox="0 0 110 120" fill="none">
            {/* Main swoosh curve */}
            <path
              d="M18 100 C 16 72, 28 42, 52 28 C 72 16, 90 22, 95 38 C 100 54, 84 72, 60 68 C 40 65, 30 50, 38 36"
              stroke="#f97316" strokeWidth="3.5" strokeLinecap="round" fill="none"
            />
            {/* Arrowhead at tail */}
            <path d="M30 34 L38 36 L34 44" stroke="#f97316" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            {/* small decorative cross-marks below */}
            <path d="M14 110 L22 118 M22 110 L14 118" stroke="#fb923c" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </motion.div>

        {/* ── DOODLE: 4-pointed sparkle star — top-left area ── */}
        <motion.div
          className="absolute left-[18%] top-[20%] z-10 hidden md:block"
          animate={{ rotate: [0, 90, 180, 270, 360] }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        >
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
            <path d="M21 2 L24 18 L21 40 L18 18 Z" fill="#f97316" opacity="0.85"/>
            <path d="M2 21 L18 18 L40 21 L18 24 Z" fill="#fb923c" opacity="0.85"/>
          </svg>
        </motion.div>

        {/* ── DOODLE: Small scattered dot cluster — upper right inner ── */}
        <motion.div
          className="absolute right-[20%] top-[22%] z-10 hidden md:block"
          animate={{ y: [0, -6, 0], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="64" height="44" viewBox="0 0 64 44" fill="none">
            <circle cx="8"  cy="8"  r="5.5" fill="#f97316" opacity="0.75"/>
            <circle cx="30" cy="14" r="4"   fill="#fb923c" opacity="0.60"/>
            <circle cx="54" cy="6"  r="7"   fill="#fdba74" opacity="0.70"/>
            <circle cx="20" cy="36" r="3.5" fill="#fed7aa" opacity="0.80"/>
            <circle cx="46" cy="32" r="4.5" fill="#f97316" opacity="0.50"/>
          </svg>
        </motion.div>

        {/* ── DOODLE: Right-side zigzag / tick marks ── */}
        <motion.div
          className="absolute right-[6%] bottom-[34%] z-10 hidden lg:block"
          animate={{ x: [0, 4, 0, -4, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="72" height="60" viewBox="0 0 72 60" fill="none">
            <path d="M6 40 C 22 24, 40 36, 56 18" stroke="#f97316" strokeWidth="3" strokeLinecap="round" fill="none"/>
            <path d="M14 52 C 28 40, 44 48, 60 34" stroke="#fb923c" strokeWidth="2.5" strokeLinecap="round" fill="none" strokeDasharray="5 4"/>
            <circle cx="60" cy="16" r="5" fill="#f97316" opacity="0.75"/>
            <circle cx="68" cy="30" r="3" fill="#fdba74" opacity="0.70"/>
          </svg>
        </motion.div>

        {/* ── DOODLE: Bottom-left small asterisk star ── */}
        <motion.div
          className="absolute left-[12%] bottom-[38%] z-10 hidden lg:block"
          animate={{ rotate: [0, -360] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        >
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M18 2 L18 34 M2 18 L34 18 M6 6 L30 30 M30 6 L6 30"
              stroke="#f97316" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </motion.div>

        {/* ── DOODLE: Tiny floating dots — bottom-right scattered ── */}
        <motion.div
          className="absolute right-[28%] bottom-[30%] z-10 hidden md:block"
          animate={{ y: [0, 8, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <svg width="44" height="28" viewBox="0 0 44 28" fill="none">
            <circle cx="6"  cy="6"  r="4" fill="#fb923c" opacity="0.65"/>
            <circle cx="22" cy="14" r="3" fill="#f97316" opacity="0.55"/>
            <circle cx="38" cy="5"  r="5" fill="#fdba74" opacity="0.60"/>
          </svg>
        </motion.div>
      
      {/* Main Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 px-4 w-full max-w-lg sm:max-w-none"
        >
          <div className="bg-white/60 backdrop-blur-sm px-4 sm:px-6 py-2 rounded-full inline-block mb-6 sm:mb-8 border border-orange-200">
            <p className="text-xs sm:text-sm font-medium uppercase tracking-wider text-gray-800">Innovation Expo 2026 - IEEE WIE</p>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-600">
            INNOVATION EXPO
          </h1>

          {/* Small inline doodle badge beside subtitle */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 mt-4">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">Where Ideas Meet Impact</p>
            {/* Inline star doodle */}
            <motion.span
              animate={{ rotate: [0, 20, 0, -20, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="hidden sm:inline-block"
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M14 1 L16.5 11 L14 27 L11.5 11 Z" fill="#f97316" opacity="0.9"/>
                <path d="M1 14 L11 11.5 L27 14 L11 16.5 Z" fill="#fb923c" opacity="0.9"/>
              </svg>
            </motion.span>
          </div>

          <div className="bg-white px-6 sm:px-8 py-2 sm:py-2.5 rounded-full inline-block mb-5 sm:mb-6 shadow-xl border-2 border-orange-500">
            <p className="text-sm sm:text-base md:text-lg font-bold text-gray-900">29 MARCH 2026</p>
          </div>

          <p className="text-sm font-semibold uppercase tracking-widest mb-6 flex items-center justify-center gap-2 text-gray-800">
            <Calendar className="w-4 h-4" />
            EVENT STARTS IN
          </p>

          <div className="flex gap-2 sm:gap-4 justify-center mb-10 sm:mb-12">
            {[
              { value: countdown.days.toString().padStart(2, '0'), label: 'D' },
              { value: countdown.hours.toString().padStart(2, '0'), label: 'H' },
              { value: countdown.minutes.toString().padStart(2, '0'), label: 'M' },
              { value: countdown.seconds.toString().padStart(2, '0'), label: 'S' }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="bg-gradient-to-br from-orange-600 to-orange-700 text-white rounded-2xl w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center shadow-2xl">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold">{item.value}</span>
                </div>
                <span className="text-sm font-bold mt-2 text-gray-900">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>
  );
}