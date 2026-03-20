import { motion } from "motion/react";

const FORMS_LINK = "https://forms.office.com/r/Q4dmT4XJs3";

export default function CTASection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700">
      <motion.div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-6 text-white">
          Be a part of Innovation Expo
        </h2>
        <motion.a
          href={FORMS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-white text-orange-600 px-8 py-3 rounded-xl font-bold shadow-lg"
        >
          Register Now
        </motion.a>
        
      </motion.div>
    </section>
  );
}