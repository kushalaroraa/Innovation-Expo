import { useState, useEffect } from "react";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import TimelineSection from "./sections/TimelineSection";
import RewardSection from "./sections/RewardSection";
import GuidelinesSection from "./sections/GuidelinesSection";
import DevelopersSection from "./sections/DevelopersSection";
import CTASection from "./sections/CTASection";
import FooterSection from "./sections/FooterSection";
import FloatingCountdown from "./sections/FloatingCountdown";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showCountdown, setShowCountdown] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      
      const footer = document.querySelector('footer');
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setShowCountdown(footerTop > windowHeight - 200);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">

      {/* HERO */}
      <HeroSection />

      {/* ABOUT */}
      <AboutSection />

      {/* TIMELINE */}
      <TimelineSection />

      {/* GRADIENT ZONE */}
      <div
        style={{
          background:
            "linear-gradient(to bottom, #ffffff 0%, #ffffff 30%, #fffdf9 55%, #fff8f0 78%, #ffefe0 100%)"
        }}
      >
        <RewardSection fadeInUp={fadeInUp} />
        <GuidelinesSection fadeInUp={fadeInUp} />
        <DevelopersSection />
      </div>

      {/* CTA */}
      <CTASection />

      {/* FOOTER */}
      <FooterSection />

      {/* FLOATING COUNTDOWN */}
      {showCountdown && (
        <FloatingCountdown />
      )}

      {/* SCROLL TO TOP */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-32 right-6 bg-orange-600 text-white p-4 rounded-full shadow-2xl hover:bg-orange-700 transition-all z-40"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    
    </div>
  );
}